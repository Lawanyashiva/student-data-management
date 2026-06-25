// Assignment 4: Days Between Two Dates Calculator

// Number to words conversion
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

function numberToWords(num) {
    if (num === 0) return 'zero';

    let result = '';
    let scaleIndex = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = convertHundreds(num % 1000) + (scales[scaleIndex] ? ' ' + scales[scaleIndex] : '') + (result ? ' ' + result : '');
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return result.trim();
}

function convertHundreds(num) {
    let result = '';

    const hundreds = Math.floor(num / 100);
    if (hundreds > 0) {
        result += ones[hundreds] + ' hundred';
    }

    const remainder = num % 100;
    if (remainder >= 20) {
        if (result) result += ' ';
        result += tens[Math.floor(remainder / 10)];
        if (remainder % 10 > 0) {
            result += ' ' + ones[remainder % 10];
        }
    } else if (remainder >= 10) {
        if (result) result += ' ';
        result += teens[remainder - 10];
    } else if (remainder > 0) {
        if (result) result += ' ';
        result += ones[remainder];
    }

    return result;
}

function calculateDaysBetween() {
    const date1Input = document.getElementById('date1').value;
    const date2Input = document.getElementById('date2').value;

    if (!date1Input || !date2Input) {
        alert('Please select both dates');
        return;
    }

    const date1 = new Date(date1Input);
    const date2 = new Date(date2Input);

    // Ensure date1 is before date2
    let startDate, endDate;
    if (date1 <= date2) {
        startDate = date1;
        endDate = date2;
    } else {
        startDate = date2;
        endDate = date1;
    }

    // Calculate difference in milliseconds
    const timeDiff = endDate - startDate;

    // Convert to days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Convert to words
    const daysInWords = capitalizeFirstLetter(numberToWords(daysDiff));

    // Display result
    displayDaysResult(daysDiff, daysInWords, startDate, endDate);
}

function displayDaysResult(days, daysInWords, startDate, endDate) {
    const outputDiv = document.getElementById('daysOutput');

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    let html = `
        <h3>Calculation Result:</h3>
        <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea;">
            <p><strong>From Date:</strong> ${formatDate(startDate)}</p>
            <p><strong>To Date:</strong> ${formatDate(endDate)}</p>
            <p style="margin-top: 15px; font-size: 1.2em;"><strong>Number of Days:</strong> <span style="color: #667eea; font-size: 1.5em;">${days}</span></p>
            <p style="margin-top: 10px;"><strong>In Words:</strong> <span style="color: #764ba2; font-weight: bold;">${daysInWords} Days</span></p>
        </div>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <h4>Additional Information:</h4>
            <ul style="margin-left: 20px;">
                <li><strong>Weeks:</strong> ${Math.floor(days / 7)}</li>
                <li><strong>Months (approximate):</strong> ${Math.floor(days / 30)}</li>
                <li><strong>Years (approximate):</strong> ${(days / 365).toFixed(2)}</li>
            </ul>
        </div>

        <button onclick="copyDaysResult(${days}, '${daysInWords}')" style="margin-top: 15px; background: #43e97b;">Copy Result</button>
    `;

    outputDiv.innerHTML = html;
    window.lastDaysResult = { days, daysInWords };
}

function copyDaysResult(days, daysInWords) {
    const text = `Days Between Dates:\n${days} Days\n${daysInWords} Days`;
    navigator.clipboard.writeText(text).then(() => {
        alert('Result copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy');
    });
}

function loadSampleDates() {
    document.getElementById('date1').value = '2022-12-26';
    document.getElementById('date2').value = '2024-12-29';
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function clearDatesForm() {
    document.getElementById('date1').value = '';
    document.getElementById('date2').value = '';
    document.getElementById('daysOutput').innerHTML = '';
}
