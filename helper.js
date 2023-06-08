module.exports = {
  getPhoneNumber: function(countryCode) {
    const number = Math.floor(1000000000 + Math.random() * 9000000000);
    return `${countryCode}${number}`;
  },
  getElementByText: async function(obj) {
    return await $(`div=${obj.toString()}`);
  },
  generateCreditCardNumber: function() {
        const length = 16; // Standard credit card length
    
      const randomNumber = Math.floor(Math.random() * Math.pow(10, length));
      cardNumber = randomNumber;
    
    return cardNumber;
  },
  generateVerificationCode: function() {
    const length = 3; // Verification code length

      const randomNumber = Math.floor(Math.random() * Math.pow(10, length));
      cvv = randomNumber;
    
    return cvv;
  },
};
