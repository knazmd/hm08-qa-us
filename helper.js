module.exports = {
  getPhoneNumber: function(countryCode) {
    const number = Math.floor(1000000000 + Math.random() * 9000000000);
    return `${countryCode}${number}`;
  },
  getElementByText: async function(obj) {
    return await $(`div=${obj.toString()}`);
  },
  generateCreditCardNumber: function() {
    const prefix = "4"; // Assume Visa card
    const length = 16; // Standard credit card length
    let cardNumber = prefix;

    while (cardNumber.length < length) {
      const randomNumber = Math.floor(Math.random() * 10);
      cardNumber += randomNumber;
    }

    return cardNumber;
  },
  generateVerificationCode: function() {
    const length = 3; // Verification code length
    let code = "";

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      code += randomNumber;
    }

    return code;
  },
};
