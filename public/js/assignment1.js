// Assignment 1: Student Data Management - AJAX Operations

document.addEventListener('DOMContentLoaded', function () {
    loadAllStudents();
    document.getElementById('studentForm').addEventListener('submit', handleAddStudent);
});

function handleAddStudent(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('studentForm'));

    // Calculate age
    const dob = new Date(formData.get('date_of_birth'));
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    formData.append('age', age);

    // Show validation in real-time
    const form = document.getElementById('studentForm');
    clearErrors();

    // Client-side validations
    let isValid = true;
    const errors = [];

    if (!formData.get('name').trim()) {
        errors.push('Name is mandatory');
        isValid = false;
    }
    if (!formData.get('standard').trim()) {
        errors.push('Standard is mandatory');
        isValid = false;
    }
    if (!formData.get('date_of_birth')) {
        errors.push('Date of birth is mandatory');
        isValid = false;
    }
    if (!formData.get('father_mobile') || !/^\d{10}$/.test(formData.get('father_mobile'))) {
        errors.push('Mobile number must be exactly 10 digits');
        isValid = false;
    }
    if (!formData.get('email') || !isValidEmail(formData.get('email'))) {
        errors.push('Valid email is mandatory');
        isValid = false;
    }

    if (!isValid) {
        showErrors(errors);
        return;
    }

    formData.append('action', 'add');

    // AJAX Request
    fetch('app/Http/Controllers/StudentApi.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccess('Student added successfully!');
                document.getElementById('studentForm').reset();
                loadAllStudents();
            } else {
                showErrors(data.errors || [data.message]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showErrors(['An error occurred while adding student']);
        });
}

function loadAllStudents() {
    fetch('app/Http/Controllers/StudentApi.php?action=getAll')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayStudentsTable(data.data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayStudentsTable(students) {
    const tbody = document.getElementById('studentsTableBody');
    tbody.innerHTML = '';

    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center; color: #999;">No students added yet</td></tr>';
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.standard}</td>
            <td>${student.date_of_birth}</td>
            <td>${student.age}</td>
            <td>${student.father_name}</td>
            <td>${student.father_mobile}</td>
            <td>${student.email}</td>
            <td>
                <button class="todo-btn" onclick="editStudent(${student.id})" style="background: #4facfe; margin-right: 5px;">Edit</button>
                <button class="todo-btn" onclick="deleteStudent(${student.id})" style="background: #fa709a;">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        const formData = new FormData();
        formData.append('action', 'delete');
        formData.append('id', id);

        fetch('app/Http/Controllers/StudentApi.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showSuccess('Student deleted successfully!');
                    loadAllStudents();
                } else {
                    showErrors([data.message]);
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

function editStudent(id) {
    alert('Edit functionality: You can modify the student details here. This is a placeholder for inline editing or modal form.');
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showErrors(errors) {
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '';
    errors.forEach(error => {
        const p = document.createElement('div');
        p.className = 'error-message';
        p.textContent = error;
        errorDiv.appendChild(p);
    });
}

function showSuccess(message) {
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = '';
    const p = document.createElement('div');
    p.className = 'success-message';
    p.textContent = message;
    errorDiv.appendChild(p);
}

function clearErrors() {
    document.getElementById('errorMessages').innerHTML = '';
}
