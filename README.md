# ![Furnal Equinox logo](./public/favicon.ico) Donations Tool
### A simple dashboard for keeping track of donations

Hello! This repository houses the code for Furnal Equinox's donations tool.

This is a very simple React web app that operates as a client to our Fauna database that tracks donations.

This project was bootstrapped with Create React App. If you are new to React, please take a look at their great documentation [here](https://create-react-app.dev/docs/getting-started/)! 😄

# 🌎 Environment Details 🌎
This website was built with these tools, if for some reason the website build fails due to a compatibility issue with these tools.
* [NodeJS](https://nodejs.org/en/) version: 14.15.1 (lts/fermium)
* [NPM](https://www.npmjs.com/) version: 6.14.11
* [Yarn](https://yarnpkg.com/) version: 1.22.10
* [create-react-app](https://create-react-app.dev/) CLI version: 4.0.2


# 🛠 Build Instructions 🛠
1. Make sure you have installed NodeJS for your system. NodeJS comes with NPM built in.
   1. If you are on macOS or Linux, I recommend the workflow described [here on Tania Rascia's blog](https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/#nodejs). 
      1. Since this project uses a specific version, be sure to run `nvm install lts/fermium` and then `nvm alias default lts/fermium` (to set this version as the default) or `nvm use lts/fermium` (to use this version just for this session - you will have to run this every time you start a terminal, though!).
      2. Run `npm i -g yarn` to install Yarn.
   2. If you are on Windows, you cannot use `nvm` because it does not support non-POSIX operating systems. In this case, you can:
      1. Install NodeJS normally from the website: https://nodejs.org/en/.
      2. Install NodeJS using a Windows package manager as described here: https://nodejs.org/en/download/package-manager/#windows.
      3. Or [install Windows Subsystem for Linux 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) and install nvm in the Linux VM you chose using the [directions in the GitHub repository for nvm](https://github.com/nvm-sh/nvm#install--update-script). After this, you may follow the directions above for macOS and Linux. ***Warning: This option is somewhat involved, and you may need to enable VM features in your BIOS to get this to work.***
2. Click on the green "Code" button at the top of the repository and clone or download this repository.
3. `cd` into the directory and run `yarn` to install all the dependencies for this website.
4. Rename `.env.example` to `.env` and change the values of the environment variables as needed.
5. Run `yarn start` to start the local development server.
6. If all went well, the website will be ready at `http://localhost:3000/`.
7. Enjoy!!


# 🪄 NPM Script Info 🪄

`yarn start` / `npm run start`
: Starts the local development server.

`yarn build` / `npm run build`
: Builds an optimized production version of the website, ready to be deployed.

`yarn test` / `npm run test`
: Runs automated tests.

`yarn plzfixmycode` / `npm run plzfixmycode`
: Custom script that runs `ts-standard`, a linter for TypeScript. You can read more about Standard JS [here](https://standardjs.com/).

`yarn clean` / `npm run clean`
: Custom script that deletes the output from the build script. Useful if you want / need to do a clean build.