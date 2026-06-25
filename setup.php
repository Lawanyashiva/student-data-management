<?php
/**
 * Configuration and Setup Helper
 * Run this file once to verify all requirements are met
 */

echo "<!DOCTYPE html>
<html>
<head>
    <title>Setup Verification</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; }
        .check { padding: 10px; margin: 10px 0; border-left: 4px solid #ddd; }
        .success { background: #d4edda; border-color: #28a745; color: #155724; }
        .error { background: #f8d7da; border-color: #dc3545; color: #721c24; }
        .warning { background: #fff3cd; border-color: #ffc107; color: #856404; }
        h1 { color: #333; }
        h2 { color: #666; margin-top: 20px; }
        code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>✅ Programming Assignments - Setup Verification</h1>";

// Check PHP Version
echo "<h2>System Requirements</h2>";
$phpVersion = phpversion();
$checkPhp = version_compare($phpVersion, '7.0.0', '>=');
echo "<div class='check " . ($checkPhp ? 'success' : 'error') . "'>
    <strong>PHP Version:</strong> " . $phpVersion . " 
    " . ($checkPhp ? '✓ Compatible' : '✗ Needs PHP 7.0+') . "
</div>";

// Check MySQL
$checkMysql = extension_loaded('mysqli');
echo "<div class='check " . ($checkMysql ? 'success' : 'error') . "'>
    <strong>MySQL Extension:</strong> 
    " . ($checkMysql ? '✓ Installed' : '✗ Not Found') . "
</div>";

// Check File Permissions
echo "<h2>File Structure</h2>";
$requiredFiles = [
    'index.php' => 'Main Dashboard',
    'assignment1.php' => 'Student Data Management',
    'assignment2.php' => 'Todo List',
    'assignment3.php' => 'String Replacement',
    'assignment4.php' => 'Days Between Dates',
    'assignment5.php' => 'HTML Find & Replace',
    'assignment6.php' => 'Triplet Sum',
    'public/css/style.css' => 'Global Styles',
    'public/js/assignment1.js' => 'Assignment 1 JS',
    'app/Http/Controllers/StudentApi.php' => 'Student API',
    'app/Http/Models/Database.php' => 'Database Config'
];

$allFilesOk = true;
echo "<table>
    <tr>
        <th>File</th>
        <th>Description</th>
        <th>Status</th>
    </tr>";

foreach ($requiredFiles as $file => $desc) {
    $exists = file_exists($file);
    $allFilesOk = $allFilesOk && $exists;
    $status = $exists ? '✓ OK' : '✗ Missing';
    $class = $exists ? 'success' : 'error';
    echo "<tr>
        <td><code>$file</code></td>
        <td>$desc</td>
        <td class='$class'>$status</td>
    </tr>";
}
echo "</table>";

// Quick Links
echo "<h2>🚀 Quick Access Links</h2>";
echo "<div style='background: #d1ecf1; padding: 20px; border-radius: 5px; border-left: 4px solid #0c5460;'>";
echo "<p><strong>Access the applications:</strong></p>";
echo "<table>";
echo "<tr><td width='50%'><a href='index.php'>📊 Dashboard</a></td><td><a href='assignment1.php'>👥 Student Management</a></td></tr>";
echo "<tr><td><a href='assignment2.php'>✅ Todo List</a></td><td><a href='assignment3.php'>🔄 String Replacement</a></td></tr>";
echo "<tr><td><a href='assignment4.php'>📅 Days Calculator</a></td><td><a href='assignment5.php'>📝 HTML Find & Replace</a></td></tr>";
echo "<tr><td><a href='assignment6.php'>🔢 Triplet Sum</a></td><td></td></tr>";
echo "</table>";
echo "</div>";

// Database Status
echo "<h2>Database Setup</h2>";
if ($checkMysql) {
    require_once 'app/Http/Models/Database.php';
    Database::createDatabase();
    echo "<div class='check success'>
        <strong>✓ Database Auto-Setup Complete</strong><br>
        Database <code>student_management</code> created successfully!
    </div>";
} else {
    echo "<div class='check error'>
        <strong>✗ MySQL Not Available</strong><br>
        Please ensure MySQL extension is loaded in php.ini
    </div>";
}

// Final Status
echo "<h2>Setup Status</h2>";
$allOk = $checkPhp && $checkMysql && $allFilesOk;
if ($allOk) {
    echo "<div class='check success'>
        <strong>✅ All Systems Go!</strong><br>
        You can now access all assignments through the dashboard.
    </div>";
} else {
    echo "<div class='check error'>
        <strong>⚠️ Please fix issues above before proceeding</strong><br>
        Check the error messages and ensure all requirements are met.
    </div>";
}

echo "<hr>";
echo "<p style='color: #666;'><strong>Need Help?</strong> Refer to README.md for detailed documentation.</p>";
echo "</div></body></html>";
?>
