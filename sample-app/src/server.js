const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f4f4f4;
          }
          img {
            width: 300px;
            border-radius: 10px;
          }
          h1 {
            color: #24292e;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to GitHub Actions Demo App</h1>
        <p>This application is used for learning CI/CD with GitHub Actions.</p>

        <img src="/welcome.png" alt="Welcome Image">

        <p>
          Built with Express.js and deployed using GitHub Actions.
        </p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    application: 'welcome-app',
    timestamp: new Date().toISOString(),
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = app;
