# Chatty App Project

Chatty is a SPA (single page application).  Chatty allows users to communicate with each other without having to register accounts. 
It uses React, as well as Webpack and Babel.

### Usage

```
Install the dependencies and start the server.
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Install the dependencies for the WebSockets within the chatty_server directory using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.
```

### App Dependencies

* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* css-loader
* node-sass
* sass-loader
* sockjs-client
* style-loader
* webpack
* webpack-dev-server
* react
* react-dom

### WebSockets Dependencies

* express
* ws
* uuid

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.