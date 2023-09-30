class MainPage {

    get ForumBtn() { return $('a[href="https://dou.ua/forums/"]')  }
    get bandBtn() { return $('a[href="https://dou.ua/lenta/"]')  }
    get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]')  }
    get searchInput() { return $('#txtGlobalSearch')  }
    get gameDevBtn() { return $('.menu-site__gamedev') }
    get relocateBtn() { return $('.menu-site__relocate') }
    get robotaBtn() { return $('a[href="https://jobs.dou.ua/"]')}

    async clickOnForumBtn() {
        await this.ForumBtn.click()
    }

    async clickOnbandBtn() {
        await this.bandBtn.click()
    }

    async clickOnsalariesBtn() {
        await this.salariesBtn.click()
    }

    async clickOngameDevBtn() {
        await this.gameDevBtn.click()
    }
    
    async clickOnRobotaBtn() {
        await this.robotaBtn.click()
    }

    async setSearchInput(value) {
        await this.searchInput.addValue(value)
    }


}
 export default new MainPage()