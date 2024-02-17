/**
 * @format
 */

// import = untuk mengakses packages/file di luar file itu sendiri (index.js)
import {AppRegistry} from 'react-native';
import App from './App'; // saya mau mengaksus Class App dari file './App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
