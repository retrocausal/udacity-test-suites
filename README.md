# Project Overview

In this project I am given a web-based application that reads RSS feeds. Because The original developer of this application clearly saw the value in testing, they'd already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on, and I needed to comlete some of the test suites left midway.

## Install

 - Clone this repository
 - CD to the clone directory
 - Run `bower install` - **Only** If you already do not have a *bower_components* folder
   - > If you do not know what bower is, read [here](https://bower.io)
   -  > You would need to run `npm install -g bower` before you run `bower install`
 - Navigate to the cloned project path on a browser, to view the project

## Mock tests

 - open the project folder in your favourite IDE / plain editor
 - navigate to and open js/app.js
   - change the protocol on the urls specified under the variable `allFeeds` to just be `http`
     - Observe Jasmine results on page refresh
   - comment out the url's and then the names of individual feeds declared in `allFeeds`
     - Observe Jasmine results on page refresh

   - click on the menu icon, and see if the feed list is presented and on selection, the feed list is hidden.
    - On selecting a feed from the menu, see if the content changes on the page
## Handlebars
Sometimes, the behavior of `handlebars.js` triggers a console warning.
```
A parser-blocking, cross site (i.e. different eTLD+1) script, http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js?cb=1521960741742&fingerprint=c2VwLW5vLXJlZGlyZWN0&onIframeFlag, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.
```
**Note** : please refresh the page on such warnings
