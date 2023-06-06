const page = require('../../page');
const helper = require('../../helper');

describe('Ordering a Taxi', () => {

  it('Setting the adddres', async () => {
   
    await browser.url('/');
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const fromFieldValue = await $(page.fromField).getValue();
    const toFieldValue = await $(page.toField).getValue();
    expect(fromFieldValue).toEqual('East 2nd Street, 601');
    expect(toFieldValue).toEqual('1300 1st St');
  });

  

  it('Seecting Supportive plan', async () => {
    await page.clickSupportivePlan();
    const supportivePlan = await $('div=Supportive');
    const isClicked = await supportivePlan.isClickable();
    expect(isClicked).toBe(true);
    await expect(supportivePlan.parentElement()).toHaveElementClass('active');
  });
  
  
  it('Filling in the phone number', async () => {
    const phoneNumberButton = await $(page.phoneNumberButton);
    await phoneNumberButton.waitForDisplayed();
    await phoneNumberButton.click();
    const pnoneNumberModal = await $(page.phoneNumberModal);
    await expect(pnoneNumberModal).toBeExisting();

    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
});

it('Adding a credit card', async () => {
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
    const message = 'Please deliver to the front porch.';
    const messageField = await $('#comment');
    await messageField.setValue(message);
    const messageFieldValue = await messageField.getValue();
    expect(messageFieldValue).toEqual(message);
  });

  it('Ordering a Blanket and handkerchiefs', async () => {
    const slider = await $('div.r.r-type-switch .slider');
await slider.waitForClickable();
await slider.click();

  });

  it('Ordering 2 Ice creams', async () => {
    const counterPlusButton = await $('div.r.sub.r-type-counter .counter-plus');
await counterPlusButton.click();
await counterPlusButton.click();
   
  });

  it('The car search modal appears', async () => {
    const orderButton = await $('button.smart-button');
await orderButton.click();

  })
  it('Waiting for the driver info to appear in the modal', async () => {

await browser.pause(35000);
  })
});