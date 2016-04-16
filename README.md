# Starter Template for a Meteor-Angular-Ionic Project
A Meteor Project with AngularJS, MongoDB, and Ionic Sidemenu template set up. Javascript is the ECMAScript 2015 (ES6) version.
Built using the `meteor CLI`

## How to Use
* Search the whole project for the word "starter" (`Cmd-Shift-F` on Mac for most text editors)
* Replace "starter" with whatever you want to name your angular module
* Read through this [Angular Meteor WhatsApp Tutorial](http://www.angular-meteor.com/tutorials/whatsapp/meteor/authentication "Angular Meteor WhatsApp Tutorial") to understand what is going on
    * **Note 1**: This is a sidemenu boilerplate, so you will have to be careful with the way the tutorial handles routing, look at [Ionic's Sidemenu Template](https://github.com/driftyco/ionic-starter-sidemenu "Ionic Sidemenu Starter Template") to understand how to manage the ionic sidemenu html and routing
    * **Note 2**: On the tutorial's "Bootstrapping" page, (unless a fix is made) do not follow the package installation instructions for `angular-meteor` because there is currently a conflicting problem between `angular-meteor-data@1.3.10` and `pbastowski:angular-babel@1.3.3`.
    * **Note 3**: Everything up to (not including) the accounts portion has been finished. You probably want to choose the best way to authenticate for your own apps, so everything from then on is up to you.
* Edit the code as needed

### Platforms
* `ios`
* `android`

### Packages
**Removed**
* `blaze-html-templates`
* `ecmascript`

**Added**
* `angular-templates`
* `pbastowski:angular-babel`
* `dab0mb:ionic-assets`
* `fourseven:scss`
* `check`

**Packages Installed (w/ `--save` flag)**
* `angular`
* `angular-meteor`
* `ionic-scripts`
* `moment`
* `angular-moment`
