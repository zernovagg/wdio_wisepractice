import assert from "assert/strict"

import { expect } from '@wdio/globals'

describe('Home work FOR 25 lesson', () => {

    xit('Test case 1. Check "Sign up"', async () => {
        await browser.url('https://github.com')

        const SignUpButton = await $('a=Sign up')
        await SignUpButton.click()
        await browser.pause(2000)

        const EmailInput = await $('input[id="email"]')
        
        await browser.waitUntil(async () => {
            return EmailInput.isClickable()
        }, 10000, "Button is not displyed")


        await EmailInput.setValue("examplele@1231212123.com")
        await browser.pause(2000)
        
        const EmailContinue = $("button[data-optimizely-event='click.signup_continue.email']")
        await EmailContinue.click()

        const PasswordInput = await $('input[id="password"]')
        
        await browser.waitUntil(async () => {
            return PasswordInput.isClickable()
        }, 10000, "Button is not displyed")

        await PasswordInput.setValue("password(*^KHVY")
        await browser.pause(2000)

        const PasswordContinue = $("button[data-optimizely-event='click.signup_continue.password']")
        await PasswordContinue.click()

        const UserNamelInput = await $('input[id="login"]')
        
        await browser.waitUntil(async () => {
            return UserNamelInput.isClickable()
        }, 10000, "Button is not displyed")


        await UserNamelInput.setValue("iiiiiioooooopr")
        await browser.pause(2000)
        
        const UserNameContinue = $("button[data-optimizely-event='click.signup_continue.username']")
        await UserNameContinue.click()

        const OptInInput = await $('input[id="opt_in"]')
        
        await browser.waitUntil(async () => {
            return OptInInput.isClickable()
        }, 10000, "Button is not displyed")


        await OptInInput.setValue("y")
        await browser.pause(2000)
        
        const OptInContinue = $("button[data-optimizely-event='click.signup_continue.opt-in']")
        await OptInContinue.click()

        
               
          
    })

    xit('Test case 2. Start trial', async () => {
        await browser.url('https://github.com')
       
        const HeaderStartTrial = await $('h2*=The place for anyone')
        await HeaderStartTrial.scrollIntoView()
        await browser.pause(2000)
        
        const link4Trial = $('a[data-test-selector="start-trial-button"]')
        await link4Trial.isDisplayedInViewport()
        await link4Trial.click();
        await browser.pause(2000);

        const HeaderPickTrial = $("h1=Pick your trial plan");
        await HeaderPickTrial.isDisplayedInViewport()

        const Block2Click = $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a')
        await Block2Click.click();
        await browser.pause(2000);


    })

    xit('Test Case 3. Subscribe to newsletters', async () => {
        await browser.url('https://github.com')

        const SubscribeToNewsletters = await $('a[href="https://resources.github.com/newsletter/"]')
        await SubscribeToNewsletters.scrollIntoView()
        await browser.pause(2000)

        await SubscribeToNewsletters.click()
        await browser.pause(2000)

        let Url = await browser.getUrl()
        assert(Url.includes('resources.github.com/newsletter') , "subscribe button forwards to wrong")
        
                
        const EmailInput = await $('input[type="email"]')
        await EmailInput.isClickable()
        await EmailInput.setValue("jhjd@sljfblvsb.com")
        await browser.pause(2000)

        const CountryInput = await $('#country')

        await CountryInput.selectByVisibleText("Albania")
        await browser.pause(2000)

        const Checkbox = await $('input[type="checkbox"]')
        await Checkbox.click()

        const SubmitButton = await $('button[type="submit"]')
        await SubmitButton.click()
        await browser.pause(6000)
   

Url = await browser.getUrl()
console.log("Browser url after submit: " + Url); // https://resources.github.com/confirmation/

assert(Url === "https://resources.github.com/confirmation/", "submit is not working as expected")
          
               
          
    })


    
    xit('Check the "Search" field is funtional ', async () => {
        await browser.url('https://github.com')


        let Search = await $('span[data-target="qbsearch-input.inputButtonText"]')
        await browser.pause(2000)
        await Search.click()
        await browser.pause(2000)

        let inputSearch = await $("#query-builder-test")
        await inputSearch.addValue("support")
        await browser.pause(2000)
        await browser.keys(['Enter'])
        await browser.pause(2000)

        let Url = await browser.getUrl()
        console.log("Browser url after search 'support' is: " + Url); // https://github.com/search?q=support&type=repositories
        assert(Url.includes('support'), "search is not relevant")

        let searchResult = await $('a[class="Link__StyledLink-sc-14289xe-0 fIqerb"]')
        await expect(searchResult).toHaveAttributeContaining('href', 'support')
     


          
    })


    xit('Test Case 5. Check Pricing', async () => {
        await browser.url('https://github.com')

        let Pricing = await $("header").$("a=Pricing")
        await Pricing.click()

        await browser.pause(2000)

        let PricingPageHeader = await $('h1[class="h2-mktg"]')
        await expect(PricingPageHeader).toHaveText("Get the complete developer platform.")

        await browser.pause(2000)

        const compareLink = $('a[href="#compare-features"]')
        await compareLink.scrollIntoView()
        await compareLink.click()

        await browser.pause(2000)

        const blockCompareFeatures = $(".btn.btn-sm.btn-block.ws-normal.btn-mktg.btn-muted-mktg.f5.f5-mktg.px-1.py-2")
       
        await expect(blockCompareFeatures).toBeDisplayedInViewport()
    })


})