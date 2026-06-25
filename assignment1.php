<?php
require_once 'app/Http/Models/Database.php';
Database::createDatabase();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 1 - Student Data Management</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container">
        <a href="index.php" class="back-link">← Back to Dashboard</a>

        <header>
            <h1>👥 Student Data Management System</h1>
            <p>Add, View, Edit and Delete Student Information</p>
        </header>

        <div id="errorMessages"></div>

        <div class="form-container">
            <h2>Add New Student</h2>
            <form id="studentForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Student Name *</label>
                        <input type="text" id="name" name="name" placeholder="Enter student name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Enter email address" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="gender">Gender *</label>
                        <select id="gender" name="gender" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="standard">Standard/Class *</label>
                        <input type="text" id="standard" name="standard" placeholder="e.g., 10th, 12th" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="date_of_birth">Date of Birth *</label>
                        <input type="date" id="date_of_birth" name="date_of_birth" required>
                    </div>
                    <div class="form-group">
                        <label for="father_name">Father's Name *</label>
                        <input type="text" id="father_name" name="father_name" placeholder="Enter father's name" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="father_mobile">Father's Mobile Number (10 digits) *</label>
                        <input type="tel" id="father_mobile" name="father_mobile" placeholder="Enter 10-digit mobile number" maxlength="10" required>
                    </div>
                </div>

                <button type="submit">Add Student</button>
            </form>
        </div>

        <div class="output-section">
            <h2>📊 Students List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Standard</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Father Name</th>
                        <th>Father Mobile</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="studentsTableBody">
                    <tr>
                        <td colspan="10" style="text-align: center; color: #999;">Loading...</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <footer>
            <p>Assignment 1: Student Data Management | Using AJAX for dynamic data operations</p>
        </footer>
    </div>

    <script src="public/js/assignment1.js"></script>
</body>
</html>
