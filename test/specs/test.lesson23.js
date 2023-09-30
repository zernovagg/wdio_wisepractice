import mainPage from "../pages/main.page.js"
import GameDevPage from "../pages/gamedev.page.js"
import GameDevTopRatesPage from "../pages/gamedevTopRatesPerMonth.page.js"
import SalariesPage from "../pages/salaries.page.js"
import robotaPage from "../pages/robota.page.js"

describe('Webdriverio main page', () => {

    xit('done', async () => {
        await browser.url('https://dou.ua')

        await mainPage.clickOnbandBtn()
        await browser.pause(2000)

        await mainPage.clickOnForumBtn()
        await browser.pause(2000)

        await mainPage.clickOngameDevBtn()
        await browser.pause(2000)
      
       expect (GameDevPage.companyGameDevRateLink).toBeClickable()

       await GameDevPage.clickOntopGamesRateLink()

       expect (GameDevTopRatesPage.title).toHaveValue("Матеріали на тему «топ ігор місяця"
        )
        
        await browser.url('https://dou.ua')

        await mainPage.clickOnsalariesBtn()

        expect (SalariesPage.text).toHaveValue('I КВАРТИЛЬ')

    })

    it('HW', async () => {
        await browser.url('https://dou.ua')

        // await mainPage.clickOnsalariesBtn()

        // expect (SalariesPage.text).toHaveValue('I КВАРТИЛЬ')
        
        // await browser.back()

        
        await mainPage.clickOnRobotaBtn()

        expect (robotaPage.SearchButton).toBeDisplayedInViewport()

        await robotaPage.clickOnSearchButton() 

    })

})