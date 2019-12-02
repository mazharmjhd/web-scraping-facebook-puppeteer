const puppeteer = require('puppeteer');

(async function main() {
    try {

        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();

        await page.goto('https://experts.shopify.com/');
        await page.waitForSelector('.div');

        const divs = await page.$$('.div');

        for ( const selection of selections) {
            const button = await selection.$('div._2nijJ');
            button.click();

            await page.waitForSelector('productWidget');
            const lis = await page.$$('productWidget > li');

            for (const li of lis) {
                const name = li.$eval('h2', h2 => h2.innerText);
                console.log('name', name);
            }
        }

        console.log();
    } catch (e) {
        console.log('our error', e);
    }
})();