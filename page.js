module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    creditCardField: '#number',
    cvvField: '.card-second-row #code',
    // Buttons
    callATaxiButton: '//button[contains(text(), "Call a taxi")]',
    phoneNumberButton: '//div[contains(text(), "Phone number")]',
    paymentMethodButton: '.pp-text=Payment method',
    addCardButton: '.pp-title=Add card',
    linkButton: '//button[contains(text(), "Link")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethod: 'div=Payment method',
    closeButton: '.payment-picker .section.active .close-button',
    comment: '#comment',
    slider: 'div.r.r-type-switch .slider',
    counterPlusButton: 'div.r.sub.r-type-counter .counter-plus',
    counterValue: 'div.r-counter .counter-value',
    orderButton: 'button.smart-button',
    supportivePlan: 'div=Supportive',
    creditCardCheck: '.pp-row',
  // Modals
  phoneNumberModal: '.modal',
  paymentMethodModal: '.modal',
  carSearchModal: '//div[contains(text(), "Car search")]',
  driverModal: '//div[contains(text(), "The driver will arrive in")]',

  // Functions
  fillAddresses: async function (from, to) {
    const fromField = await $(this.fromField);
    await fromField.setValue(from);
    const toField = await $(this.toField);
    await toField.setValue(to);
    const callATaxiButton = await $(this.callATaxiButton);
    await callATaxiButton.waitForDisplayed();
    await callATaxiButton.click();
  },

  clickSupportivePlan: async function () {
    const supportivePlan = await $(this.supportivePlan);
    await supportivePlan.waitForDisplayed();
    await supportivePlan.click();
  },

  fillPhoneNumber: async function(phoneNumber) {
    const phoneNumberButton = await $(this.phoneNumberButton);
    await phoneNumberButton.waitForDisplayed();
    await phoneNumberButton.click();
    const phoneNumberModal = await $(this.phoneNumberModal);
    await phoneNumberModal.waitForDisplayed()
    const phoneNumberField = await $(this.phoneNumberField);
    await phoneNumberField.waitForDisplayed();
    await phoneNumberField.setValue(phoneNumber);
  },

  submitPhoneNumber: async function(phoneNumber) {
    await this.fillPhoneNumber(phoneNumber);
    await browser.setupInterceptor();
    await $(this.nextButton).click();
    await browser.pause(2000);
    const codeField = await $(this.codeField);
    const requests = await browser.getRequests();
    const code = await requests[0].response.body.code
    await codeField.setValue(code)
    await $(this.confirmButton).click()
  },

  fillCreditCard: async function(cardNumber) {
    const cardNumberField = await $(this.creditCardField);
    await cardNumberField.waitForDisplayed();
    await cardNumberField.setValue(cardNumber);
    const cvvField = await $(".card-second-row #code");
    await cvvField.waitForDisplayed();
    await cvvField.setValue('123');
    const body = await $("body");
    await body.click();
    const linkButton = await $(this.linkButton);
    await linkButton.waitForClickable();
    await linkButton.click();
  }
};