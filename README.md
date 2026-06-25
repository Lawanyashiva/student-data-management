# 🎓 Programming Assignments Project

A complete web-based solution implementing **6 programming assignments** using **HTML, CSS, JavaScript, PHP, and MySQL**.

## 📋 Project Overview

This project contains all 6 assignments with complete implementations, validations, and user-friendly interfaces.

### **Assignment 1: Student Data Management System**
- 👥 Add, view, edit, and delete student information
- 📊 Display students in table format
- ✅ Form validations (name, standard, DOB, mobile, email, age auto-calculate)
- 🔄 AJAX-based data operations
- 💾 MySQL database integration

**Technologies:** HTML, JavaScript, PHP, MySQL, AJAX

### **Assignment 2: Todo List Application**
- ✅ Add, edit, delete, and complete todos
- 📋 Real-time statistics (total, completed, pending)
- 💾 Data persistence using LocalStorage
- 🎯 Array-based data management (no database)
- 📊 Task progress tracking

**Technologies:** HTML, CSS, JavaScript (No Database)

### **Assignment 3: String Replacement Tool**
- 🔄 Replace placeholders in text (@Name@, @email@, @mobile@, @designation@)
- 📋 Display replacement summary
- 📋 Copy results to clipboard
- 📥 Download results as text file

**Technologies:** HTML, CSS, JavaScript

### **Assignment 4: Days Between Dates Calculator**
- 📅 Calculate days between any two dates
- 🔢 Display in numeric format (e.g., 734)
- 📝 Convert to words (e.g., Seven Hundred Thirty Four)
- 📊 Additional statistics (weeks, months, years)

**Technologies:** HTML, CSS, JavaScript

### **Assignment 5: HTML Find & Replace**
- 📝 Add multiple find/replace pairs
- 🔍 Replace text in HTML content
- 📊 View original and replaced HTML
- 📥 Download modified HTML
- 🔗 Supports complex HTML structures

**Technologies:** HTML, CSS, JavaScript, PHP

### **Assignment 6: Triplet Sum Finder**
- 🔢 Find triplets in array with target sum
- 🎯 Three-pointer algorithm implementation
- 📊 Display all found triplets
- ✅ Validation and error handling

**Technologies:** HTML, CSS, JavaScript, PHP

---

## 🚀 Quick Start

### Prerequisites
- XAMPP (Apache, PHP, MySQL)
- Modern web browser
- PHP 7.0+
- MySQL 5.7+

### Installation Steps

1. **Clone/Download the project:**
   ```bash
   cd c:\xampp\htdocs\student-data-management
   ```

2. **Ensure XAMPP is running:**
   - Start Apache
   - Start MySQL

3. **Access the dashboard:**
   - Open browser: `http://localhost/student-data-management/`

### Database Setup (For Assignment 1)
The database is automatically created on first access to Assignment 1. The system creates:
- Database: `student_management`
- Table: `students` with all required fields

---

## 🔗 Direct Links

| Assignment | URL |
|-----------|-----|
| Dashboard | `http://localhost/student-data-management/` |
| Assignment 1 - Student Data Management | `http://localhost/student-data-management/assignment1.php` |
| Assignment 2 - Todo List | `http://localhost/student-data-management/assignment2.php` |
| Assignment 3 - String Replacement | `http://localhost/student-data-management/assignment3.php` |
| Assignment 4 - Days Calculator | `http://localhost/student-data-management/assignment4.php` |
| Assignment 5 - HTML Find & Replace | `http://localhost/student-data-management/assignment5.php` |
| Assignment 6 - Triplet Sum | `http://localhost/student-data-management/assignment6.php` |

---

## 📁 Project Structure

```
student-data-management/
├── index.php                          # Dashboard
├── assignment1.php                    # Student Management
├── assignment2.php                    # Todo List
├── assignment3.php                    # String Replacement
├── assignment4.php                    # Days Between Dates
├── assignment5.php                    # HTML Find & Replace
├── assignment6.php                    # Triplet Sum
├── README.md                          # This file
├── public/
│   ├── css/
│   │   └── style.css                 # Global styles for all pages
│   └── js/
│       ├── assignment1.js            # Student Management JS
│       ├── assignment2.js            # Todo List JS
│       ├── assignment3.js            # String Replacement JS
│       ├── assignment4.js            # Days Calculator JS
│       ├── assignment5.js            # HTML Find & Replace JS
│       └── assignment6.js            # Triplet Sum JS
└── app/
    └── Http/
        ├── Controllers/
        │   ├── StudentApi.php        # Student Management API
        │   ├── HtmlReplacerApi.php   # HTML Replace API
        │   └── TripletSumApi.php     # Triplet Sum API
        └── Models/
            └── Database.php          # Database Configuration
```

---

## ✨ Features

### General Features
- ✅ Responsive design for desktop and mobile
- ✅ Modern UI with gradient backgrounds
- ✅ Input validation and error handling
- ✅ Real-time feedback
- ✅ Copy to clipboard functionality
- ✅ Download results as files

### Assignment-Specific Features

#### Assignment 1
- 📋 Real-time form validation
- 🔄 AJAX-based operations (no page reload)
- 👁️ Dynamic table updates
- 🔧 Edit and delete functionality
- 📊 Auto-calculate age from DOB
- 🎯 10-digit mobile validation
- ✉️ Email format validation

