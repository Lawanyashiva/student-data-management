<?php
// Database Connection Configuration
class Database {
    private $host = 'localhost';
    private $db_name = 'student_management';
    private $db_user = 'root';
    private $db_pass = '';
    private $conn;

    public function connect() {
        $this->conn = new mysqli($this->host, $this->db_user, $this->db_pass, $this->db_name);

        if ($this->conn->connect_error) {
            die('Connection Error: ' . $this->conn->connect_error);
        }

        return $this->conn;
    }

    public static function createDatabase() {
        $conn = new mysqli('localhost', 'root', '');
        
        // Create database if not exists
        $sql = "CREATE DATABASE IF NOT EXISTS student_management";
        $conn->query($sql);
        
        // Use the database
        $conn->select_db('student_management');
        
        // Create table if not exists
        $tableSQL = "CREATE TABLE IF NOT EXISTS students (
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
        )";
        
        $conn->query($tableSQL);
        $conn->close();
    }
}

// Initialize database
Database::createDatabase();
?>
