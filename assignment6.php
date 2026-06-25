<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 6 - Triplet Sum Finder</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container">
        <a href="index.php" class="back-link">← Back to Dashboard</a>

        <header>
            <h1>🔢 Triplet Sum Finder</h1>
            <p>Find all triplets in an array whose sum equals a target value</p>
        </header>

        <div class="form-container">
            <h2>Enter Your Data</h2>
            
            <div class="form-group">
                <label for="arrayInput">Array Elements (comma-separated) *</label>
                <input type="text" id="arrayInput" placeholder="e.g., 12, 3, 4, 1, 6, 9" required>
            </div>

            <div class="form-group">
                <label for="targetValue">Target Sum *</label>
                <input type="number" id="targetValue" placeholder="e.g., 24" required>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="findTriplets()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">Find Triplets</button>
                <button onclick="loadSampleTriplet()" style="background: #4facfe;">Load Sample Data</button>
                <button onclick="clearTripletForm()" style="background: #fa709a;">Clear</button>
            </div>
        </div>

        <div class="output-section" id="tripletOutput">
            <!-- Output will be displayed here -->
        </div>

        <div class="info-message" style="margin-top: 20px;">
            <strong>How it works:</strong>
            <ol style="margin-left: 20px; margin-top: 10px;">
                <li>Enter array elements as comma-separated values</li>
                <li>Specify the target sum</li>
                <li>Click "Find Triplets" to find all triplets</li>
                <li>The algorithm finds all unique triplets whose sum equals the target</li>
            </ol>
        </div>

        <div class="info-message" style="margin-top: 15px; background: #fff3cd; border-left-color: #ffc107;">
            <strong>Sample Input:</strong>
            <p>Array: {12, 3, 4, 1, 6, 9}<br>Target Sum: 24</p>
            <strong>Expected Output:</strong>
            <p>Triplet: {12, 3, 9} (as 12 + 3 + 9 = 24)</p>
        </div>

        <div class="info-message" style="margin-top: 15px; background: #d1ecf1; border-left-color: #0c5460;">
            <strong>Algorithm Used:</strong>
            <p>Three-pointer approach with O(n²) time complexity</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Sort the array</li>
                <li>Fix one element and use two pointers</li>
                <li>Find triplets with matching sum</li>
                <li>Return all unique triplets</li>
            </ul>
        </div>

        <footer>
            <p>Assignment 6: Triplet Sum Finder | Using three-pointer algorithm</p>
        </footer>
    </div>

    <script src="public/js/assignment6.js"></script>
</body>
</html>
