const puppeteer = require('puppeteer');

// module
const self = module.exports = {
  LOGIN: async (page, username, password) => {
    
    // page go to www.facebook.com/login (membuka ke page login)
    await page.goto('https://www.facebook.com/login', {waitUntil: 'networkidle2'})

    //login
    const emailField = await page.$('input[name=email]')
    await emailField.click()
    await emailField.type(username)
    await emailField.dispose()

    const passwordField = await page.$('input[name=pass]')
    await passwordField.click()
    await passwordField.type(password)
    await passwordField.dispose()

    const loginButton = await page.$('button[name=login]')
    await loginButton.focus()
    await loginButton.click()
    await loginButton.dispose()

    // The promise resolves after navigation has finished
    await page.waitForNavigation() 
    await page.goto('https://www.facebook.com/kpt.crazY', {waitUntil: 'networkidle2'})
    
    await page.waitForSelector('#profile_timeline_intro_card')
    const lis = await page.$$('#profile_timeline_intro_card > li')

    for (const li of lis) {
      const introinfo = await li.$eval('div', div => div.innerText)
      console.log('introinfo', introinfo)
    } 
  },

  main: async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-notifications']
    })
    
    // membuka new page
    const page = await browser.newPage()

    // untuk ukuran page
    await page.setViewport({
      width: 1200,
      height: 900
    })
    
    // untuk memasukkan nama pengguna dan kata sandi facebook
    await self.LOGIN(page, 'ur email', 'ur pass') //username, password
    

  }
}

self.main()