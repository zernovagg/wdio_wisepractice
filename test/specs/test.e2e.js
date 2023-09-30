import assert from "assert/strict"

import { expect } from '@wdio/globals'

describe('Webdriverio main page', () => {

    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/')
        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle(
            'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    })

    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        let input = await $("#username")
        await input.addValue("Hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue(
            "Hello123")
    })

    xit('should show setValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        let input = await $("#username")
        await input.setValue("world")
        await browser.pause(2000)
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())

        await expect(input).toHaveValue(
            "hello")
    })

    xit('should show click command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')

        let loginButton = await $(".radius")
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(2000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("SuperSecretPassword!")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    })

    xit('should show getAttribute command', async () => {
        await browser.url('https://dou.ua/search')

        let inputSearch = await $("#gsc-i-id1")
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: " + attr) // outputs: шукати

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr) // outputs: Cat


    })

    xit('should show getLocation command', async () => {
        await browser.url('https://dou.ua')

        let inputSearch = await $("#txtGlobalSearch")
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location) // outputs: x.y

        let xlocation = await inputSearch.getLocation('x')
        console.log("Location by x is: " + xlocation) // outputs: x


    })

    xit('should show getText command', async () => {
        await browser.url('https://webdriver.io')

        let subtitle = await $(".hero__subtitle")
        console.log("Subtitle text is: " + await subtitle.getText()) // outputs: Next-gen browser..

    })

    xit('HW1', async () => {
        await browser.url('https://webdriver.io/')

        let go = await $("a=API")
        await go.click()
        await browser.pause(2000)
        console.log("Browser url after API click: " + await browser.getUrl()); // https://webdriver.io/docs/api/

        const header = await $('h1=Introduction')
        await expect(header).toHaveText('Introduction')

        const breadCrumps = await $('span.breadcrumbs__link')
        await expect(breadCrumps).toHaveText('Introduction')

        const linkWebDriver = await $('a=WebDriver')
        await expect(linkWebDriver).toHaveAttribute('href', '/docs/api/webdriver')


        let searchField = await $("span.DocSearch-Button-Placeholder")
        await searchField.click()
        let searchInput = await $("#docsearch-input")
        await searchInput.setValue("all is done")
        await browser.pause(2000)
        console.log("All is done is displayed:" + await searchInput.getValue()) //all is done

        await searchInput.clearValue()
        await browser.pause(2000)
        console.log("NOthing  is displayed:" + await searchInput.getValue()) //the search field is cleared
    })

    xit('should show if an element is clickable', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable();
        console.log("is clickble: " + clickable) // outputs: true

    });

    xit('should show if an element is displayed', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed();
        console.log("Is displayed: " + displayed) // outputs: true

    });

    xit('should show if an element is visible', async () => {
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewPort = await blogButton.isDisplayedInViewport();
        console.log("Is displayed in Viewport: " + displayedInViewPort) // outputs: true

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
        let FooterIsDisplayedInViewport = await footer.isDisplayedInViewport();
        console.log("Is footer displyed in Viewport: " + FooterIsDisplayedInViewport) //output: false
    })

    xit('should show if an element is enabled', async () => {
        await browser.url('https://webdriver.io');

        const getstartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getstartedButton.isEnabled();
        console.log("Is Enabled: " + isEnabled) // outputs: true

    });

    xit('should show if an element is focused', async () => {
        await browser.url('https://webdriver.io');

        const getstartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getstartedButton.isFocused();
        console.log("Is get started button is focused before click: " + isFocused ) // outputs: false
        await browser.pause(2000)
        await getstartedButton.click()
        console.log("Is get started button is focused after click: " + isFocused ) // outputs: true
        await browser.pause(2000)

    });

    xit('should show movement to element action', async () => {
        await browser.url('https://webdriver.io');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
    })

    xit('should show save screenshot command', async () => {
        await browser.url('https://webdriver.io');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('LinkScreenshot.png')

    })

    xit('should show switch to another window', async () => {
        await browser.url('https://webdriver.io');
        
        await browser.newWindow('https://google.com')
        await browser.pause(2000)

        await browser.switchWindow('https://webdriver.io')
        await browser.pause(2000)
       
    })

    xit('should show waitUntil command', async () => {
        await browser.url('https://webdriver.io');

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]')
        }, 5000, "Button is not displyed")
       
    })

    xit('should get HTML for certain elements', async () => {
        await browser.url('https://webdriver.io');
        
        const outerHTML = await $('.dropdown__menu').getHTML();
        console.log("outerHTML: " + outerHTML)

        const innerHTML = await $('.dropdown__menu').getHTML(false);
        console.log("innerHTML: " + innerHTML)

       
    })

    xit('HW2', async () => {
        await browser.url('https://webdriver.io');

        const API = await $("a=API")
        await API.click()
        await browser.pause(2000)

        const blogFooterButton = await $("footer a[href='/blog']")
        await browser.pause(2000)
        await blogFooterButton.scrollIntoView()
        await browser.pause(2000)
        let BlogIsdisplayedInViewPort = await blogFooterButton.isDisplayedInViewport();
        console.log("Blog link Is displayed in Viewport: " + BlogIsdisplayedInViewPort) // outputs: true

        let displayedInViewPort = await blogFooterButton.isDisplayedInViewport();
        console.log("Is displayed in Viewport: " + displayedInViewPort) // outputs: true

        const ProtocolComButton = await $(".pagination-nav__label")
        let ProtComButtonIsEnabled = await ProtocolComButton.isEnabled()
        let ProtComButtonIsClickable = await ProtocolComButton.isClickable()
        let ProtComButtonIsDisplayed = await ProtocolComButton.isDisplayed()
        await browser.pause(2000)
        console.log("Protocol command button is enabled: " + ProtComButtonIsEnabled) // outputs: true
        console.log("Protocol command button is clickable: " + ProtComButtonIsClickable) // outputs: true
        console.log("Protocol command button is displayed: " + ProtComButtonIsDisplayed) // outputs: true

        var outerHTML = await ProtocolComButton.getHTML();
        console.log('Outer HTML for Protocol Command link' + outerHTML);

       await ProtocolComButton.click();
       await browser.waitUntil(async () => {
        return $("h2[id='webdriver-protocol']")
    }, 5000, "Header 'WD protocol' is not displyed")
    })
     
    xit('should check assert abilities', async () => {
        await browser.url('https://webdriver.io');
        
        const outerHTML = await $('.dropdown__menu').getHTML();
        console.log("outerHTML: " + outerHTML)

        assert(1 === 1, "1 not equal 1")
        assert(1 === "hello", "1 not equal hello")

       
    })
    
})

