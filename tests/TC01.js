data = require('../dados/dadodeteste.json');
Login = require('../pageObjects/login');

describe('Post', () => {
        const login = new Login()

	beforeAll(async () => {
		await page.goto(data.url)
	})

	test('Sign In', async () => {      
        const title = await page.title()
        expect(title).toBe('Conduit')
        
        //Credenciais de login
        const email = await login.email()
        await email.fill(data.email)
        await email.press('Tab')
        await login.password_fill(data.password)
        await login.signInButton_click()

        //Verifica sucesso do login
        const html = await page.innerHTML('.feed-toggle')
        expect(html).toMatch('Your Feed')
        })


/*
        await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
		    await page.press('input[type = "email"]', 'Tab')
		    await page.type('input[type = "password"]', 'test123')
        await Promise.all([
          page.waitForNavigation(), 
          await page.click('for >> "Sign in"') 
        ]);*/
    })
	afterAll(async () => {
		await browser.close()
        await console.log("after all");
	})