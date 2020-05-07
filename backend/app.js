const express = require('express');

const app = express();

app.use('/api/contact', (req, res, next) => {
  const submissions = [
    {
      id: 1,
      email: 'rterry5@gmail.com',
      content: 'This is the first form content.'
    },
    {
      id: 1,
      email: 'test@gmail.com',
      content: 'This is the second form content.'
    },
    {
      id: 1,
      email: 'rterry@live.com',
      content: 'This is the third form content.'
    }
  ]
  res.status(200).json({
    message: 'Posts fetched successfully',
    submissions: submissions
  });
});

module.exports = app;
