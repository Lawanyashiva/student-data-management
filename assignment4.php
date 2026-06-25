<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 4 - Days Between Dates</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container">
        <a href="index.php" class="back-link">← Back to Dashboard</a>

        <header>
            <h1>📅 Days Between Two Dates Calculator</h1>
            <p>Calculate the number of days between any two dates in numeric and word format</p>
        </header>

        <div class="form-container">
            <h2>Select Dates</h2>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="date1">Start Date *</label>
                    <input type="date" id="date1" required>
                </div>
                <div class="form-group">
                    <label for="date2">End Date *</label>
                    <input type="date" id="date2" required>
                </div>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="calculateDaysBetween()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">Calculate Days</button>
                <button onclick="loadSampleDates()" style="background: #4facfe;">Load Sample Dates</button>
                <button onclick="clearDatesForm()" style="background: #fa709a;">Clear</button>
            </div>
        </div>

        <div class="output-section" id="daysOutput">
            <!-- Result will be displayed here -->
        </div>

        <div class="info-message" style="margin-top: 20px;">
            <strong>Features:</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>📊 Calculate days between any two dates</li>
                <li>🔢 Display result in numeric format (e.g., 734)</li>
                <li>📝 Display result in word format (e.g., Seven Hundred Thirty Four)</li>
                <li>📈 Additional statistics (weeks, months, years)</li>
                <li>📋 Copy results to clipboard</li>
                <li>✅ Automatic date order detection</li>
            </ul>
        </div>

        <div class="info-message" style="margin-top: 15px; background: #fff3cd; border-left-color: #ffc107;">
            <strong>Sample Input:</strong>
            <p>Date1 = 26/12/2022, Date2 = 29/12/2024</p>
            <strong>Expected Output:</strong>
            <p>734 Days<br>Seven Hundred Thirty Four Days</p>
        </div>

        <footer>
            <p>Assignment 4: Days Between Dates | Numeric to Words conversion included</p>
        </footer>
    </div>

    <script src="public/js/assignment4.js"></script>
</body>
</html>
