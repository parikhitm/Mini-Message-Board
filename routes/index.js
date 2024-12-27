const express = require('express');
const router = express.Router();

// Sample messages array
const messages = [
  { id: 1, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 2, text: "Hello World!", user: "Charles", added: new Date() }
];

// Index route
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// New message form route
router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

// Message Detail route
router.get('/message/:id', (rep, res) => {
  const messageId = parseInt(rep.params.id);
  const message = messages.find(m => m.id === messageId);

  if (message) {
    res.render('message', { title: 'Message Details', message });
  } else {
    res.redirect('/');
  }
});

// Handle new message submission
router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  const newId = messages.length + 1;
  messages.push({ id: newId, text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;