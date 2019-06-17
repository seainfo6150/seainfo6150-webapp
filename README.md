# INFO6150 web app
Repository of assignments/labs webapp

# View the demo components
Visit http://localhost:3000/?demo=true with the webapp running


# Forking class repo and setting upstream remote
1. Install git: https://git-scm.com/downloads
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
cd seainfo6150-app
git checkout master
git pull origin master
git checkout --b [new branch name]
```

# Creating a branch from a branch other than master
```
cd seainfo6150-app
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
