// Assignment 2: Todo List Application - Array-based operations

class TodoApp {
    constructor() {
        this.todos = [];
        this.todoIdCounter = 1;
        this.init();
    }

    init() {
        this.loadTodos();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        const form = document.getElementById('todoForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleAddTodo(e));
        }
    }

    handleAddTodo(e) {
        e.preventDefault();

        const input = document.getElementById('todoInput');
        const todoText = input.value.trim();

        if (todoText === '') {
            alert('Please enter a todo');
            return;
        }

        const todo = {
            id: this.todoIdCounter++,
            text: todoText,
            completed: false,
            createdAt: new Date()
        };

        this.todos.push(todo);
        input.value = '';
        this.saveTodos();
        this.render();
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this todo?')) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.saveTodos();
            this.render();
        }
    }

    toggleComplete(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    editTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            const newText = prompt('Edit todo:', todo.text);
            if (newText !== null && newText.trim() !== '') {
                todo.text = newText.trim();
                this.saveTodos();
                this.render();
            }
        }
    }

    saveTodos() {
        // Save to localStorage for persistence
        localStorage.setItem('todos', JSON.stringify(this.todos));
        localStorage.setItem('todoIdCounter', this.todoIdCounter);
    }

    loadTodos() {
        const saved = localStorage.getItem('todos');
        const savedCounter = localStorage.getItem('todoIdCounter');
        if (saved) {
            this.todos = JSON.parse(saved);
        }
        if (savedCounter) {
            this.todoIdCounter = parseInt(savedCounter) + 1;
        }
    }

    render() {
        const container = document.getElementById('todoList');
        if (!container) return;

        if (this.todos.length === 0) {
            container.innerHTML = '<div class="info-message">No todos yet. Add one to get started!</div>';
            this.updateStats();
            return;
        }

        let html = '';
        this.todos.forEach(todo => {
            const completedClass = todo.completed ? 'completed' : '';
            html += `
                <div class="todo-item ${completedClass}">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                           onchange="todoApp.toggleComplete(${todo.id})" style="width: 20px; height: 20px;">
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <div class="todo-actions">
                        <button class="todo-btn" style="background: #4facfe;" 
                                onclick="todoApp.editTodo(${todo.id})">Edit</button>
                        <button class="todo-btn" style="background: #fa709a;" 
                                onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
        this.updateStats();
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;

        const statsDiv = document.getElementById('todoStats');
        if (statsDiv) {
            statsDiv.innerHTML = `
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 20px;">
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 5px; text-align: center;">
                        <div style="font-size: 2em; font-weight: bold; color: #0c5460;">${total}</div>
                        <div style="color: #0c5460;">Total Todos</div>
                    </div>
                    <div style="background: #d4edda; padding: 15px; border-radius: 5px; text-align: center;">
                        <div style="font-size: 2em; font-weight: bold; color: #155724;">${completed}</div>
                        <div style="color: #155724;">Completed</div>
                    </div>
                    <div style="background: #fff3cd; padding: 15px; border-radius: 5px; text-align: center;">
                        <div style="font-size: 2em; font-weight: bold; color: #856404;">${pending}</div>
                        <div style="color: #856404;">Pending</div>
                    </div>
                </div>
            `;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    clearCompleted() {
        if (confirm('Are you sure you want to clear all completed todos?')) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveTodos();
            this.render();
        }
    }

    clearAll() {
        if (confirm('Are you sure you want to delete all todos?')) {
            this.todos = [];
            this.todoIdCounter = 1;
            this.saveTodos();
            this.render();
        }
    }
}

// Initialize when DOM is ready
let todoApp;
document.addEventListener('DOMContentLoaded', function () {
    todoApp = new TodoApp();
});
