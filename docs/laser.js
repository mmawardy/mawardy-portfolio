// Engraves the top logo with a laser head: each shape is outlined, then filled line by line.
window.engraveLogo = (() => {
  const TRACE_HEIGHT = 96;
  const SOLID_ALPHA = 110;
  const MIN_SHAPE_PIXELS = 4;
  const ROW_STEP = 2;
  const MAX_CONTOUR_GAP = 3;
  const JUMP_COST = 0.2;
  const FILL_COST = 0.14;
  const COOLING_RATE = 0.075;
  const COOLDOWN_SECONDS = 0.7;
  const MAX_PARTICLES = 150;
  const MAX_MARGIN = 70;
  const HEAT_COLOR = "rgb(255, 128, 48)";
  const SPARK_COLOR = "255, 196, 128";

  const makeCanvas = (width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  const readSolidPixels = (image) => {
    const height = TRACE_HEIGHT;
    const width = Math.round(image.naturalWidth * height / image.naturalHeight);
    const context = makeCanvas(width, height).getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0, width, height);
    const { data } = context.getImageData(0, 0, width, height);
    const solid = new Uint8Array(width * height);
    for (let index = 0; index < solid.length; index += 1) solid[index] = data[index * 4 + 3] > SOLID_ALPHA ? 1 : 0;
    return { width, height, solid };
  };

  const collectShape = (start, map, seen) => {
    const { width, height, solid } = map;
    const stack = [start];
    const pixels = [];
    seen[start] = 1;
    while (stack.length) {
      const pixel = stack.pop();
      pixels.push(pixel);
      const x = pixel % width;
      const y = (pixel - x) / width;
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const next = ny * width + nx;
          if (solid[next] && !seen[next]) { seen[next] = 1; stack.push(next); }
        }
      }
    }
    return pixels;
  };

  const describeShape = (pixels, width) => {
    const points = pixels.map((pixel) => ({ x: pixel % width, y: Math.floor(pixel / width) }));
    const xs = points.map(({ x }) => x);
    const ys = points.map(({ y }) => y);
    const [left, right, top, bottom] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    return { pixels, points, left, right, top, bottom };
  };

  const findShapes = (map) => {
    const seen = new Uint8Array(map.solid.length);
    const shapes = [];
    map.solid.forEach((isSolid, pixel) => {
      if (!isSolid || seen[pixel]) return;
      const pixels = collectShape(pixel, map, seen);
      if (pixels.length >= MIN_SHAPE_PIXELS) shapes.push(describeShape(pixels, map.width));
    });
    return shapes;
  };

  // The mark goes first, then the Arabic name right to left, then MAWARDY left to right.
  const orderShapes = (shapes, height) => {
    const isTall = (shape) => shape.bottom - shape.top > height * 0.45;
    const centerY = (shape) => (shape.top + shape.bottom) / 2;
    const textShapes = shapes.filter((shape) => !isTall(shape));
    const textTop = Math.min(...textShapes.map(({ top }) => top));
    const textBottom = Math.max(...textShapes.map(({ bottom }) => bottom));
    const split = textTop + (textBottom - textTop) * 0.68;
    const rank = (shape) => {
      if (isTall(shape)) return [0, shape.left];
      return centerY(shape) < split ? [1, -shape.right] : [2, shape.left];
    };
    return [...shapes].sort((a, b) => {
      const [groupA, orderA] = rank(a);
      const [groupB, orderB] = rank(b);
      return groupA - groupB || orderA - orderB;
    });
  };

  const findOutline = (shape, map) => {
    const { width, height, solid } = map;
    const isEdge = ({ x, y }) => x === 0 || y === 0 || x === width - 1 || y === height - 1
      || !solid[y * width + x - 1] || !solid[y * width + x + 1]
      || !solid[(y - 1) * width + x] || !solid[(y + 1) * width + x];
    return shape.points.filter(isEdge);
  };

  const takeNearest = (from, remaining) => {
    let bestIndex = 0;
    let bestDistance = Infinity;
    remaining.forEach((point, index) => {
      const distance = (point.x - from.x) ** 2 + (point.y - from.y) ** 2;
      if (distance < bestDistance) { bestDistance = distance; bestIndex = index; }
    });
    const [nearest] = remaining.splice(bestIndex, 1);
    return { nearest, distance: Math.sqrt(bestDistance) };
  };

  const addMove = (path, from, to, isBurning, cost) => {
    const length = Math.hypot(to.x - from.x, to.y - from.y);
    path.push({ from, to, isBurning, length: Math.max(length * cost, 0.01) });
    return to;
  };

  const traceOutline = (path, start, shape, map) => {
    const remaining = findOutline(shape, map);
    let head = start;
    let isFirst = true;
    while (remaining.length) {
      const { nearest, distance } = takeNearest(head, remaining);
      const isConnected = !isFirst && distance <= MAX_CONTOUR_GAP;
      head = addMove(path, head, nearest, isConnected, isConnected ? 1 : JUMP_COST);
      isFirst = false;
    }
    return head;
  };

  const findRowRuns = (shape) => {
    const columnsByRow = new Map();
    shape.points.forEach(({ x, y }) => {
      if ((y - shape.top) % ROW_STEP) return;
      if (!columnsByRow.has(y)) columnsByRow.set(y, []);
      columnsByRow.get(y).push(x);
    });
    const runs = [];
    [...columnsByRow.keys()].sort((a, b) => a - b).forEach((y) => {
      const columns = columnsByRow.get(y).sort((a, b) => a - b);
      let start = columns[0];
      columns.forEach((x, index) => {
        const isRunEnd = index === columns.length - 1 || columns[index + 1] !== x + 1;
        if (!isRunEnd) return;
        runs.push({ y, start, end: x });
        start = columns[index + 1];
      });
    });
    return runs;
  };

  const fillShape = (path, start, shape) => {
    let head = start;
    findRowRuns(shape).forEach(({ y, start: runStart, end }, index) => {
      const isReversed = index % 2 === 1;
      const entry = { x: isReversed ? end : runStart, y };
      const exit = { x: isReversed ? runStart : end, y };
      head = addMove(path, head, entry, false, JUMP_COST);
      head = addMove(path, head, exit, true, FILL_COST);
    });
    return head;
  };

  const buildPath = (map) => {
    const path = [];
    let head = { x: 0, y: 0 };
    orderShapes(findShapes(map), map.height).forEach((shape) => {
      head = traceOutline(path, head, shape, map);
      head = fillShape(path, head, shape);
    });
    return path;
  };

  const placeCanvas = (image) => {
    const anchor = image.parentElement;
    anchor.style.position = "relative";
    const imageBox = image.getBoundingClientRect();
    const anchorBox = anchor.getBoundingClientRect();
    const margin = {
      left: Math.min(MAX_MARGIN, Math.max(imageBox.left, 0)),
      right: Math.min(MAX_MARGIN, Math.max(innerWidth - imageBox.right, 0)),
      top: Math.max(imageBox.top, 0),
      bottom: MAX_MARGIN,
    };
    const scale = Math.min(devicePixelRatio || 1, 2);
    const width = imageBox.width + margin.left + margin.right;
    const height = imageBox.height + margin.top + margin.bottom;
    const canvas = makeCanvas(Math.ceil(width * scale), Math.ceil(height * scale));
    Object.assign(canvas.style, {
      position: "absolute", pointerEvents: "none", zIndex: "2",
      left: `${imageBox.left - anchorBox.left - margin.left}px`,
      top: `${imageBox.top - anchorBox.top - margin.top}px`,
      width: `${width}px`, height: `${height}px`,
    });
    anchor.append(canvas);
    return { canvas, scale, margin, box: imageBox };
  };

  const spawnSparks = (particles, x, y, scale) => {
    if (particles.length > MAX_PARTICLES) return;
    const count = 1 + Math.floor(Math.random() * 3);
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (60 + Math.random() * 190) * scale;
      particles.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 70 * scale,
        life: 0, span: 0.25 + Math.random() * 0.5, isSmoke: false,
      });
    }
    if (Math.random() < 0.22) {
      particles.push({
        x, y, vx: (Math.random() - 0.5) * 18 * scale, vy: -(26 + Math.random() * 30) * scale,
        life: 0, span: 0.7 + Math.random() * 0.6, isSmoke: true,
      });
    }
  };

  const updateParticles = (particles, seconds, scale) => {
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.life += seconds;
      if (particle.life >= particle.span) { particles.splice(index, 1); continue; }
      particle.x += particle.vx * seconds;
      particle.y += particle.vy * seconds;
      if (!particle.isSmoke) particle.vy += 520 * scale * seconds;
    }
  };

  const drawParticles = (context, particles, scale) => {
    context.globalCompositeOperation = "lighter";
    particles.forEach((particle) => {
      const fade = 1 - particle.life / particle.span;
      if (particle.isSmoke) {
        context.fillStyle = `rgba(248, 212, 177, ${0.07 * fade})`;
        context.beginPath();
        context.arc(particle.x, particle.y, (2 + particle.life * 12) * scale, 0, Math.PI * 2);
        context.fill();
        return;
      }
      context.strokeStyle = `rgba(${SPARK_COLOR}, ${fade})`;
      context.lineWidth = 0.9 * scale;
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle.x - particle.vx * 0.022, particle.y - particle.vy * 0.022);
      context.stroke();
    });
  };

  const drawBeam = (context, x, y, scale) => {
    const beam = context.createLinearGradient(x, 0, x, y);
    beam.addColorStop(0, "rgba(255, 150, 80, .1)");
    beam.addColorStop(1, "rgba(255, 236, 214, .95)");
    context.globalCompositeOperation = "lighter";
    context.strokeStyle = beam;
    [[5, 0.16], [1.1, 1]].forEach(([width, alpha]) => {
      context.globalAlpha = alpha;
      context.lineWidth = width * scale;
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, y);
      context.stroke();
    });
    context.globalAlpha = 1;
    const radius = (15 + Math.random() * 6) * scale;
    const bloom = context.createRadialGradient(x, y, 0, x, y, radius);
    bloom.addColorStop(0, "rgba(255, 255, 255, 1)");
    bloom.addColorStop(0.16, "rgba(255, 214, 160, .9)");
    bloom.addColorStop(0.5, "rgba(255, 120, 50, .24)");
    bloom.addColorStop(1, "rgba(255, 120, 50, 0)");
    context.fillStyle = bloom;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  };

  const createBurnLayers = (image, width, height) => {
    const layers = {
      burned: makeCanvas(width, height),
      heat: makeCanvas(width, height),
      logo: makeCanvas(width, height),
      glow: makeCanvas(width, height),
    };
    const contexts = Object.fromEntries(Object.entries(layers).map(([name, layer]) => [name, layer.getContext("2d")]));
    return {
      layers,
      contexts,
      burn: (move, unit, lineWidth) => {
        [contexts.burned, contexts.heat].forEach((context) => {
          context.lineCap = "round";
          context.lineWidth = lineWidth * unit;
          context.strokeStyle = "#fff";
          context.beginPath();
          context.moveTo(move.from.x * unit, move.from.y * unit);
          context.lineTo(move.to.x * unit, move.to.y * unit);
          context.stroke();
        });
      },
      cool: (seconds) => {
        const { heat } = contexts;
        heat.globalCompositeOperation = "destination-out";
        heat.fillStyle = `rgba(0, 0, 0, ${1 - (1 - COOLING_RATE) ** (seconds * 60)})`;
        heat.fillRect(0, 0, width, height);
        heat.globalCompositeOperation = "source-over";
      },
      compose: () => {
        const { logo, glow } = contexts;
        logo.globalCompositeOperation = "source-over";
        logo.clearRect(0, 0, width, height);
        logo.drawImage(image, 0, 0, width, height);
        logo.globalCompositeOperation = "destination-in";
        logo.drawImage(layers.burned, 0, 0);
        glow.globalCompositeOperation = "source-over";
        glow.clearRect(0, 0, width, height);
        glow.drawImage(layers.heat, 0, 0);
        glow.globalCompositeOperation = "source-in";
        glow.fillStyle = HEAT_COLOR;
        glow.fillRect(0, 0, width, height);
        glow.globalCompositeOperation = "destination-in";
        glow.drawImage(image, 0, 0, width, height);
      },
    };
  };

  const runEngraving = (image, path, map, duration, onDone) => {
    const { canvas, scale, margin, box } = placeCanvas(image);
    const context = canvas.getContext("2d");
    const width = Math.round(box.width * scale);
    const height = Math.round(box.height * scale);
    const unit = height / map.height;
    const originX = margin.left * scale;
    const originY = margin.top * scale;
    const totalLength = path.reduce((sum, move) => sum + move.length, 0);
    const burn = createBurnLayers(image, width, height);
    const particles = [];
    let moveIndex = 0;
    let travelled = 0;
    let elapsed = 0;
    let lastTime = performance.now();

    const advanceHead = (target) => {
      let lastBurn = null;
      while (moveIndex < path.length && travelled + path[moveIndex].length <= target) {
        const move = path[moveIndex];
        travelled += move.length;
        moveIndex += 1;
        if (move.isBurning) { burn.burn(move, unit, 2.8); lastBurn = move.to; }
      }
      return lastBurn;
    };

    const drawFrame = (head) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      burn.compose();
      context.globalCompositeOperation = "source-over";
      context.drawImage(burn.layers.logo, originX, originY);
      context.globalCompositeOperation = "lighter";
      context.drawImage(burn.layers.glow, originX, originY);
      if (head) drawBeam(context, originX + head.x * unit, originY + head.y * unit, scale);
      drawParticles(context, particles, scale);
    };

    const step = (now) => {
      const seconds = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += seconds;
      burn.cool(seconds);
      const lastBurn = advanceHead(Math.min(elapsed / duration, 1) * totalLength);
      if (lastBurn) spawnSparks(particles, originX + lastBurn.x * unit, originY + lastBurn.y * unit, scale);
      updateParticles(particles, seconds, scale);
      drawFrame(lastBurn);
      if (elapsed < duration + COOLDOWN_SECONDS) { requestAnimationFrame(step); return; }
      onDone(canvas);
    };
    requestAnimationFrame(step);
  };

  return async (image, { duration = 3, onDone } = {}) => {
    await image.decode().catch(() => {});
    if (!image.naturalWidth) throw new Error("The logo image did not load.");
    const map = readSolidPixels(image);
    runEngraving(image, buildPath(map), map, duration, onDone);
  };
})();
