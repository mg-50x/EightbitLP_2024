import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  // ブラウザが起動した時に表示されるページ
  await page.goto('http://localhost:5500/experienced.html');

  await page.pause();
});