# INFO6150 web app
Repository of assignments/labs webapp

# Validator bookmarklet
Copy this <a href="javascript%3A%20(async%20function%20()%20%7B%0A%20%20const%20htmlNode%20%3D%20document.querySelector(%22html%22).cloneNode(true)%3B%0A%20%20const%20tmp%20%3D%20document.createElement(%22div%22)%3B%0A%20%20tmp.appendChild(htmlNode)%3B%0A%20%20const%20documentString%20%3D%20%60%3C!DOCTYPE%20html%3E%24%7Btmp.innerHTML%7D%60%3B%0A%0A%20%20const%20response%20%3D%20await%20fetch(%60http%3A%2F%2Flocalhost%3A3000%2Fnu%2F%23file%60%2C%20%7B%0A%20%20%20%20method%3A%20%22POST%22%2C%0A%20%20%20%20cache%3A%20%22no-cache%22%2C%0A%20%20%20%20mode%3A%20%27cors%27%2C%20%0A%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20%22Content-Type%22%3A%20%22text%2Fhtml%3B%20charset%3DUTF-8%22%2C%0A%20%20%20%20%20%20%22User-Agent%22%3A%20navigator.userAgent%0A%20%20%20%20%7D%2C%0A%20%20%20%20referrerPolicy%3A%20%22no-referrer%22%2C%20%0A%20%20%20%20body%3A%20documentString%2C%0A%20%20%7D)%3B%0A%20%20const%20html%20%3D%20await%20response.text()%3B%0A%20%20%0A%20%20const%20newWindow%20%3D%20window.open(%22about%3Ablank%22%2C%20%22width%3D200%2Cheight%3D200%22%2C%20%22_blank%22)%3B%0A%20%20let%20updatedHTML%20%3D%20html.replace(%22style.css%22%2C%27https%3A%2F%2Fvalidator.w3.org%2Fnu%2Fstyle.css%27)%3B%0A%20%20updatedHTML%20%3D%20updatedHTML.replace(%2F%5C%3Cform(.*)form%5C%3E%2Fg%2C%20%22%22)%3B%0A%20%20newWindow.document.write(updatedHTML)%3B%0A%7D)()%3B%0A">Validate HTML bookmarklet</a> to your bookmarks bar. When you click the bookmark while viewing a page in your web app, a window will be opened that will validate your HTML with W3C Validator (http://validator.w3.org).


# Github guide
We will use github repos throughout the course. If you are not familiar with git, or could use a refresher on how to use git, this is an excellent starter guide: https://guides.github.com/activities/hello-world/


# View the demo components
Visit the following URLs with the webapp running to view the various demos: 
* http://localhost:3000/?demo=concepts 
* http://localhost:3000/?demo=hello 
* http://localhost:3000/?demo=hello-user-class
* http://localhost:3000/?demo=adding
* http://localhost:3000/?demo=cssmodules


# Forking class repo and setting upstream remote
1. Make sure you have git installed: https://git-scm.com/downloads
2. Go to the git repo for this class: https://github.com/aprilbingham-neu/seainfo6150-webapp
3. Click “Fork” to create your copy of the repo
4. Click “Clone or download” to get a link to copy your fork on your computer
5. Click “Use HTTPS”
6. Copy link
7. Open command line/terminal window and use these commands in a directory where you have admin permissions
```
git clone [copied link]
cd seainfo6150-webapp
git remote add upstream https://github.com/aprilbingham-neu/seainfo6150-webapp
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
