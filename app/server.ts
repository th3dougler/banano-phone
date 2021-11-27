const express = require('express');
const path = require('path');

export const startServer = async () => {
  const app = express();

  app.use(express.json());
  const buildPath = path.join(__dirname, '..', 'frontend');
  console.log(buildPath);
  app.use(express.static(buildPath));

  const port = process.env.PORT || 3000;

  app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
  app.get('/*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
};
