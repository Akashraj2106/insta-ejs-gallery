# 📸 insta-ejs-gallery



A visually appealing insta-ejs-gallery built using HTML, CSS, and optionally EJS for dynamic rendering. Supports dark mode, profile pictures, post galleries, and more!

---

## 🔥 Features

- Clean and responsive UI like Instagram
- Dark mode toggle
- Profile picture and user info display
- Post gallery with like and comment counts
- 404 error page with custom styling
- No JavaScript required (except toggle if enabled)

---

## 📷 Screenshots

### 🔆 Light Mode

![Light Mode](screenshots/light-mode.png)

### 🌙 Dark Mode

![Dark Mode](screenshots/dark-mode.png)


---

## 🎥 Demo Video

![You can download demo video from here](screenshots/video.mp4)



---

## 🛠️ Technologies Used

- HTML5
- CSS3
- EJS (for dynamic rendering)
- Node.js (for routing)
- Express.js

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/insta-ejs-gallery.git
cd insta-ejs-gallery

# Install dependencies
npm install

# Run the app
node app.js

# Visit in browser
http://localhost:8080/home/ig/username
📁 Folder Structure
arduino
Copy
Edit
insta-ejs-gallery/│
├── public/
│   ├── images/
│   └── styles/
│
├── views/
│   ├── home.ejs
│   └── error.ejs
│
├── screenshots/
│   ├── light-mode.png
│   └── dark-mode.png
│
├── app.js
├── data.json
└── README.md
❗ Error Page (404)
When a user profile is not found, a friendly error message is shown using a custom error.ejs pages.

