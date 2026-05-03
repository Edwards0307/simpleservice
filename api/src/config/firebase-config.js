require("dotenv").config();
const { FIREBASE_SERVICE_ACCOUNT_KEY } = process.env;
const admin = require("firebase-admin");

if (FIREBASE_SERVICE_ACCOUNT_KEY) {
  const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