#### Assignment 2
- 💾 Persistent storage using LocalStorage
- ✅ Mark tasks as complete/incomplete
- ✏️ Edit todo items inline
- 🗑️ Delete with confirmation
- 📊 Real-time statistics
- 🎨 Visual distinction for completed items
- 🧹 Clear all/completed todos

#### Assignment 3
- 🔄 Multiple placeholder replacement
- 📋 Replacement summary table
- 📋 Copy/download results
- 🎯 Sample data loader

#### Assignment 4
- 📅 Date picker interface
- 🔢 Numeric day calculation
- 📝 Number to words conversion
- 📊 Additional statistics
- 🎯 Automatic date order detection

#### Assignment 5
- ➕ Add multiple find/replace pairs
- 🗑️ Remove individual pairs
- 📊 Replacement count tracking
- 🎯 Sample HTML loader

#### Assignment 6
- 🔢 Array input support
- 🎯 Triplet verification
- 📊 All triplets displayed
- ✅ Duplicate removal

---

## 🛠️ Validations Implemented

### Assignment 1 - Student Data Management
- ✅ Name: Mandatory, non-empty
- ✅ Standard: Mandatory, non-empty
- ✅ Date of Birth: Mandatory, valid date
- ✅ Mobile: Mandatory, exactly 10 digits, numeric only
- ✅ Email: Mandatory, valid email format
- ✅ Age: Auto-calculated from DOB
- ✅ Father's Name: Mandatory
- ✅ Gender: Mandatory selection

### Assignment 3 - String Replacement
- ✅ All fields mandatory
- ✅ Placeholder detection
- ✅ Safe HTML escaping

### Assignment 4 - Days Calculator
- ✅ Both dates required
- ✅ Valid date format
- ✅ Automatic date order handling

### Assignment 5 - HTML Find & Replace
- ✅ HTML content required
- ✅ At least one find/replace pair
- ✅ HTML preservation

### Assignment 6 - Triplet Sum
- ✅ Array with minimum 3 elements
- ✅ Valid numeric values
- ✅ Target value provided
- ✅ Duplicate triplet removal

---

## 💡 Usage Examples

### Assignment 1
1. Fill in student details
2. Click "Add Student"
3. View all students in the table
4. Edit or delete as needed

### Assignment 2
1. Enter todo text
2. Click "Add Todo"
3. Check to mark complete
4. Click Edit or Delete as needed

### Assignment 3
1. Enter Name, Email, Mobile, Designation
2. Enter text with placeholders
3. Click "Replace Placeholders"
4. View and copy results

### Assignment 4
1. Select two dates
2. Click "Calculate Days"
3. View numeric and word format
4. See additional statistics

### Assignment 5
1. Add find/replace pairs
2. Paste HTML content
3. Click "Perform Replacement"
4. Download modified HTML

### Assignment 6
1. Enter array numbers (comma-separated)
2. Enter target sum
3. Click "Find Triplets"
4. View all triplets with sum

---

## 🔐 Security Features

- ✅ SQL Injection prevention (prepared statements ready)
- ✅ XSS prevention (HTML escaping)
- ✅ Input validation (client and server-side)
- ✅ Type checking
- ✅ Error handling without exposing system info

---

## 📊 Database Schema (Assignment 1)

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    standard VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    age INT NOT NULL,
    father_name VARCHAR(100) NOT NULL,
    father_mobile VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🎨 UI/UX Features

- **Color Scheme**: Modern gradient (Purple to Pink)
- **Responsive Design**: Works on desktop, tablet, mobile
- **Accessibility**: Proper labels and alt text
- **Visual Feedback**: Loading states, success/error messages
- **Typography**: Clear hierarchy and readability
- **Animations**: Smooth transitions and hover effects

---

## 🐛 Troubleshooting

### Database Connection Error
- Ensure MySQL is running
- Check database credentials in `app/Http/Models/Database.php`
- Verify XAMPP MySQL service is active

### AJAX Not Working
- Check browser console for errors
- Verify PHP is running on localhost
- Check file paths in JavaScript

### Styling Issues
- Clear browser cache (Ctrl+Shift+Del)
- Verify CSS file path is correct
- Check browser developer tools for CSS errors

### LocalStorage Not Working (Assignment 2)
- Ensure LocalStorage is enabled in browser
- Check privacy settings
- Try clearing browser data

---

## 📝 Notes

- All assignments include sample data for testing
- Forms include validation feedback
- All data operations are atomic
- No sensitive data is logged
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)

---

## 👨‍💻 Development Notes

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7.0+
- **Database**: MySQL 5.7+
- **Architecture**: Client-Server (No framework)

### Key Algorithms
- Assignment 4: Number to words conversion
- Assignment 6: Three-pointer array algorithm

---

## 📞 Support

For issues or questions:
1. Check the README thoroughly
2. Review browser console for errors
3. Verify all prerequisites are installed
4. Check file permissions
5. Ensure proper database setup

---

## 📄 License

This project is for educational purposes.

---

## ✅ Checklist

All 6 assignments are **COMPLETE** and **READY TO USE**:

- [x] Assignment 1: Student Data Management (HTML, JS, PHP, MySQL)
- [x] Assignment 2: Todo List (JS with Arrays)
- [x] Assignment 3: String Replacement
- [x] Assignment 4: Days Between Dates
- [x] Assignment 5: HTML Find & Replace
- [x] Assignment 6: Triplet Sum Finder

**Access now at: http://localhost/student-data-management/**