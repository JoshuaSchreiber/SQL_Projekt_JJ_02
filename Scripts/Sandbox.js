async function selectData() {
    const query = document.getElementById('queryInput').value;
    try {
        const response = await fetch('http://localhost:3001/select', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: query })
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Data selected');
            displayResults(data);
        } else {
            console.error('Failed to select data:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function stopServer() {
    try {
        const response = await fetch('http://localhost:3001/stopServer');
        if (response.ok) {
            console.log('Server stopped');
        } else {
            console.error('Failed to stop server:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function stopServerWithDelay() {
    try {
        const response = await fetch('http://localhost:3001/stopServerWithDelay');
        if (response.ok) {
            console.log('Server will stop with delay');
        } else {
            console.error('Failed to stop server with delay:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function runAll() {
    await selectData();
    await stopServerWithDelay();
}

function displayResults(data) {
    const resultsTable = document.getElementById('results');
    resultsTable.innerHTML = ''; // Clear previous results

    if (!data || data.length === 0) {
        resultsTable.innerHTML = '<tr><td>No results found</td></tr>';
        return;
    }

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table rows
    data.forEach(row => {
        const rowElement = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            rowElement.appendChild(td);
        });
        tbody.appendChild(rowElement);
    });

    resultsTable.appendChild(thead);
    resultsTable.appendChild(tbody);
}
