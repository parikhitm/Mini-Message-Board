# Mini Message Board

A simple web-based message board application built with Express.js and EJS templating engine. Users can post messages, view all messages, and see individual message details.

## Features

- View all messages on the home page
- Create new messages with user name and message text
- View detailed information for each message
- Responsive design with clean UI
- Real-time timestamp for each message

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- HTML/CSS
- JavaScript

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone <your-repository-url>
```

2. Navigate to the project directory
```bash
cd mini-message-board
```

3. Install dependencies
```bash
npm install
```

4. Start the server
```bash
node app.js
```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
mini-message-board/
├── app.js                 # Application entry point
├── routes/
│   └── index.js          # Route handlers
├── views/
│   ├── index.ejs         # Home page template
│   ├── form.ejs          # New message form template
│   └── message.ejs       # Message detail template
├── public/
│   └── stylesheets/
│       └── style.css     # Stylesheet
└── package.json          # Project dependencies
```

## API Routes

- `GET /` - Home page displaying all messages
- `GET /new` - Form to create a new message
- `POST /new` - Handle new message submission
- `GET /message/:id` - View specific message details