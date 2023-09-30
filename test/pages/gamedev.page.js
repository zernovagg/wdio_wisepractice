class GameDevPage {

    get companyGameDevsRateLink() { return $('//*[text()="Рейтинг найбільших геймдев-компаній"]')}
    get topGamesRateLink () { return $('//*[text()="Топ ігор місяця"]')}

    async clickOntopGamesRateLink() {

        await this.topGamesRateLink.click()
    }


}

export default new GameDevPage()