<!-- 
GitHub Description:
🔗 Zaplet – Smart deep linking with device detection and graceful fallback to web, built in React.
-->

# 🔗 Zaplet

Zaplet is a lightweight, privacy-friendly smart link redirection tool that deep-links users directly into mobile apps when available — or gracefully falls back to the web version.

Whether you're sharing Instagram links, promoting content, or building a seamless mobile experience, Zaplet ensures users land exactly where they should.

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/f6336780-e907-4108-bd13-f2880cdf5dbf)

![image](https://github.com/user-attachments/assets/cb441c9d-65ee-4ac8-825d-a6d641bec93a)

![image](https://github.com/user-attachments/assets/15f9f33d-cbf8-4834-8593-970d7c606fdc)

![image](https://github.com/user-attachments/assets/9b90ceeb-f761-4bcb-987d-d022080b8fae)


> ℹ️ Add your actual screenshots in a `screenshots/` folder at the root of your project.

---

## 🚀 Features

- 🔍 Detects device type: Android, iOS, or Desktop
- ⚡ Opens links directly in supported mobile apps (e.g. Instagram)
- 🌐 Automatically falls back to web URLs if app is not installed
- 🧠 Uses `localStorage` for simple key-based link retrieval
- 🎨 Styled with Tailwind CSS for a clean, responsive UI
- ⚛️ Built using React + React Router v6

---

## 📦 Tech Stack

- React
- React Router
- Tailwind CSS
- JavaScript (ES6+)

---

## 🔧 How It Works

1. A link is saved in `localStorage` using a unique key (e.g., `abc123`).
2. The user visits `/go/abc123`.
3. Zaplet:
   - Detects the user’s device
   - Tries to open the content in the native mobile app
   - Falls back to the original web URL after 2 seconds if needed

---

## 🧪 Example

```js
localStorage.setItem('insta123', 'https://instagram.com/somepage');
