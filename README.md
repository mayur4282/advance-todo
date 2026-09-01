# ✨ Advance Todo React App

A modern, feature-rich **Task Management Web Application** built with **React 19**, **Vite**, and custom **Glassmorphism CSS**. Designed to deliver a premium user experience with real-time task progress tracking, date-time deadlines, input validation, and automatic creation timestamps.

---

## 🌟 Key Features

- 🎨 **Modern Glassmorphic UI**: High-end frosted glass aesthetic (`backdrop-filter: blur`), dark mode theme, vibrant gradients, and smooth CSS micro-animations.
- ⏱️ **Date & Time Deadlines**: Set precise completion deadlines using native date-time pickers (`datetime-local`).
- 🚨 **Overdue & Status Indicators**: Real-time visual status badges:
  - 📅 **Created Timestamp**: Automatically records when each task was created.
  - ⏰ **Due Badge**: Displays upcoming task deadlines.
  - 🚨 **Overdue Alert**: Highlights tasks that pass their scheduled deadline.
  - ✓ **Completed Status**: Displays green completion badge with strikethrough transition.
- ⚠️ **Smart Input Validation**: Prevents adding empty or whitespace-only tasks with animated alert feedback (`@keyframes shake`).
- 📊 **Task Progress Counter**: Real-time badge tracking completed vs. total tasks.
- ⌨️ **Keyboard Support**: Full `<form>` support allowing task addition via the `Enter` key.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile displays.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | UI Library & State Management |
| **Vite 7** | Next-Generation Frontend Tooling & Fast HMR |
| **CSS3** | Glassmorphism Design, Keyframe Animations & Flexbox Layout |
| **Google Fonts** | *Outfit* Typography |
| **UUID** | Unique Task Identifier Generation |

---

## 📁 Project Structure

```text
Todo/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css           # Glassmorphism design system & animation keyframes
│   ├── App.jsx           # Root Application Component
│   ├── index.css         # Global typography & radial background gradient
│   ├── main.jsx          # React DOM entry point
│   └── TodoList.jsx      # Core Todo logic, validation & timestamp handlers
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayur4282/advance-todo.git
   cd advance-todo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` (or the port shown in terminal).

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mayur4282/advance-todo/issues).

---

## 📜 License

This project is licensed under the MIT License.

