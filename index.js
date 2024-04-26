const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = 5678;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Xin chao");
});

app.post("/webhook", (req, res) => {
  console.log("Received a webhook event from GitHub");

  // Thực hiện pull code mới từ repository
  exec("git pull origin main", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during pull: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`Code pulled successfully: ${stdout}`);
  });

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
