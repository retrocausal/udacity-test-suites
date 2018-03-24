const customMatchers = {
  //toBeginWith is a custom matching factory
  toBeginWith: function(util, customEqualityTesters) {
    //It produces an object that can compare two values and determine if a test passed
    return {
      compare: function(actual, expected = '') {
        let result = {};
        result.pass = util.equals(actual.indexOf(expected), 0, customEqualityTesters);
        result.message = (result.pass) ? `Expected ${actual} to begin with '${expected}' and it does` : `Expected ${actual} to begin with '${expected}' and it does not!`;
        return result;
      }
    };
  },
  //toBeSecure is a custom matching factory
  toBeSecure: function(util, customEqualityTesters) {
    //It produces a comparison object when it shouldn't
    //It does so, because, Jasmine is primitive
    //It uses the previous custom matcher that tests if a string begins with a substring
    return {
      compare: function(actual, expected = 'http://') {
        let r = customMatchers.toBeginWith(util, customEqualityTesters)
          .compare(actual, expected);
        r.message = (r.pass) ? `Expected ${actual} to be secure and it is!` : `Expected ${actual} to be secure, but it is not.`;
        return r;
      }
    }
  }
};