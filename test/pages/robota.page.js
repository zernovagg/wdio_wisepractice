class RobotaPage {

    get SearchButton() { return $('.btn-search')}

    async clickOnSearchButton() {
        await this.SearchButton.click()
    }

    


}

export default new RobotaPage ()