<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5 - HTML Find & Replace</title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <div class="container">
        <a href="index.php" class="back-link">← Back to Dashboard</a>

        <header>
            <h1>📝 HTML Content Find & Replace</h1>
            <p>Replace text in HTML content using PHP str_replace()</p>
        </header>

        <div class="form-container">
            <h2>Step 1: Add Replacement Pairs</h2>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="findText">Text to Find *</label>
                    <input type="text" id="findText" placeholder="e.g., PARTY2NAME">
                </div>
                <div class="form-group">
                    <label for="replaceText">Replace With</label>
                    <input type="text" id="replaceText" placeholder="e.g., Abc india pvt. Ltd.">
                </div>
            </div>

            <button onclick="addReplacementPair()" style="margin-bottom: 20px;">+ Add Replacement Pair</button>

            <h3>Replacement Pairs:</h3>
            <div id="replacementPairsList" class="info-message">
                No replacement pairs added yet
            </div>

            <h2 style="margin-top: 30px;">Step 2: Enter HTML Content</h2>
            
            <div class="form-group">
                <label for="htmlContent">HTML Content *</label>
                <textarea id="htmlContent" placeholder="Enter HTML content here..." style="height: 200px; font-family: monospace;"></textarea>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="performHtmlReplacement()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">Perform Replacement</button>
                <button onclick="loadSampleHtml()" style="background: #4facfe;">Load Sample Data</button>
                <button onclick="clearHtmlForm()" style="background: #fa709a;">Clear All</button>
            </div>
        </div>

        <div class="output-section" id="htmlReplacementOutput">
            <!-- Output will be displayed here -->
        </div>

        <div class="info-message" style="margin-top: 20px;">
            <strong>How to use:</strong>
            <ol style="margin-left: 20px; margin-top: 10px;">
                <li>Add find/replace pairs in Step 1</li>
                <li>Paste your HTML content in Step 2</li>
                <li>Click "Perform Replacement"</li>
                <li>View original and replaced HTML</li>
                <li>Copy or download the result</li>
            </ol>
        </div>

        <footer>
            <p>Assignment 5: HTML Find & Replace | Using PHP str_replace() function</p>
        </footer>
    </div>

    <script src="public/js/assignment5.js"></script>
</body>
</html>
