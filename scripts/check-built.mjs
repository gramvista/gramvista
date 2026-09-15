import {chromium, expect} from '@playwright/test';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4185, strictPort: true } });
const browser=await chromium.launch();
try {
const page=await browser.newPage();
const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.log(e.message);});page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
for(const path of ['/','/company','/services','/products','/contact','/quote?service=Gramvista%20SMS']) {
 await page.goto('http://localhost:4185'+path);await page.locator('h1').waitFor();
 await page.getByRole('link',{name:'Request a Quote',exact:true}).first().waitFor();
 if(path.startsWith('/quote')) {
  await expect(page.getByLabel('Service required')).toHaveValue('Gramvista SMS');
  await page.getByLabel('Full name').fill('Verification');await page.getByLabel('Email address').fill('test@example.com');await page.getByLabel('Project description').fill('Testing that the rendered form remains interactive.');
  await page.getByRole('button',{name:'Prepare Message'}).click();await page.getByRole('link',{name:'Open Email',exact:true}).waitFor();
 }
}
const nojs=await browser.newPage({javaScriptEnabled:false});
for(const path of ['/','/company','/services','/products','/contact']){await nojs.goto('http://localhost:4185'+path);await nojs.locator('h1').waitFor();if(path==='/contact'&&await nojs.locator('.inquiry-form').isVisible())throw new Error('No-JS form must not submit data to server');}
if(errors.length)throw new Error(errors.join('\n'));
console.log('Built HTML renders without JavaScript; hydration and prepared quote links pass without console errors.');
} finally { await browser.close(); await new Promise(resolve => server.httpServer.close(resolve)); }
