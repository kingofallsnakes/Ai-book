# 📚 AI Book Finder

An intelligent book recommendation web application powered by Google's Gemini AI.
Search for any topic, author, or genre and instantly get curated book suggestions with descriptions, ratings, and more.

---

## 🚀 Features

* 🔍 Smart AI-powered book search
* 📖 Detailed book recommendations (title, author, description)
* ⭐ Ratings and pricing insights
* 🌙 Dark / Light mode toggle
* ⚡ Fast and responsive UI
* 🎯 Real-time search experience

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* JavaScript (ES6+)
* CSS3

### AI Integration

* Google Gemini API (`@google/genai`)

---

## 📂 Project Structure

```
AI_Book_Search/
│
├── src/
│   ├── api.js          # Gemini API integration
│   ├── App.jsx         # Main UI logic
│   ├── App.css         # Styling
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
│
├── .env                # Environment variables (API key)
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kingofallsnakes/Ai-book.git
cd Ai-book
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

---

### 4. Run the application

```bash
npm run dev
```

---

## 🧠 How It Works

1. User enters a search query (e.g., "Machine Learning")
2. Request is sent to Gemini API
3. AI generates structured book recommendations
4. Data is parsed and displayed in UI

---

## ⚠️ Important Notes

* API key is exposed in frontend (not secure for production)
* For production use, implement a backend proxy server
* Ensure `.env` file is not committed to version control

---

## 📸 Screenshots

<img width="1901" height="911" alt="Image" src="https://github.com/user-attachments/assets/123b121a-6593-43ea-baf9-60cc7ea55401" />

---

## 🔮 Future Improvements

* ✅ Backend integration for secure API handling
* 📚 Book cover images (Google Books API integration)
* 🔎 Advanced filters (rating, price, genre)
* ❤️ Save favorite books feature
* 📱 Mobile optimization improvements

---

## 🧪 Example Search Queries

* "Artificial Intelligence"
* "Self Improvement"
* "Startup Business"
* "Data Science"

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pavan**
Aspiring Developer | AI Enthusiast

---

## ⭐ Acknowledgements

* Google Gemini AI
* React & Vite ecosystem

---

## 💡 Final Note

This project demonstrates how AI can enhance user experience by delivering intelligent and contextual recommendations in real-time.

---
