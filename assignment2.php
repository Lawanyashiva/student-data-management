<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 2 - Todo List Application</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container">
        <a href="index.php" class="back-link">← Back to Dashboard</a>

        <header>
            <h1>✅ Todo List Application</h1>
            <p>Manage your tasks with Edit, Delete, and Complete actions</p>
        </header>

        <div class="form-container">
            <h2>Add a New Todo</h2>
            <form id="todoForm">
                <div class="todo-input-group">
                    <input type="text" id="todoInput" placeholder="What needs to be done?" required>
                    <button type="submit">Add Todo</button>
                </div>
            </form>
        </div>

        <div id="todoStats"></div>

        <div class="output-section">
            <h2>📝 Your Todo List</h2>
            <div id="todoList" class="todo-list">
                <!-- Todos will be rendered here -->
            </div>

            <div style="margin-top: 20px; display: flex; gap: 10px;">
                <button onclick="todoApp.clearCompleted()" style="background: #4facfe;">Clear Completed</button>
                <button onclick="todoApp.clearAll()" style="background: #fa709a;">Clear All</button>
            </div>
        </div>

        <div class="info-message" style="margin-top: 20px;">
            <strong>Features:</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>✓ Add new todos</li>
                <li>✓ Mark todos as complete/incomplete</li>
                <li>✓ Edit existing todos</li>
                <li>✓ Delete todos</li>
                <li>✓ Data persists in LocalStorage</li>
                <li>✓ All data maintained in JavaScript array</li>
                <li>✓ Real-time statistics</li>
            </ul>
        </div>

        <footer>
            <p>Assignment 2: Todo List Application | Array-based data management with LocalStorage persistence</p>
        </footer>
    </div>

    <script src="public/js/assignment2.js"></script>
</body>
</html>
