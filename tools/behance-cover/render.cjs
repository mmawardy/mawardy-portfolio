const path = require('node:path');
const fs = require('node:fs');
const { chromium } = require('/Users/mohamedalmawardy/Documents/Codex/2026-11-06/th/work/reel/node_modules/playwright-core');
const dir = __dirname;
const jobs = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
(async () => {
  const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  for (const job of jobs) {
    const page = await browser.newPage({ viewport: { width: job.w || 1616, height: job.h || 1264 } });
    const url = 'file://' + path.join(dir, job.page || 'cover.html') + '#' + encodeURIComponent(JSON.stringify(job));
    await page.goto(url);
    await page.waitForSelector('body[data-ready]', { timeout: 20000 });
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(dir, 'out', job.out), type: job.out.endsWith('.png') ? 'png' : 'jpeg', quality: job.out.endsWith('.png') ? undefined : 92 });
    console.log('ok', job.out);
    await page.close();
  }
  await browser.close();
})();
