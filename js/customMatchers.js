const customMatchers = {
  //toBeginWith is a custom matching factory
  toBeginWith: (util, customEqualityTesters) => {
    //It produces an object that can compare two values and determine if a test passed
    return {
      compare: (actual, expected = '') => {
        let result = {};
        result.pass = '';
        result.message = (result.pass) ? `Expected ${actual} to begin with 'http://' and it does` : `Expected ${actual} to begin with 'http://' and it does not!`;
        return result;
      }
    };
  }
};