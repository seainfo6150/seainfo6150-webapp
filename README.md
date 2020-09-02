# INFO6150 web app
Repository of assignments/labs webapp

# Validator bookmarklet
Install this bookmarklet

Make a new bookmark in your browser (right-click on the [bookmarks bar](https://support.google.com/chrome/answer/95745?hl=en) and click `Add Page...`)
  - For the "Name" you might put "Validate HTML".
  - Copy the code block below, paste this into the "Location" of a new bookmark.

```
javascript:void%20function(){javascript:(async%20function(){const%20a=document.querySelector(%22html%22).cloneNode(!0),b=document.createElement(%22div%22);b.appendChild(a);const%20c=`%3C!DOCTYPE%20html%3E${b.innerHTML}`.replace(/style%20type=\%22text\/css\%22/g,%22style%22),d=await%20fetch(`http://localhost:3000/nu/%23text-area`,{method:%22POST%22,cache:%22no-cache%22,mode:%22cors%22,headers:{%22Content-Type%22:%22text/html;%20charset=UTF-8%22,%22User-Agent%22:navigator.userAgent},referrerPolicy:%22no-referrer%22,body:c}),e=await%20d.text(),f=window.open(%22about:blank%22,%22%22,%22width=700,height=500%22);let%20g=e.replace(%22style.css%22,%22https://validator.w3.org/nu/style.css%22);g=g.replace(/\%3Cform(.*)form\%3E/g,%22%22),f.document.write(g)})()}();
```

When you click the bookmark while viewing a page in your web app, a window will be opened that will validate your HTML with W3C Validator (http://validator.w3.org).


# Github guide
We will use github repos throughout the course. If you are not familiar with git, or could use a refresher on how to use git, this is an excellent starter guide: https://guides.github.com/activities/hello-world/


# View the demo components
Visit the following URLs with the webapp running to view the various demos: 
* http://localhost:3000/demo/concepts 
* http://localhost:3000/demo/hello-user
* http://localhost:3000/demo/hello-user-class
* http://localhost:3000/demo/adding
* http://localhost:3000/demo/adding-hooks
* http://localhost:3000/demo/list
* http://localhost:3000/demo/cssmodules
* http://localhost:3000/demo/edgar
* http://localhost:3000/demo/grid


# Forking class repo and setting upstream remote
1. Make sure you have git installed: https://git-scm.com/downloads
2. Go to the git repo for this class: https://github.com/aprilbingham-neu/seainfo6150-webapp
3. Click “Fork” to create your copy of the repo
4. Click the “Code” to get a link to copy your fork on your computer
5. Click “Use HTTPS”
6. Copy link
7. Open command line/terminal window and use these commands in a directory where you have admin permissions
```
git clone [copied link]
cd seainfo6150-webapp
git remote add upstream https://github.com/aprilbingham-neu/seainfo6150-webapp
```

# Looking at a list of all your branches
```
cd seainfo6150-webapp
git branch
```

# Creating a branch from master
```
cd seainfo6150-webapp
git checkout master
git pull origin master
git checkout --b [new branch name]
```

# Creating a branch from a branch other than master
```
cd seainfo6150-webapp
git checkout [branch to create branch from]
git checkout --b [new branch name]
```

# Pushing your changes to your fork
Make changes to your branch, then
```
git add .
git commit -m “[commit name]”
git push origin [branch name]
```

# Pulling updates from main repo
```
cd seainfo6150-webapp
git pull upstream master
```

# Running the app for the first time
```
cd seainfo6150-webapp
npm install
npm start
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the modules needed to run the app in node_modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
