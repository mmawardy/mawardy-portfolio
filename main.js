(() => {
  const SITE = window.SITE;
  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = Boolean(window.gsap && window.ScrollTrigger);
  const animate = hasGsap && !prefersReducedMotion;
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  const STRINGS = {
    ar: {
      topRole: "مونتاج · موشن جرافيك · تطوير رقمي",
      eyebrow: "مونتير · مصمم موشن جرافيك · مطوّر برمجيات",
      title: "بورتفوليو",
      hello: "مرحبًا، أنا",
      name: "محمد المواردي",
      bio: "أصنع محتوى مرئيًا يُحدث أثرًا، وأطوّر مواقع وتطبيقات وألعابًا تصل إلى المستخدمين، من الحملات الإعلانية للعلامات التجارية إلى لعبة تجاوزت 100 ألف تنزيل على Google Play.",
      ctaWork: "استعرض أعمالي",
      ctaContact: "ابدأ مشروعك",
      portraitTag: "محمد المواردي",
      aboutKicker: "عني",
      aboutTitle: "الخلفية والفلسفة",
      about1: "أجمع بين المونتاج والموشن جرافيك والبرمجة، لأقدّم المشروع كاملًا من الفكرة إلى النتيجة.",
      about2: "أنشر الألعاب والتطبيقات عبر MAWARDY Studio على Google Play، ومنها لعبة تجاوزت 100 ألف تنزيل. طوّرت مواقع لأطباء ومصممين، وأنتجت إعلانات وريلز لقطاعات العقارات والصحة والأغذية والرياضة والسفر والتسويق، لتحصل على الإعلان والمنتج الرقمي من مصدر واحد.",
      videoKicker: "01 / القسم الأول", videoTitle: "مونتاج الفيديو",
      videoSub: "55 فيديو في 11 مجموعة، تشمل الحملات والإعلانات والريلز. اختر مجموعة لمشاهدة الأعمال.",
      webKicker: "02 / القسم الثاني", webTitle: "برمجة المواقع",
      webSub: "مواقع منشورة لأطباء ومصممين ومنصات رقمية. اضغط على أي موقع لزيارته.",
      appsKicker: "03 / القسم الثالث", appsTitle: "تطبيقات وألعاب",
      appsSub: "تطبيقات وألعاب منشورة على Google Play عبر MAWARDY Studio.",
      videosWord: "فيديو", visitPlay: "عرض على Google Play",
      winsKicker: "الإنجازات", winsTitle: "إنجازات بالأرقام",
      contactKicker: "تواصل",
      contactTitle: "لنصنع عملًا استثنائيًا.",
      contactSub: "لديك فيديو أو موقع أو تطبيق؟ راسلني عبر واتساب لنبدأ.",
      whatsapp: "راسلني عبر واتساب",
      navHome: "الرئيسية", navVideo: "فيديو", navWeb: "مواقع", navApps: "تطبيقات", navContact: "تواصل",
      lang: "EN",
    },
    en: {
      topRole: "Video · Motion · Development",
      eyebrow: "VIDEO EDITOR · MOTION DESIGNER · DEVELOPER",
      title: "Portfolio",
      hello: "Hello, I'm",
      name: "Mohamed Almawardy",
      bio: "I create video content that makes an impact and build websites, apps and games that reach real users, from brand campaigns to a Google Play game with more than 100,000 downloads.",
      ctaWork: "View my work",
      ctaContact: "Start a project",
      portraitTag: "Mohamed Almawardy",
      aboutKicker: "ABOUT",
      aboutTitle: "Background & Philosophy",
      about1: "I bring video editing, motion graphics and software development together to deliver complete projects, from concept to launch.",
      about2: "Through MAWARDY Studio, I publish apps and games on Google Play, including a game with more than 100,000 downloads. I have built websites for doctors and designers, and produced ads and reels for real estate, healthcare, food, sports, travel and marketing, so you get the campaign and the digital product from one source.",
      videoKicker: "01 / FIRST SECTION", videoTitle: "Video Editing",
      videoSub: "55 videos across 11 collections of campaigns, ads and reels. Choose a collection to watch.",
      webKicker: "02 / SECOND SECTION", webTitle: "Web Development",
      webSub: "Published websites for doctors, designers and digital platforms. Select a site to visit.",
      appsKicker: "03 / THIRD SECTION", appsTitle: "Apps & Games",
      appsSub: "Apps and games published on Google Play as MAWARDY Studio.",
      videosWord: "videos", visitPlay: "View on Google Play",
      winsKicker: "RESULTS", winsTitle: "Results In Numbers",
      contactKicker: "CONTACT",
      contactTitle: "Let's create something exceptional.",
      contactSub: "Have a video, website or app in mind? Message me on WhatsApp to get started.",
      whatsapp: "Message me on WhatsApp",
      navHome: "Home", navVideo: "Video", navWeb: "Web", navApps: "Apps", navContact: "Contact",
      lang: "عربي",
    },
  };

  const MATRIX = {
    ar: [
      ["مونتاج الفيديو", ["إعلانات", "ريلز ومحتوى قصير", "فيديوهات طويلة"]],
      ["موشن جرافيك", ["إعلانات موشن", "تحريك اللوجو", "عناوين ونصوص متحركة"]],
      ["برمجة المواقع", ["مواقع شخصية", "صفحات هبوط", "مواقع للشركات"]],
      ["تطبيقات وألعاب", ["تطبيقات أندرويد", "تطبيقات آيفون", "ألعاب موبايل"]],
    ],
    en: [
      ["Video Editing", ["Ads", "Reels and short content", "Long-form video"]],
      ["Motion Graphics", ["Motion ads", "Logo animation", "Animated titles and type"]],
      ["Web Development", ["Personal websites", "Landing pages", "Business websites"]],
      ["Apps & Games", ["Android apps", "iPhone apps", "Mobile games"]],
    ],
  };

  const MARQUEE_WORDS = ["Video Editing", "Motion Graphics", "Web Development", "App Development", "Game Development"];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const storedLang = () => {
    try { return localStorage.getItem("lang"); } catch { return null; }
  };
  const storeLang = (value) => {
    try { localStorage.setItem("lang", value); } catch { /* storage may be blocked */ }
  };

  let lang = storedLang() === "en" ? "en" : "ar";
  let cardTriggers = [];

  const t = (key) => STRINGS[lang][key];

  const renderTitle = () => {
    const title = $("#heroTitle");
    title.setAttribute("aria-label", t("title"));
    // Arabic letters must stay joined, so only Latin text is split per letter.
    const chars = lang === "en" ? [...t("title")] : [t("title")];
    title.replaceChildren(...chars.map((char) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.setAttribute("aria-hidden", "true");
      span.textContent = char;
      return span;
    }));
    fitTitle();
  };

  const fitTitle = () => {
    const title = $("#heroTitle");
    const available = title.parentElement.clientWidth
      - parseFloat(getComputedStyle(title.parentElement).paddingInlineStart) * 2;
    title.style.fontSize = "100px";
    const measure = document.createElement("span");
    measure.style.cssText = "display:inline-block;visibility:hidden;position:absolute";
    measure.textContent = t("title");
    title.append(measure);
    const width = measure.getBoundingClientRect().width;
    measure.remove();
    const heightCap = innerHeight * (lang === "ar" ? 0.3 : 0.42);
    title.style.fontSize = `${Math.min((100 * available) / width, heightCap)}px`;
  };

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const image = (src, alt = "") => {
    const node = el("img");
    node.src = src;
    node.alt = alt;
    node.loading = "lazy";
    return node;
  };

  const externalLink = (url, className) => {
    const link = el("a", className);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    return link;
  };

  const buildApp = (app) => {
    const card = el("article", "app reveal-card");
    const info = el("div");
    const head = el("div", "app-head");
    const names = el("div");
    names.append(el("p", "app-name", app.name), el("p", "app-kind", app.kind[lang]));
    head.append(image(app.icon, app.name), names);
    head.firstChild.className = "app-icon";
    const badges = el("div", "badges");
    badges.append(...app.badges.map((badge) => el("span", "badge", badge[lang])));
    const link = externalLink(app.url, "btn btn-line");
    link.textContent = t("visitPlay");
    info.append(head, el("p", "app-desc", app.desc[lang]), badges, link);
    const shots = el("div", "app-shots");
    shots.append(...app.shots.map((shot) => image(shot, `${app.name} screenshot`)));
    card.append(info, shots);
    return card;
  };

  const buildSite = (site) => {
    const card = externalLink(site.url, "site-card reveal-card");
    const browser = el("div", "browser");
    const bar = el("div", "browser-bar");
    bar.append(el("i"), el("i"), el("i"), el("span", "", site.domain));
    const view = el("div", "browser-view");
    view.append(image(site.image, site.name[lang]));
    browser.append(bar, view);
    const meta = el("div", "site-meta");
    const text = el("div");
    text.append(el("p", "site-name", site.name[lang]), el("p", "site-kind", site.kind[lang]));
    meta.append(text, el("span", "site-arrow", "↗"));
    card.append(browser, meta);
    return card;
  };

  const ARROW_SVG = '<svg viewBox="0 0 70 34" fill="none" aria-hidden="true"><path d="M2 31C24 32 50 24 64 5M64 5l-13 3M64 5l1 13" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const WALL_TEXT = "VIDEO EDITING ".repeat(9);

  const localized = (value) => (typeof value === "string" ? value : value[lang]);

  const buildFrame = (item) => {
    const frame = el("div", "thumb-frame");
    const video = el("video");
    video.src = item.video;
    video.poster = item.poster;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    frame.append(video);
    return frame;
  };

  const buildTag = (position) => {
    const tag = el("div", `thumb-tag ${position}`);
    tag.append(image("assets/img/mark-burgundy.png"));
    return tag;
  };

  const buildThumb = (item) => {
    const thumb = el("div", "thumb");
    const title = localized(item.title);
    const heading = el("p", "thumb-title", title);
    heading.dir = /[\u0600-\u06FF]/.test(title) ? "rtl" : "ltr";
    const topic = el("p", "thumb-topic");
    topic.innerHTML = ARROW_SVG;
    topic.append(item.topic);
    thumb.append(el("div", "thumb-mark-wall", WALL_TEXT), heading, topic, el("div", "thumb-strip"), buildFrame(item), buildTag("one"), buildTag("two"));
    thumb.append(el("span", "thumb-play"));
    return thumb;
  };

  const buildVideoItem = (item) => {
    const button = el("button", "thumb-card");
    button.type = "button";
    button.setAttribute("aria-label", localized(item.title));
    button.append(buildThumb(item));
    const video = button.querySelector("video");
    button.addEventListener("pointerenter", () => { if (!prefersReducedMotion) video.play().catch(() => {}); });
    button.addEventListener("pointerleave", () => video.pause());
    button.addEventListener("click", () => openLightbox(item.video));
    return button;
  };

  const buildFolderCard = (group) => {
    const button = el("button", "thumb-card folder-card reveal-card");
    button.type = "button";
    const count = group.items.length;
    button.setAttribute("aria-label", `${group.title[lang]}, ${count}`);
    const thumb = buildFolderThumb(group);
    button.append(thumb);
    button.addEventListener("click", () => openCollection(group));
    return button;
  };

  const buildFolderThumb = (group) => {
    const thumb = el("div", "thumb");
    const title = group.title[lang];
    const heading = el("p", "thumb-title", title);
    heading.dir = lang === "ar" ? "rtl" : "ltr";
    const topic = el("p", "thumb-topic");
    topic.innerHTML = ARROW_SVG;
    topic.append("COLLECTION");
    const stack = el("div", "folder-stack");
    group.items.slice(0, 3).reverse().forEach((item) => {
      const sheet = el("div", "thumb-frame");
      sheet.append(image(item.poster));
      stack.append(sheet);
    });
    thumb.append(el("div", "thumb-mark-wall", WALL_TEXT), heading, topic, el("div", "thumb-strip"), stack, buildTag("one"), el("span", "folder-count", String(group.items.length)));
    return thumb;
  };

  const collection = $("#collection");

  const openCollection = (group) => {
    $("#collectionTitle").textContent = group.title[lang];
    $("#collectionDesc").textContent = group.desc[lang];
    $("#collectionCount").textContent = `${group.items.length} ${t("videosWord")}`;
    $("#collectionGrid").replaceChildren(...group.items.map(buildVideoItem));
    collection.showModal();
    collection.scrollTop = 0;
    document.body.classList.add("is-locked");
    if (animate) {
      gsap.from("#collectionGrid .thumb-card", { y: 34, autoAlpha: 0, duration: 0.55, ease: "power3.out", stagger: 0.05, clearProps: "all" });
    }
  };

  const buildStat = ({ value, suffix, label }) => {
    const stat = el("div", "stat reveal-card");
    const number = el("span", "stat-num", `${value.toLocaleString("en-US")}${suffix}`);
    number.dataset.value = value;
    number.dataset.suffix = suffix;
    stat.append(number, el("p", "stat-label", label[lang]));
    return stat;
  };

  const renderHeroFacts = () => {
    $("#heroFacts").replaceChildren(...SITE.stats.slice(0, 3).map((stat) => {
      const row = el("li");
      row.append(el("b", "", `${stat.value.toLocaleString("en-US")}${stat.suffix}`), el("span", "", stat.label[lang]));
      return row;
    }));
  };

  const renderWork = () => {
    $("#appsList").replaceChildren(...SITE.apps.map(buildApp));
    $("#sitesList").replaceChildren(...SITE.sites.map(buildSite));
    $("#folderGrid").replaceChildren(...SITE.videoGroups.map(buildFolderCard));
    $("#stats").replaceChildren(...SITE.stats.map(buildStat));
    renderHeroFacts();
    revealCards();
    countStats();
  };

  const renderMatrix = () => {
    $("#matrix").replaceChildren(...MATRIX[lang].map(([title, entries], index) => {
      const item = document.createElement("article");
      item.className = "matrix-item reveal-card";
      const num = document.createElement("span");
      num.className = "matrix-num";
      num.textContent = `0${index + 1}`;
      const heading = document.createElement("h3");
      heading.textContent = title;
      const list = document.createElement("ul");
      list.append(...entries.map((entry) => {
        const row = document.createElement("li");
        row.textContent = entry;
        return row;
      }));
      item.append(num, heading, list);
      return item;
    }));
  };

  const renderStaticText = () => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
      node.removeAttribute("aria-label");
    });
    $("#langBtn").textContent = t("lang");
  };

  const renderPortrait = () => {
    const frame = $("#portrait");
    if (!SITE.photo) {
      const mark = image("assets/img/mark-burgundy.png");
      mark.classList.add("is-mark");
      frame.replaceChildren(mark);
      return;
    }
    frame.classList.add("has-photo");
    const photo = image(SITE.photo, t("name"));
    photo.classList.add("portrait-photo");
    photo.loading = "eager";
    frame.replaceChildren(photo);
  };

  // The cut-out leans gently toward the pointer.
  const setupPortraitMotion = () => {
    if (!animate || !SITE.photo || !matchMedia("(hover: hover)").matches) return;
    const moveX = gsap.quickTo(".portrait-photo", "x", { duration: 0.8, ease: "power3.out" });
    const moveY = gsap.quickTo(".portrait-photo", "y", { duration: 0.8, ease: "power3.out" });
    addEventListener("pointermove", ({ clientX, clientY }) => {
      moveX((clientX / innerWidth - 0.5) * 22);
      moveY((clientY / innerHeight - 0.5) * 12);
    }, { passive: true });
  };

  const renderContact = () => {
    const button = $("#whatsappBtn");
    if (SITE.whatsapp) {
      button.href = `https://wa.me/${SITE.whatsapp}`;
    } else {
      button.removeAttribute("href");
      button.setAttribute("aria-disabled", "true");
    }
    $("#socials").replaceChildren(...SITE.socials.map(({ name, url }) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = name;
      return link;
    }));
  };

  const renderMarquee = () => {
    const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
    $("#marquee").replaceChildren(...words.map((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      return span;
    }));
  };

  const renderAll = () => {
    renderStaticText();
    renderTitle();
    renderWork();
    renderMatrix();
  };

  const lightbox = $("#lightbox");
  const lightboxVideo = $("#lightboxVideo");
  const openLightbox = (src) => {
    lightboxVideo.src = src;
    lightbox.showModal();
    if (animate) gsap.from(lightboxVideo, { scale: 0.9, autoAlpha: 0, duration: 0.45, ease: "power3.out", clearProps: "all" });
    lightboxVideo.play().catch(() => {});
  };
  lightbox.addEventListener("close", () => {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
  });
  $("#lightboxClose").addEventListener("click", () => lightbox.close());
  $("#collectionClose").addEventListener("click", () => collection.close());
  collection.addEventListener("close", () => {
    document.body.classList.remove("is-locked");
    $("#collectionGrid").replaceChildren();
  });
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });

  /* Sparkles: ambient twinkles plus a trail behind the pointer */
  const startSparkles = () => {
    const canvas = $("#sparks");
    const ctx = canvas.getContext("2d");
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    const sparks = [];
    const CREAM = "243,232,214";

    const resize = () => {
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    addEventListener("resize", resize);

    const spawn = (x, y, fromPointer) => sparks.push({
      x, y,
      vx: (Math.random() - 0.5) * (fromPointer ? 0.9 : 0.2),
      vy: fromPointer ? Math.random() * 0.9 + 0.2 : (Math.random() - 0.5) * 0.2,
      size: Math.random() * (fromPointer ? 7 : 5) + 2,
      life: 0,
      maxLife: fromPointer ? 46 + Math.random() * 30 : 110 + Math.random() * 90,
    });

    const drawStar = ({ x, y, size }, alpha) => {
      ctx.fillStyle = `rgba(${CREAM},${alpha})`;
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.quadraticCurveTo(x, y, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x, y, x, y - size);
      ctx.fill();
    };

    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      if (sparks.length < 30 && Math.random() < 0.08) spawn(Math.random() * innerWidth, Math.random() * innerHeight, false);
      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i];
        spark.life += 1;
        spark.x += spark.vx;
        spark.y += spark.vy;
        if (spark.life >= spark.maxLife) { sparks.splice(i, 1); continue; }
        drawStar(spark, Math.sin((spark.life / spark.maxLife) * Math.PI) * 0.85);
      }
      requestAnimationFrame(tick);
    };

    let lastX = 0;
    let lastY = 0;
    addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < 16) return;
      lastX = event.clientX;
      lastY = event.clientY;
      spawn(event.clientX, event.clientY, true);
    }, { passive: true });

    tick();
  };

  /* Scroll and intro motion */
  // Arabic letters stay joined because text is only split at spaces.
  const splitWords = (node) => {
    const text = node.textContent.trim();
    node.setAttribute("aria-label", text);
    node.replaceChildren();
    // Consecutive Latin words stay in one unit so right-to-left text keeps their order.
    const units = text.match(/[A-Za-z][^\s\u0600-\u06FF]*(?:\s+[A-Za-z][^\s\u0600-\u06FF]*)*|\S+/g);
    return units.map((word, index) => {
      if (index) node.append(" ");
      const mask = el("span", "word");
      mask.setAttribute("aria-hidden", "true");
      const inner = el("span", "word-in", word);
      mask.append(inner);
      node.append(mask);
      return inner;
    });
  };

  const revealWords = (node, vars = {}) => {
    const words = splitWords(node);
    gsap.from(words, {
      yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.07,
      scrollTrigger: { trigger: node, start: "top 90%", once: true },
      ...vars,
    });
  };

  const revealCards = () => {
    if (!animate) return;
    cardTriggers.forEach((trigger) => trigger.kill());
    gsap.set(".reveal-card", { y: 70, scale: 0.95, autoAlpha: 0 });
    cardTriggers = ScrollTrigger.batch(".reveal-card", {
      start: "top 92%",
      once: true,
      onEnter: (cards) => gsap.to(cards, { y: 0, scale: 1, autoAlpha: 1, duration: 0.9, ease: "power3.out", stagger: 0.1 }),
    });
    animateAppDetails();
    animateSitePreviews();
  };

  const onEnterView = (trigger, animation) => {
    const scrollTrigger = ScrollTrigger.create({ trigger, start: "top 82%", once: true, onEnter: animation });
    cardTriggers.push(scrollTrigger);
  };

  const animateAppDetails = () => {
    $$(".app").forEach((app) => {
      gsap.set(app.querySelector(".app-icon"), { scale: 0.4, rotate: -14, autoAlpha: 0 });
      gsap.set(app.querySelectorAll(".badge"), { y: 18, autoAlpha: 0 });
      gsap.set(app.querySelectorAll(".app-shots img"), { y: 110, rotate: 5, autoAlpha: 0 });
      onEnterView(app, () => {
        gsap.to(app.querySelector(".app-icon"), { scale: 1, rotate: 0, autoAlpha: 1, duration: 0.8, ease: "back.out(1.8)", delay: 0.2 });
        gsap.to(app.querySelectorAll(".badge"), { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", stagger: 0.1, delay: 0.45 });
        gsap.to(app.querySelectorAll(".app-shots img"), {
          y: 0, rotate: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.14, delay: 0.25, clearProps: "transform",
        });
      });
    });
  };

  const animateSitePreviews = () => {
    $$(".site-card").forEach((card) => {
      const preview = card.querySelector(".browser-view img");
      gsap.set(preview, { scale: 1.22 });
      onEnterView(card, () => gsap.to(preview, { scale: 1, duration: 1.5, ease: "power3.out", clearProps: "transform" }));
    });
  };

  const countStats = () => {
    if (!animate) return;
    $$(".stat-num").forEach((node) => {
      const counter = { value: 0 };
      const { value, suffix } = node.dataset;
      node.textContent = `0${suffix}`;
      gsap.to(counter, {
        value: Number(value), duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: node, start: "top 90%", once: true },
        onUpdate: () => { node.textContent = `${Math.round(counter.value).toLocaleString("en-US")}${suffix}`; },
      });
    });
  };

  const setupScrollMotion = () => {
    if (!animate) return;
    $$(".heading, .contact-title").forEach((node) => revealWords(node));
    revealWords($(".lead"), { yPercent: 105, duration: 0.8, stagger: 0.035 });
    gsap.utils.toArray(".kicker:not(#collectionCount), .reveal:not(.lead)").forEach((node) => {
      gsap.from(node, {
        y: 34, autoAlpha: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 92%", once: true },
      });
    });
    gsap.from(".marquee", {
      autoAlpha: 0, y: 28, duration: 0.9, ease: "power3.out", clearProps: "all",
      scrollTrigger: { trigger: ".marquee", start: "top 96%", once: true },
    });
    gsap.from("#socials a", {
      y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
      scrollTrigger: { trigger: "#socials", start: "top 95%", once: true },
    });
    gsap.from(".foot > *", {
      y: 24, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
      scrollTrigger: { trigger: ".foot", start: "top 98%", once: true },
    });
    gsap.to("#portrait", {
      yPercent: -5, ease: "none",
      scrollTrigger: { trigger: ".hero-portrait", start: "top 60%", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-title", {
      yPercent: -12, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  };

  // The timeline is built while the loader still covers the page, so every element starts hidden.
  const buildIntro = () => {
    const nameWords = splitWords($(".hero-name"));
    const bioWords = splitWords($(".hero-bio"));
    return gsap.timeline({ paused: true })
      .from(".top-logo img", { autoAlpha: 0, scale: 0.7, filter: "blur(10px)", duration: 1, ease: "power3.out", clearProps: "filter" }, 0)
      .from(".top-role", { autoAlpha: 0, y: -16, duration: 0.7, ease: "power3.out" }, 0.25)
      .from(".hero-eyebrow", { autoAlpha: 0, y: 22, duration: 0.7, ease: "power3.out" }, 0.3)
      .from(".hero-title .ch", { yPercent: 112, duration: 1.2, ease: "power4.out", stagger: 0.055 }, 0.35)
      .from(".portrait-frame", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "power4.inOut", clearProps: "clipPath" }, 0.55)
      .from(".portrait-photo", { yPercent: 24, scale: 1.1, autoAlpha: 0, duration: 1.5, ease: "power4.out" }, 0.95)
      .from(".portrait-tag", { autoAlpha: 0, duration: 0.7 }, 1.9)
      .from(".hero-hello", { autoAlpha: 0, y: 20, duration: 0.6, ease: "power3.out" }, 0.85)
      .from(nameWords, { yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.1 }, 0.95)
      .from(".name-rule", { scaleX: 0, duration: 0.9, ease: "power3.inOut" }, 1.3)
      .from(bioWords, { yPercent: 110, autoAlpha: 0, duration: 0.6, ease: "power3.out", stagger: 0.016 }, 1.35)
      .from(".hero-actions .btn", { y: 26, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }, 1.9)
      .from(".hero-facts li", { y: 30, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }, 2)
      .from(".dock", { y: 90, autoAlpha: 0, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity,visibility" }, 2.2);
  };

  const finishLoading = () => {
    document.body.classList.remove("is-loading");
    $("#loader")?.remove();
  };

  const runLoader = () => {
    if (!animate) { finishLoading(); return; }
    const intro = buildIntro();
    const counter = { value: 0 };
    const number = $("#loaderNum");
    const timeline = gsap.timeline()
      .from(".loader-mark", { autoAlpha: 0, scale: 0.8, duration: 0.6, ease: "power3.out" })
      .to(counter, {
        value: 100, duration: 1.4, ease: "power2.inOut",
        onUpdate: () => { number.textContent = Math.round(counter.value); },
      }, 0)
      .to("#loader", {
        clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut",
        onComplete: finishLoading,
      })
      .add(() => intro.play(), "-=0.3");
    // Background tabs pause animation frames, so the loader also has a hard limit.
    setTimeout(() => {
      if (!$("#loader")) return;
      timeline.kill();
      finishLoading();
      intro.play();
    }, 7000);
  };

  const setupDock = () => {
    const links = $$(".dock a");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section").forEach((section) => observer.observe(section));
  };

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    storeLang(lang);
    renderAll();
    if (hasGsap) ScrollTrigger.refresh();
  });

  let resizeFrame = 0;
  addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(fitTitle);
  });

  $("#year").textContent = new Date().getFullYear();
  renderPortrait();
  renderContact();
  renderMarquee();
  renderAll();
  setupDock();
  setupScrollMotion();
  setupPortraitMotion();
  if (!prefersReducedMotion) startSparkles();
  // Slow font servers must not hold the page behind the loader.
  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const fontTimeout = new Promise((resolve) => { setTimeout(resolve, 1800); });
  fontsReady.then(fitTitle);
  Promise.race([fontsReady, fontTimeout]).then(() => {
    fitTitle();
    runLoader();
  });
})();
