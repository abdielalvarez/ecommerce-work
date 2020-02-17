// UNCOMMENT THIS AND USE THIS COMMAND TO INSERT NEW BIG DATA TO COLLECTION
// node ./src/seeds/seedCandies.js

// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccount.json');
// const data = require('./candies.json');
// const { config: { databaseURL } } = require('../config');

// const collectionKey = 'candies';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL,
// });

// const firestore = admin.firestore();

// if (data && (typeof data === 'object')) {
//   Object.keys(data).forEach((docKey) => {
//     firestore
//       .collection(collectionKey)
//       .doc(docKey)
//       .set(data[docKey])
//       .then(() => {
//         console.log(`Document ${docKey} successfully written!`);
//       })
//       .catch((err) => {
//         console.error('Error writting document: ', err);
//       });
//   });
// }
