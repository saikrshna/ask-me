# Ask Me

An AI-powered Q&A application built with React, Node.js, and modern AI technologies.

## Features

- 🤖 AI-powered question answering
- ⚡ Fast and responsive React frontend
- 🛠️ Robust Node.js backend
- 💬 Real-time conversation support
- 🎨 Clean and intuitive user interface

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **AI**: Integrated AI/LLM API
- **Database**: [Specify your database]
- **Styling**: [CSS/Tailwind/etc]

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saikrshna/ask-me.git
   cd ask-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   AI_API_KEY=your_api_key_here
   ```

4. **Run the application**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Project Structure

```
ask-me/
├── client/          # React frontend
├── server/          # Node.js backend
├── public/          # Static files
└── README.md        # This file
```

## Usage

1. Open the application in your browser
2. Ask any question in the input field
3. Get AI-powered answers instantly
4. View your conversation history

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/ask` - Submit a question
- `GET /api/history` - Get conversation history

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on [GitHub](https://github.com/saikrshna/ask-me/issues).