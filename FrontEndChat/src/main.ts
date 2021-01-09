import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAuexjH0R0sbDDhgYCJ3gPvoz2Y8wY3zyw",
  authDomain: "chat-83a88.firebaseapp.com",
  databaseURL: "https://chat-83a88.firebaseio.com",
  projectId: "chat-83a88",
  storageBucket: "chat-83a88.appspot.com",
  messagingSenderId: "612258385048",
  appId: "1:612258385048:web:d46ec6fcd1eb8665f454ed",
  measurementId: "G-ERWZ2YXQNJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();
const db = firebase.firestore();
export default db;


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
