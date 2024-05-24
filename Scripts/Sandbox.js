async function startServer() {
    await fetch('http://localhost:3001/startServer')
        .then(response => console.log('Server started'))
        .catch(error => console.error('Error:', error));
}

async function selectData() {
    const query = document.getElementById('queryInput').value;
    await fetch('http://localhost:3001/select', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Data selected');
            displayResults(data);
        })
        .catch(error => console.error('Error:', error));
}

async function stopServer() {
    await fetch('http://localhost:3001/stopServer')
        .then(response => console.log('Server stopped'))
        .catch(error => console.error('Error:', error));
}

async function stopServerWithDelay() {
    await fetch('http://localhost:3001/stopServerWithDelay')
        .then(response => console.log('Server will stop with delay'))
        .catch(error => console.error('Error:', error));
}

async function runAll() {
    await startServer();
    await selectData();
    await stopServerWithDelay();
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        resultsContainer.textContent = 'No results found';
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    const headers = Object.keys(data[0]);
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Create table rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    resultsContainer.appendChild(table);
}