// Assignment 5: HTML Find & Replace

let replacementPairs = [];

function addReplacementPair() {
    const find = document.getElementById('findText').value.trim();
    const replace = document.getElementById('replaceText').value.trim();

    if (!find) {
        alert('Enter text to find');
        return;
    }

    replacementPairs.push({ find, replace });

    document.getElementById('findText').value = '';
    document.getElementById('replaceText').value = '';

    displayReplacementList();
}

function removeReplacementPair(index) {
    replacementPairs.splice(index, 1);
    displayReplacementList();
}

function displayReplacementList() {
    const container = document.getElementById('replacementPairsList');

    if (replacementPairs.length === 0) {
        container.innerHTML = '<div class="info-message">No replacement pairs added yet</div>';
        return;
    }

    let html = '<table><thead><tr><th>Find</th><th>Replace</th><th>Action</th></tr></thead><tbody>';

    replacementPairs.forEach((pair, index) => {
        html += `
            <tr>
                <td><code style="background: #f0f0f0; padding: 5px; border-radius: 3px;">${escapeHtml(pair.find)}</code></td>
                <td><code style="background: #f0f0f0; padding: 5px; border-radius: 3px;">${escapeHtml(pair.replace)}</code></td>
                <td><button class="todo-btn" style="background: #fa709a; padding: 5px 10px;" onclick="removeReplacementPair(${index})">Remove</button></td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function performHtmlReplacement() {
    const htmlContent = document.getElementById('htmlContent').value.trim();

    if (!htmlContent) {
        alert('Please enter HTML content');
        return;
    }

    if (replacementPairs.length === 0) {
        alert('Please add at least one replacement pair');
        return;
    }

    // Send to server
    const formData = new FormData();
    formData.append('htmlContent', htmlContent);
    formData.append('replacements', JSON.stringify(replacementPairs));

    fetch('app/Http/Controllers/HtmlReplacerApi.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayHtmlResult(data);
            } else {
                alert(data.message || 'An error occurred');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during replacement');
        });
}

function displayHtmlResult(data) {
    const outputDiv = document.getElementById('htmlReplacementOutput');

    let html = `
        <h3>Original HTML:</h3>
        <div class="output-content" style="background: #fff3cd; color: #856404;">${escapeHtml(data.original)}</div>
        
        <h3 style="margin-top: 20px;">Result HTML:</h3>
        <div class="output-content" style="background: #d4edda; color: #155724;">${escapeHtml(data.result)}</div>
        
        <h3 style="margin-top: 20px;">Replacements Applied:</h3>
        <table style="margin-top: 10px;">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Find</th>
                    <th>Replace</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.replacements.forEach((rep, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td><code>${escapeHtml(rep.find)}</code></td>
                <td><code>${escapeHtml(rep.replace)}</code></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>

        <div style="background: #d1ecf1; padding: 15px; border-radius: 5px; margin-top: 15px; border-left: 4px solid #0c5460;">
            <strong>Total Replacements:</strong> ${data.replacementsApplied}
        </div>

        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button onclick="copyHtmlResult('${data.result.replace(/'/g, "\\'")}')" style="background: #43e97b;">Copy Result</button>
            <button onclick="downloadHtmlResult('${data.result.replace(/'/g, "\\'")}')" style="background: #4facfe;">Download HTML</button>
        </div>
    `;

    outputDiv.innerHTML = html;
    window.lastHtmlResult = data.result;
}

function copyHtmlResult(result) {
    navigator.clipboard.writeText(window.lastHtmlResult).then(() => {
        alert('HTML copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy');
    });
}

function downloadHtmlResult(result) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(window.lastHtmlResult));
    element.setAttribute('download', 'replaced_content.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function loadSampleHtml() {
    const sampleHtml = `<p align="justify" style="orphans: 0; widows: 0; margin-left: 0.39cm; margin-bottom: 0cm; border: none; padding: 0cm"><b>PARTY</b>2NAME<i>, </i>a company incorporated under the laws of ROC2LAW having its Registered Office at P1OFFICEADD. which expression, shall unless it be repugnant to the context or meaning thereof, mean and include its successors and assigns (hereinafter referred to as '' Service Provider') of the ONE PART</p>`;

    document.getElementById('htmlContent').value = sampleHtml;

    replacementPairs = [
        { find: 'PARTY2NAME', replace: 'Abc india pvt. Ltd.' },
        { find: 'P1OFFICEADD.', replace: 'Mount Road,chennai-60014.' }
    ];

    displayReplacementList();
}

function clearHtmlForm() {
    document.getElementById('htmlContent').value = '';
    replacementPairs = [];
    displayReplacementList();
    document.getElementById('htmlReplacementOutput').innerHTML = '';
    document.getElementById('findText').value = '';
    document.getElementById('replaceText').value = '';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
