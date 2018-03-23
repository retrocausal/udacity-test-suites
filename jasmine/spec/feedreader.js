/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the Feeds variable in our application.
   */
  describe('RSS Feeds', function () {
    let Feeds, Iterations;
    /*
     *@beforeEach preps a test suite, with all the parameters any of it's IT
     *tests require
     */
    beforeEach(() => {
      //Use custom matchers to identify if TLS/SSL is used
      this.env.addMatchers(customMatchers);
      Feeds = allFeeds;
      //Iterator for allFeeds
      Iterations = Feeds[Symbol.iterator]();
    });

    /* This is our first test - it tests to make sure that the
     * Feeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * Feeds in app.js to be an empty array and refresh the
     * page?
     */
    it('Are defined', function () {
      expect(Feeds)
        .toBeDefined();
      expect(Feeds.length)
        .not.toBe(0);
    });


    /* @SPEC: that loops through each feed
     * in the Feeds object and ensures it has a URL defined
     * and that the URL is not empty. and that the URL is secure
     */
    it('Define a URL to fetch feeds from', () => {
      let next = Iterations.next();
      //begin iterating
      while (!next.done && next.value) {
        const Value = next.value;
        //url should be defined
        expect(Value.url)
          .toBeDefined();
        //url should not be empty
        expect(Value.url.length)
          .not.toBe(0);
        //url needs https
        expect(Value.url)
          .toBeSecure();
        next = Iterations.next();
      }
    });

    /* @SPEC: that loops through each feed
     * in the Feeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('Name a feed', () => {
      let next = Iterations.next();
      //begin iterating
      while (!next.done && next.value) {
        const Value = next.value;
        //name should be defined
        expect(Value.name)
          .toBeDefined();
        //name should not be empty
        expect(Value.name.length)
          .not.toBe(0);
        next = Iterations.next();
      }
    });
  });




  /* SUITE: That defines all specs that should test behaviors for the off canvas menu*/

  describe('Feed Reader Menu', function () {
    let menuIcon, body, classList;
    /*
     *@beforeEach preps a test suite, with all the parameters any of it's IT
     *tests require
     */
    beforeEach(() => {
      //add any custom matchers
      this.env.addMatchers(customMatchers);
      //define the menu element
      menuIcon = $('.menu-icon-link');
      //define the classList to check for menu hide and reveal classes
      body = document.querySelector('BODY');
      classList = body.classList;
      //spyOn(menuIcon, 'click');
    });
    /* @SPEC: that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('Should be hidden at page load', () => {
      expect(classList)
        .toContain('menu-hidden');
    });
    /* @SPEC that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('Should toggle visibility on click', () => {
      let hidden = document.querySelector('.menu-hidden');
      if (hidden) {
        menuIcon.trigger('click');
        expect(classList)
          .not.toContain('menu-hidden');
        menuIcon.trigger('click');
        expect(classList)
          .toContain('menu-hidden');
      } else {
        menuIcon.trigger('click');
        expect(classList)
          .toContain('menu-hidden');
        menuIcon.trigger('click');
        expect(classList)
          .not.toContain('menu-hidden');
      }
    });
  });
  /* SUITE that defines specs that test behavior of feed fetches and feed displays */

  /* @SPEC: that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());