#Stupid Simple Node Single-Page-App Project Shell

##What it does and why
This repo is a quick and easy project shell to rapidly get an environment up and running for development on single page applications.  This is probably not a long-term environment solution for your project, but serves to quickly get you up and running with a local Express server that will redirect all application paths back to an application route (most likely the `index.html` at the top level of your project).  While you could also accomplish this using something like <a href="https://www.mamp.info/en/" target="_blank">MAMP</a>, <a href="http://www.wampserver.com/en/" target="_blank">WAMP</a>, or <a href="https://www.apachefriends.org/index.html" target="_blank">XAMPP</a>, or an <a href="https://github.com/anied/vagrant_templates#single-page-app-basic" target="_blank">apache-provisioned Vagrant box</a>, this approach has the benefit of very low overhead (no need to download any VMs or software suites), not requiring any complicated configuration, and allowing you to keep your project directory wherever you wish.

##What it doesn't do
There's no database hooked into this thing.  You'll have to stub out your data or make the connections some other way for now.

##Requirements
To use this project shell you must have [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed.

## How To Use Stupid Simple Node SPA Project Shell
+ Copy the contents of this repo to the folder where you intend to host your project.
+ Run `npm install` to install dependencies.
+ There is a config file at `config\settings.json`.  There are defaults set but they can be changed if desired:
    * `port`: port on your machine on which the local server will start _(defaults to 8000)_
    * `webroot`: directory name from where you intend to serve your front end code-- as it is `src` in the demo files in the repo, it defaults to `src`
    * `approot`: name/location of the file you want all browser requests directed to-- most likely you'll want to keep this as the default (`index.html`).
+ Run `npm start`
+ Navigate to `localhost:8000` (or whatever port you have set in the config file) -- you should see the "Hello world!" message with some details showing how the project works.

_**NOTE:**  If you would prefer, there is a branch called bare_bones with none of the supplementary CSS/JS/HTML demo material in the `src` directory-- simply the project file hierarchy and a basic "Hello World" `index.html` file are present._

You now have a webserver up and running for your project.  If you're using the demo version on master (and didn't make any changes to `webroot` or `approot` in the config file), you will see that source JS/CSS/HTML files are loaded as expected, but any unmatched paths navigated in the browser will be redirected to `index.html`.  SO- now its time to make it your own.  Update relevant information in package.json (but don't delete the current start script nor devDependencies unless you're sure you know what you're doing).  Delete or replace this `readme.md`.  And clear out index.html and start building your project in there.  Leverage one of the many excellent MV* libraries available to capture your routes and load the appropriate views.

##License
There's really nothing particularly original in this repo-- it's just a project shell.  Grab it and use it as you wish.  Credit is appreciated but not required.  If you're happy with this project shell, consider starring it or linking back to it on Github.