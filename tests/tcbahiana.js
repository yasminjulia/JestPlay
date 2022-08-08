describe('Logando no acesso', ()=> {
    beforeAll(async()=>{
        await page.goto('https://acesso.bahiana.cwww.dev/admin/login')
        const title = await page.title()
        expect(title).toBe('Gestão de Inscrições - Escola Bahiana de Medicina e Saúde Pública')
        await console.log("Antes de tudo");

    });
    test('Sign In', async()=> {
        
        await page.fill('input[type= "email"]', 'admin@cworks.com.br')
        await page.press('input[type= "email"]', 'Tab')
        await page.type('input[type= "password"]', 'eHWTdgQa#cNY')
        await Promise.all([
            page.waitForNavigation(),
            await page.click('button[type= "submit"]')
        ]);
    });
})