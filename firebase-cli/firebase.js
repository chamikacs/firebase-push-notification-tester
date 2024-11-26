const admin = require('firebase-admin');
const path = require('path');

const serviceAccountPath = path.join(__dirname, './service-account-key.json');

admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath)),
});

module.exports = admin;