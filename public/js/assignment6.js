// Assignment 6: Triplet Sum Finder

function findTriplets() {
    const arrayInput = document.getElementById('arrayInput').value.trim();
    const targetValue = document.getElementById('targetValue').value.trim();

    // Validation
    if (!arrayInput) {
        alert('Please enter an array');
        return;
    }

    if (!targetValue) {
        alert('Please enter a target value');
        return;
    }

    // Convert to array
    const array = arrayInput.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));

    if (array.length === 0) {
        alert('Please enter valid numbers');
        return;
    }

    if (array.length < 3) {
        alert('Array must contain at least 3 elements');
        return;
    }

    // Send to server
    const formData = new FormData();
    formData.append('array', arrayInput);
    formData.append('targetValue', targetValue);

    fetch('app/Http/Controllers/TripletSumApi.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayTripletResult(data);
            } else {
                alert(data.message || 'An error occurred');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred');
        });
}

function displayTripletResult(data) {
    const outputDiv = document.getElementById('tripletOutput');

    let html = `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <p><strong>Array:</strong> <code>[${data.array.join(', ')}]</code></p>
            <p><strong>Target Sum:</strong> <code>${data.targetValue}</code></p>
        </div>
    `;

    if (data.found) {
        html += `
            <div class="success-message">
                ✓ Found ${data.count} triplet(s) with sum equal to ${data.targetValue}
            </div>

            <h3 style="margin-top: 20px;">Triplets Found:</h3>
            <table style="margin-top: 10px;">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Triplet</th>
                        <th>Verification</th>
                    </tr>
                </thead>
                <tbody>
        `;

        data.triplets.forEach((triplet, index) => {
            const [a, b, c] = triplet.values;
            html += `
                <tr>
                    <td>${index + 1}</td>
                    <td><code style="background: #d4edda; padding: 8px; border-radius: 3px; font-weight: bold;">{${a}, ${b}, ${c}}</code></td>
                    <td><code>${a} + ${b} + ${c} = ${triplet.sum}</code></td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;
    } else {
        html += `
            <div class="error-message">
                ✗ No triplets found with sum equal to ${data.targetValue}
            </div>

            <h3 style="margin-top: 20px;">Suggestions:</h3>
            <ul style="margin-left: 20px;">
                <li>Try a different target value</li>
                <li>Make sure the array contains numbers</li>
                <li>The array must have at least 3 elements</li>
            </ul>
        `;
    }

    html += `
        <button onclick="copyTripletResult('${data.triplets.map(t => '{' + t.values.join(', ') + '}').join(', ')}')" style="margin-top: 15px; background: #43e97b;">Copy Result</button>
    `;

    outputDiv.innerHTML = html;
    window.lastTripletResult = data.triplets;
}

function copyTripletResult(result) {
    const text = `Triplets with sum ${document.getElementById('targetValue').value}:\n${result}`;
    navigator.clipboard.writeText(text).then(() => {
        alert('Result copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy');
    });
}

function loadSampleTriplet() {
    document.getElementById('arrayInput').value = '12, 3, 4, 1, 6, 9';
    document.getElementById('targetValue').value = '24';
}

function clearTripletForm() {
    document.getElementById('arrayInput').value = '';
    document.getElementById('targetValue').value = '';
    document.getElementById('tripletOutput').innerHTML = '';
}
