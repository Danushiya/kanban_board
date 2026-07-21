# Kanban Task Board

A simple and responsive **Kanban Task Board** built with **React** and **Vite**. This application helps users organize tasks across three stages: **To Do**, **In Progress**, and **Done**. Users can add, edit, delete, move tasks between columns, and switch between light and dark themes. All tasks and theme preferences are stored in the browser using **localStorage**.

---

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Move tasks between columns
- Light/Dark theme toggle
- Persistent data using localStorage
- Responsive design
- CSS Modules for component-level styling

---

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS Modules
- React Context API
- Custom Hooks
- localStorage

---

## Project Structure

```
src/
│
├── components/
│   ├── AddCardForm/
│   ├── Board/
│   ├── Card/
│   ├── Column/
│   └── Header/
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   ├── useLocalStorage.js
│   └── useTheme.js
│
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/kanban-task-board.git
```

2. Navigate to the project folder

```bash
cd kanban-task-board
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the URL shown in your terminal (usually `http://localhost:5173`).

---

## How to Use

- Add a new task using the form.
- Choose the column where the task should appear.
- Edit or delete tasks as needed.
- Move tasks between **To Do**, **In Progress**, and **Done**.
- Toggle between **Light Mode** and **Dark Mode**.
- Refresh the page to see that tasks and theme are preserved.

---

## React Concepts Used

- Functional Components
- Props
- State (`useState`)
- Context API
- Custom Hooks
- Controlled Components
- Conditional Rendering
- Event Handling
- List Rendering (`map`)
- Immutable State Updates
- CSS Modules

---

## Future Improvements

- Drag and Drop functionality
- Due dates for tasks
- Task priorities
- Search and filter tasks
- Category labels
- Backend integration
- User authentication

---

## Screenshots

### ☀️ Light Mode

![Kanban Task Board - Light Mode](https://raw.githubusercontent.com/Danushiya/kanban_board/main/src/assets/light_mode.png)

### 🌙 Dark Mode

![Kanban Task Board - Dark Mode](https://raw.githubusercontent.com/Danushiya/kanban_board/main/src/assets/dark_mode.png)

---

## Author

**Danushiya**

GitHub: https://github.com/Danushiya

LinkedIn: https://www.linkedin.com/in/danushiya

Portfolio: https://danushiya.site/

---

## License

This project is created for learning purposes.
