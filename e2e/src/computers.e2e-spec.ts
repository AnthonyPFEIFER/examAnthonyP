import { ComputerPage } from './computers.po';
import { browser, logging, element, by } from 'protractor';

describe('Testing Subject: Computers', () => {
    let page: ComputerPage;
    let numberLineInit: number;
    beforeEach(() => {
        page = new ComputerPage();
        numberLineInit = 0;
        browser.get('/home');
    });

    it('Testing numbers of lines in the table, then testing if we are in add page ', () => {
        element.all(by.css('.computerLine')).then(totalRows => {
            numberLineInit = totalRows.length;
        });
        element.all(by.css('#addSectionBtn')).first().click();
        expect(browser.driver.getCurrentUrl()).toContain('/add');
    });
    it('Testing to fill form. Then testing if I\'m back on dashboard (accueil) ', () => {
        browser.get('/computer/add');
        page.completeForm();
        element.all(by.id('submitBtn')).click();
        expect(browser.driver.getCurrentUrl()).toContain('home'); // Visiblement, j'ai dû rater le routing. Mais j'arrive pas à y régler
        page.sleep();
    });
    it('Testing if we have one more line ', () => {
        element.all(by.css('.computerLine')).then(totalRows => {
            this.numberLineInit += 1;
            expect(totalRows.length).toEqual(this.numberLineInit);
        });

    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
