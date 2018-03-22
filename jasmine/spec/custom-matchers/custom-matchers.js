const customMatchers = {
  //toBeginWith is a custom matching factory
  toBeginWith: function (util, customEqualityTesters) {
    //It produces an object that can compare two values and determine if a test passed
    return {
      compare: function (actual, expected = '') {
        let result = {};
        result.pass = util.equals(actual.indexOf(expected), 0, customEqualityTesters);
        result.message = (result.pass) ? `Expected ${actual} to begin with '${expected}' and it does` : `Expected ${actual} to begin with '${expected}' and it does not!`;
        return result;
      }
    };
  },
  toBeSecure: function (util, customEqualityTesters) {
    return {
      compare: function (actual, expected = 'http://') {
        let r = customMatchers.toBeginWith(util, customEqualityTesters)
          .compare(actual, expected);
        r.message = (r.pass) ? `Expected ${actual} to be secure and it is!` : `Expected ${actual} to be secure, but it is not.`;
        return r;
      }
    }
  }
};