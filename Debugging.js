// Turn off headless mode - terkadang berguna untuk melihat apa yang ditampilkan oleh browser.
// Alih-alih meluncurkan dalam headless mode
// luncurkan versi lengkap peramban menggunakan {headless: false}

const browser = await puppeteer.launch({headless: false});



// Slow it down - opsi 'slowMo' memperlambat operasi Puppeteer dengan jumlah milidetik yang ditentukan. 
// Ini cara lain untuk membantu melihat apa yang terjadi.

const browser = await puppeteer.launch({ headless: false, slowMo: 250 }); //slow down by 250ms



// Capture output console - Anda dapat mendengarkan acara 'console'. 
// Ini juga berguna ketika men-debug kode di 'page.evaluate()':

page.on('console', msg => console.log('PAGE LOG:', msg.text()));
await page.evaluate(() => console.log(`url is ${location.href}`));



// Use debugger in application code browser
// Ada dua konteks eksekusi: node.js yang menjalankan kode uji, dan browser yang menjalankan kode aplikasi sedang diuji.
// Ini memungkinkan Anda men-debug kode di browser kode aplikasi; yaitu kode di dalam evaluasi ()

// Use {devtools: true} when launching Puppeteer:

const browser = await puppeteer.launch({devtools: true});

// Change default test timeout:

jest.setTimeout(100000); 
// jest

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
// jasmine

this.setTimeout(100000);
// mocha (don't forget to change test to use function and not '=>')



// Tambahkan pernyataan evaluasi dengan debugger di dalam / tambahkan debugger ke pernyataan evaluasi yang ada:

await page.evaluate(() => {debugger;});

// Tes sekarang akan berhenti dieksekusi dalam pernyataan evaluasi di atas, dan kromium akan berhenti dalam mode debug.


