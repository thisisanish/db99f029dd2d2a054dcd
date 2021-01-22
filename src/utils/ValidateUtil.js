const Validator = {
  validateFeild: function(feild) {
    return !!feild
  },
  // will be used in profile page
  validateEmail: function(email) {
    const reg = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return reg.test(email)? true: 'Email not valid!'
  },

  validatePhone: function(phoneNumber) {
    const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    return reg.test(phoneNumber)? true: false
  },

  validatePassword: function(p1, p2) {
    return !!p1 && !!p2 && p1 === p2
  },

  validateForm: function(formObj) {
    const areAllEntryValid = Object.entries(formObj).every(([key, value]) => !!value);
    if (areAllEntryValid) {
      if (formObj.hasOwnProperty('email')) return this.validateEmail(formObj['email']);
      return true;
    }
    return 'Input fields are missing';
  }
}

export default Validator;
