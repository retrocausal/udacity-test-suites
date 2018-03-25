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
