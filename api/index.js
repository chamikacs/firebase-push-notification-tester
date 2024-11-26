const express = require("express");
const admin = require("firebase-admin");
const path = require("path");

// Resolve the path to the service account key file
const serviceAccountPath = path.join(__dirname, "./service-account-key.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
});

const app = express();
app.use(express.json());

app.post("/send", function (req, res) {
  const token = req.body.token;
  const message = {
    notification: {
      title: "Notification",
      body: "This is the Body",
    },
    token: [token],
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent the message",
        token: token,
      });
      console.log("Successfully sent the message: ", response);
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log("Error: ", err);
    });
});

app.listen(3000, function () {
  console.log("Ready to go");
});
