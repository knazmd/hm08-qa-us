const page = require('../../page');
const helper = require('../../helper');

describe('Ordering a Taxi', () => {

  it('Setting the adddress', async () => {
    beforeEach(async () => {
    await browser.reloadSession(); 
    });
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
    const fromFieldValue = await $(page.fromField).getValue();
    const toFieldValue = await $(page.toField).getValue();
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
    const closeButton = await $(page.closeButton);
    await closeButton.click();
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
    const supportivePlan = await $(page.supportivePlan);
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
  });

  it('Ordering a Blanket and handkerchiefs', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const supportivePlan = await $(page.supportivePlan);
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.click();
    await counterPlusButton.click();
  });

  it('The car search modal appears', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const supportivePlan = await $(page.supportivePlan);
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
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
    const messageFieldValue = await messageField.getValue();
    expect(messageFieldValue).toEqual(message);
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.click();
    await counterPlusButton.click();
    const orderButton = await $(page.orderButton);
    await orderButton.click();
  });

  it('Waiting for the driver info to appear in the modal', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.clickSupportivePlan();
    const supportivePlan = await $(page.supportivePlan);
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
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
    const messageFieldValue = await messageField.getValue();
    expect(messageFieldValue).toEqual(message);
    const slider = await $(page.slider);
    await slider.waitForClickable();
    await slider.click();
    const counterPlusButton = await $(page.counterPlusButton);
    await counterPlusButton.click();
    await counterPlusButton.click();
    const orderButton = await $(page.orderButton);
    await orderButton.click();
    await browser.pause(40000);
  });
});