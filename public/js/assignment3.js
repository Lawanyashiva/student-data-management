// Assignment 3: String Replacement - Replace placeholders in text

function performStringReplacement() {
    const inputString = document.getElementById('inputString').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const designation = document.getElementById('designation').value.trim();

    if (!inputString) {
        alert('Please enter a string');
        return;
    }

    // Validate inputs
    const errors = [];
    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!mobile) errors.push('Mobile is required');
    if (!designation) errors.push('Designation is required');

    if (errors.length > 0) {
        showErrors(errors);
        return;
    }

    // Perform replacements
    let resultString = inputString;

    // Replace @Name@
    resultString = resultString.replace(/@Name@/g, name);

    // Replace @email@
    resultString = resultString.replace(/@email@/g, email);

    // Replace @mobile@
    resultString = resultString.replace(/@mobile@/g, mobile);

    // Replace @designation@
    resultString = resultString.replace(/@designation@/g, designation);

    // Display result
    displayResult(resultString, {
        replacements: {
            '@Name@': name,
            '@email@': email,
            '@mobile@': mobile,
            '@designation@': designation
        }
    });

    clearErrors();
}

function displayResult(result, details) {
    const outputDiv = document.getElementById('replacementOutput');

    let html = `
        <h3>Output String:</h3>
        <div class="output-content">${escapeHtml(result)}</div>
        
        <h3 style="margin-top: 20px;">Replacement Summary:</h3>
        <table style="margin-top: 10px;">
            <thead>
                <tr>
                    <th>Placeholder</th>
                    <th>Replaced With</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (const [placeholder, value] of Object.entries(details.replacements)) {
        html += `
            <tr>
                <td><code>${placeholder}</code></td>
                <td>${escapeHtml(value)}</td>
            </tr>
        `;
    }

    html += `
            </tbody>
        </table>
        
        <button onclick="copyToClipboard()" style="margin-top: 15px; background: #43e97b;">Copy to Clipboard</button>
        <button onclick="downloadResult()" style="margin-top: 15px; background: #4facfe;">Download as Text</button>
    `;

    outputDiv.innerHTML = html;

    // Store result globally for copy/download
    window.lastResult = result;
}

function copyToClipboard() {
    if (window.lastResult) {
        navigator.clipboard.writeText(window.lastResult).then(() => {
            alert('Copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy');
        });
    }
}

function downloadResult() {
    if (window.lastResult) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(window.lastResult));
        element.setAttribute('download', 'replacement_result.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}

function loadSampleData() {
    document.getElementById('inputString').value = `@Name@ ipsum dolor sit amet, consectetur adipiscing elit. Praesent in mollis magna. Donec eu elit pellentesque, maximus nisl vitae, cursus velit. Sed Loremnibh sed elit auctor tincidunt. Donec tempor est id nunc ullamcorper rhoncus. Phasellus nec arcu et dui varius ullamcorper commodo quis ligula. Etiam ultrices nisi @email@, ut euismod elit tempor sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor turpis vel nisi fermentum, a sodales magna egestas. Vestibulum lobortis elit sed neque rhoncus, sit amet @mobile@ magna blandit. @designation@ nec leo ac diam euismod fringilla.`;

    document.getElementById('name').value = 'RRRR';
    document.getElementById('email').value = 'RRR@RRR.com';
    document.getElementById('mobile').value = '9988775566';
    document.getElementById('designation').value = 'Software Developer';
}

function clearAll() {
    document.getElementById('inputString').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('replacementOutput').innerHTML = '';
    clearErrors();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

function clearErrors() {
    document.getElementById('errorMessages').innerHTML = '';
}
