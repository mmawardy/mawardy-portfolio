Behance cover generator for Mawardy projects.

1. Put each video's poster frame (9:16) in `img/`.
2. Add an entry to `all.json`: out, num, topic, l1, l2, ar, imgs (1-3 posters).
3. Run `node render.cjs all.json` (needs Google Chrome and playwright-core). Covers land in `out/` at 1616x1264.
4. Copy the covers to `assets/behance/` and push, then upload them to Behance from the raw GitHub URL.
