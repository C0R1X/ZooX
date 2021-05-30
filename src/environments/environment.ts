// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAgnJ1cuxVhP3R-dJ2OV011J8cQxzITwjs",
    authDomain: "zoox-cea8e.firebaseapp.com",
    projectId: "zoox-cea8e",
    storageBucket: "zoox-cea8e.appspot.com",
    messagingSenderId: "750505399061",
    appId: "1:750505399061:web:6c5463ece345a67f0a8f1c"
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
