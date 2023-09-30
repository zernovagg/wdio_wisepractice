import assert from "assert/strict"

import { expect } from '@wdio/globals'

describe('Home work "5 testcases"', () => {

    xit('check the "Docs" link from footer', async () => {
        await browser.url('https://github.com')

        const FooterDocs = await $('footer a[href="https://docs.github.com"]')
        await FooterDocs.scrollIntoView()
        await browser.pause(2000)

        await FooterDocs.click()
        await browser.pause(2000)

        let url = await browser.getUrl()
        assert(url.includes('docs.github.com') , "submit is not working as expected")

console.log("Browser url for docs page is chenged to: " + url) // docs.github.com

    
               
          
    })

    xit('Subscribe to newsletters with empty "Work Email" field ', async () => {
        await browser.url('https://github.com')

        const SubscribeToNewsletters = await $('a[href="https://resources.github.com/newsletter/"]')
        await SubscribeToNewsletters.scrollIntoView()
        await browser.pause(2000)

        await SubscribeToNewsletters.click()
        await browser.pause(2000)
        
        const EmailInput = await $('input[type="email"]')
        await EmailInput.clearValue()
        await browser.pause(2000)

        const SubmitButton = await $('button[type="submit"]')
        await SubmitButton.click()
        await browser.pause(2000)



    //     const errorMessage = await form.$('.error-message'); // Replace with your selector
    // assert(errorMessage, 'Expected an error message to be displayed');

console.log("Browser url after submit with empty email is: " + await browser.getUrl()); // https://resources.github.com/newsletter/

let url = await browser.getUrl();

assert(url === "https://resources.github.com/newsletter/", "submit is not working as expected")
          
               
          
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

        console.log("Browser url after serach 'support' is: " + await browser.getUrl()); // https://github.com/search?q=support&type=repositories


          
    })

    xit('Check the "Start a free enterprise trial" button ', async () => {
        await browser.url('https://github.com')


        const link = $('a[data-test-selector="start-trial-button"]')
            await link.click();
            await browser.pause(2000);

            const header = $("h1=Pick your trial plan");
            console.log("Header of the forwarded page is: " + await header.getText()); // Pick your trial plan..
            await browser.back();
            await browser.pause(2000);
          
    })


    xit('Check the title of the "Actions" page', async () => {
        await browser.url('https://github.com')

        let product = await $("header").$("button=Product")
        await product.click()

        await browser.pause(2000)

        let action = await $('header a[href="/features/actions"]')
        await action.click()

        await browser.pause(2000)

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle(
            'Features • GitHub Actions · GitHub')
    })


})