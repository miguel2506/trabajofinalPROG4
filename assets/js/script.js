function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let match = false;
        const cells = rows[i].getElementsByTagName('td');
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                const cellValue = cells[j].textContent || cells[j].innerText;
                if (cellValue.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                    break;
                }
            }
        }
        
        rows[i].style.display = match ? '' : 'none';
    }
}

function colorEvenRows() {
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    let visibleRowCount = 0;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].style.display !== 'none') {
            rows[i].classList.remove('tr__even--modifier');
            if (visibleRowCount % 2 === 1) {
                rows[i].classList.add('tr__even--modifier');
            }
            visibleRowCount++;
        }
    }
}

function colorOddRows() {
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    let visibleRowCount = 0;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].style.display !== 'none') {
            rows[i].classList.remove('tr__odd--modifier');
            if (visibleRowCount % 2 === 0) {
                rows[i].classList.add('tr__odd--modifier');
            }
            visibleRowCount++;
        }
    }
}

function showFirstTen() {
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        if (i <= 10) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function showSecondTen() {
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        if (i > 10 && i <= 20) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}