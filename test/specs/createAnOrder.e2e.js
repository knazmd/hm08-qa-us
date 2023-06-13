const page = require('../../page');
const helper = require('../../helper');

describe('Ordering a Taxi', () => {
  beforeEach(async () => {
    await browser.reloadSession(); 
    });// It's not nessesary to reset values every time, but I prefer to do this for clear results, specially when clicking the slider(P.S. it slower for 14 sec on my PC)
  it('Setting the adddress', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const fromFieldValue = await $(page.fromField).getValue();
    const toFieldValue = await $(page.toField).getValue();
    expect(fromFieldValue).toEqual('East 2nd Street, 601');
    expect(toFieldValue).toEqual('1300 1st St');
  });

  it('Selecting Supportive plan', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const supportivePlan = await $(page.supportivePlan);
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
  });

  it('Filling in the phone number', async () => {
    await browser.url(`/`); 
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
    const phoneNumber = helper.getPhoneNumber("+1"); 
    await page.submitPhoneNumber(phoneNumber); 
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
  });

  it('Adding a credit card', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const paymentMethodButton = await $(page.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();
    const addCardButton = await $(page.addCardButton);
    await addCardButton.click();
    const creditCardNumber = helper.generateCreditCardNumber();
    await page.fillCreditCard(creditCardNumber);
    const creditCardCheck = await $(page.creditCardCheck);
    const isExisting = await creditCardCheck.isSelected();
    expect(isExisting).toBeExisting();
  });

  it('Writing a message for the driver', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const message = 'Please deliver to the front porch.';
    const messageField = await $(page.comment);
    await messageField.setValue(message);
    const messageFieldValue = await messageField.getValue();
    expect(messageFieldValue).toEqual(message);
  });

  it('Ordering a Blanket and handkerchiefs', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
    const isClicked = await slider.isClickable();
    expect(isClicked).toBe(true);
  });

  it('Ordering 2 Ice creams', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    const counterValue = await $('div.r-counter .counter-value');
    const valueText = await counterValue.getText();
    expect(valueText).toEqual('2');
  });

  it('The car search modal appears', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    const paymentMethodButton = await $(page.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();
    const addCardButton = await $(page.addCardButton);
    await addCardButton.click();
    const creditCardNumber = helper.generateCreditCardNumber();
    await page.fillCreditCard(creditCardNumber);
    const closeButton = await $(page.closeButton);
    await closeButton.click();
    const message = 'Please deliver to the front porch.';
    const messageField = await $(page.comment);
    await messageField.setValue(message);
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    const orderButton = await $(page.orderButton);
    await orderButton.click();
    const carSearchModal = await $(page.carSearchModal);
    await carSearchModal.waitForDisplayed();
    expect(await carSearchModal.isDisplayed()).toBe(true);
  });

  it('Waiting for the driver info to appear in the modal', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    const paymentMethodButton = await $(page.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();
    const addCardButton = await $(page.addCardButton);
    await addCardButton.click();
    const creditCardNumber = helper.generateCreditCardNumber();
    await page.fillCreditCard(creditCardNumber);
    const closeButton = await $(page.closeButton);
    await closeButton.click();
    const message = 'Please deliver to the front porch.';
    const messageField = await $(page.comment);
    await messageField.setValue(message);
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    await counterPlusButton.waitForClickable();
    await counterPlusButton.click();
    const orderButton = await $(page.orderButton);
    await orderButton.click();
    await browser.pause(40000);
    const driverModal = await $(page.driverModal);
    await driverModal.waitForDisplayed();
    expect(await driverModal.isDisplayed()).toBe(true);
  });
});