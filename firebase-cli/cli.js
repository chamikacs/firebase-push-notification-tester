const admin = require("./firebase");
const { program } = require('commander');

const TITLE = "Test notification";
const BODY = "Test push notification with notification";

async function sendNotificationToToken(token) {
  const message = {
    notification: {
      title: TITLE,
      body: BODY,
    },
    token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}

async function sendNotificationToTopic(topic) {
  const message = {
    notification: {
      title: TITLE,
      body: BODY,
    },
    topic,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent to topic successfully:", response);
  } catch (error) {
    console.error("Error sending notification to topic:", error.message);
  }
}

program
.command('token <token>')
.description('Send a notification to a specific token')
.action(async (token) => {
    await sendNotificationToToken(token);
});

program
.command('topic <topic>')
.description('Send a notification to a specific topic')
.action(async (topic) => {
    await sendNotificationToTopic(topic);
});

program.parse(process.argv);

// e0wNsFG2Qqi9ZnxgsjEq0C:APA91bHMLCfIxkkzt6ekHW-jbbx8_v3nv69RPpf6IUUo55s6v45ZJsbGQdxc1zJvhJUW6yOmR1HVWfBU09wyV1whWkkFdLDSyZWzGd7PkSptnUnqqVtTd0s