import { browser, by, element } from 'protractor';

export class ComputerPage {
    completeForm() {
        let modele = element.all(by.id('modele'));
        let marque = element.all(by.id('inputRadio-Dell'));
        let type = element.all(by.id('inputRadio-Portable'));
        let category = element.all(by.id('inputRadio-Bureautique'));
        let prixAchat = element.all(by.id('prixAchat'));
        let prixVente = element.all(by.id('prixVente'));
        modele.sendKeys('test');
        marque.click();
        type.click();
        category.click();
        prixAchat.sendKeys(420);
        prixVente.sendKeys(420);
    }
    sleep() {
        browser.driver.sleep(3000);
    }
}

// modele, marque, type, category, prixAchat, prixVente
