import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="header">
            <ThemeToggle />

            <h1>Kanban Task Board</h1>
            <p>Organize your tasks with React</p>
        </header>
    );
}

export default Header;