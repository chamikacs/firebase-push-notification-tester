import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import express, { json } from "express";
import admin from "firebase-admin"
// import serviceAccount from "./service-account-key.json"

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = express();
app.use(express.json());

initializeApp({
  credential: applicationDefault(),
//   projectId: 'potion-for-creators'
});

app.post("/send", function (req, res) {
  const token = req.body.token;
  const message = {
    notification: {
      title: "Notifiation",
      body: "This is the Body",
    },
    token: [token],
  };

  admin.getMessaging.sendMulticast()

  getMessaging()
    .send(message)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent the msg",
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
