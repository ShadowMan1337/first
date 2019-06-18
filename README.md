Bank Loan Enquiry
Bank Loan Enquiry app is developed using ReactJS. It is a very simple and easy to use Application. Any interested user can enquire about the Loan details using this App. The App give details such as Interest rate, Monthly Payments, Number of Payments respective to Loan amount and Duration.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Prerequisites
You’ll need to have Node >= 8.10 on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions between different projects.

 npx package manager which comes with Node.js software bundle (the latest LTS)

 Sublime Text Editor/ Atom / Visual Studio Code

Installing
To create a new app, you may choose one of the following methods:
npx
npx create-react-app my-app
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)
npm
npm init react-app my-app
npm init <initializer> is available in npm 6+


Yarn
yarn create react-app my-app
yarn create is available in Yarn 0.25+ (for MAC users)
Follow https://codeburst.io/getting-started-with-react-3d94bc381587 documentation to create a example app
Output/Folder Structure
Running any of these commands will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:
cd my-app
For the project to build, these files must exist with exact filenames:
public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.
You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack. You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.
Only files inside public can be used from public/index.html. Read instructions below for using assets from JavaScript and HTML.
You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.
If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level git directory.
Building your App
This project setup supports ES6 modules thanks to Webpack.
While you can still use require () and module.exports, we encourage you to use import and export instead.
For example:
App.js
import React, {Component} from 'react';
import {SliderUse} from './SliderUse';
import './App.css';
class App extends Component{
  render(){
  return (
    <div className="App">
    <div className="App-title">Bank Loan Enquiry</div>
      <div>
        <p><font size="5">Enter Loan Amount(in $)</font></p>
        <SliderUse   initialSize={0} minSize={500}  maxSize={5000}
          /> </div>
    </div>
  );} }
export default App;

Custom Theme

While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice for projects looking for smaller builds at the expense of some features.
Each project's respective documentation site has detailed instructions for installing and using them. Both depend on the Bootstrap css file so install that as well:
npm install --save bootstrap
Alternatively, you may use yarn:
yarn add bootstrap
Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your src/index.js file:
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
Deployment
npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the production build section.
Static Server
For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:
npm install -g serve
serve -s build
The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:
serve -s build -l 4000
Run this command to get a full list of the options available:
serve -h
Add additional notes about how to deploy this on a live system
Other Solutions
Create and Deploy a React App in Two Minutes
You can get started building React apps for free on Heroku.
npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

Built With
•	ReactJS - The Frontend JavaScript Library
•	Sublime Text Editor - IDE
•	NPM – Package Dependency Management
•	Heroku – App deployment
Authors
•	Ankush U Nair - Complete work 
Acknowledgments
•	FrontEnd API provided by FullThrottle Labs
•	Inspired by requirement of more of a convenient app in Banking sector for Loan details.
•	Part of the Coding Challenge given by FullThrottle Labs

