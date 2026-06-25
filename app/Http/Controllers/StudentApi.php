<?php
// API Endpoint for Student Management
require_once __DIR__ . '/../../Models/Database.php';

header('Content-Type: application/json');

$action = $_GET['action'] ?? $_POST['action'] ?? '';

$database = new Database();
$conn = $database->connect();

switch ($action) {
    case 'add':
        addStudent($conn);
        break;
    case 'getAll':
        getAllStudents($conn);
        break;
    case 'delete':
        deleteStudent($conn);
        break;
    case 'update':
        updateStudent($conn);
        break;
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
}

function addStudent($conn) {
    // Validation
    $errors = [];
    
    if (empty($_POST['name'])) {
        $errors[] = 'Name is mandatory';
    }
    if (empty($_POST['standard'])) {
        $errors[] = 'Standard is mandatory';
    }
    if (empty($_POST['date_of_birth'])) {
        $errors[] = 'Date of birth is mandatory';
    }
    if (empty($_POST['father_mobile']) || !preg_match('/^\d{10}$/', $_POST['father_mobile'])) {
        $errors[] = 'Mobile number must be 10 digits';
    }
    if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is mandatory';
    }
    
    if (!empty($errors)) {
        echo json_encode(['success' => false, 'errors' => $errors]);
        return;
    }

    // Calculate age
    $dob = new DateTime($_POST['date_of_birth']);
    $today = new DateTime();
    $age = $today->diff($dob)->y;

    $name = $conn->real_escape_string($_POST['name']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $standard = $conn->real_escape_string($_POST['standard']);
    $dob_str = $conn->real_escape_string($_POST['date_of_birth']);
    $father_name = $conn->real_escape_string($_POST['father_name']);
    $father_mobile = $conn->real_escape_string($_POST['father_mobile']);
    $email = $conn->real_escape_string($_POST['email']);

    $sql = "INSERT INTO students (name, gender, standard, date_of_birth, age, father_name, father_mobile, email) 
            VALUES ('$name', '$gender', '$standard', '$dob_str', $age, '$father_name', '$father_mobile', '$email')";

    if ($conn->query($sql)) {
        echo json_encode(['success' => true, 'message' => 'Student added successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error adding student: ' . $conn->error]);
    }
}

function getAllStudents($conn) {
    $sql = "SELECT * FROM students ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $students = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
    }

    echo json_encode(['success' => true, 'data' => $students]);
}

function deleteStudent($conn) {
    if (empty($_POST['id'])) {
        echo json_encode(['success' => false, 'message' => 'Student ID is required']);
        return;
    }

    $id = (int)$_POST['id'];
    $sql = "DELETE FROM students WHERE id = $id";

    if ($conn->query($sql)) {
        echo json_encode(['success' => true, 'message' => 'Student deleted successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error deleting student']);
    }
}

function updateStudent($conn) {
    $id = (int)$_POST['id'];
    $name = $conn->real_escape_string($_POST['name']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $standard = $conn->real_escape_string($_POST['standard']);
    $dob = $conn->real_escape_string($_POST['date_of_birth']);
    $father_name = $conn->real_escape_string($_POST['father_name']);
    $father_mobile = $conn->real_escape_string($_POST['father_mobile']);
    $email = $conn->real_escape_string($_POST['email']);

    // Calculate age
    $dob_obj = new DateTime($dob);
    $today = new DateTime();
    $age = $today->diff($dob_obj)->y;

    $sql = "UPDATE students SET name='$name', gender='$gender', standard='$standard', 
            date_of_birth='$dob', age=$age, father_name='$father_name', 
            father_mobile='$father_mobile', email='$email' WHERE id=$id";

    if ($conn->query($sql)) {
        echo json_encode(['success' => true, 'message' => 'Student updated successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error updating student']);
    }
}

$conn->close();
?>
