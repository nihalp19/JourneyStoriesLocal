const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-file.json'); // path to the downloaded service account JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

const db = admin.firestore(); // Firestore database reference
module.exports = db;
