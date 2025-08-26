



const exportButton = document.querySelector(
  ".export-btn"
);

// Helpers
function textify(cell) {
  return cell.textContent.replace(/\s+/g, ' ').trim();
}

function csvEscape(value) {
  const v = String(value).replace(/"/g, '""');
  return `"${v}"`;
}

function exportTableToCSV(table, { filename = 'transactions.csv', selectedOnly = false, skipCheckboxCol = true } = {}) {
  const tbl = typeof table === 'string' ? document.querySelector(table) : table;
  if (!tbl) { console.error('Table not found'); return; }

  // Grab header cells (assumes one TH row)
  const headerRow = tbl.tHead?.rows?.[0];
  if (!headerRow) { console.error('Missing thead/th row'); return; }
  const startIdx = skipCheckboxCol ? 1 : 0;
  const headerCells = Array.from(headerRow.cells).slice(startIdx);
  const header = headerCells.map(c => csvEscape(textify(c))).join(',');

  // Grab body rows
  const body = tbl.tBodies?.[0];
  if (!body) { console.error('Missing tbody'); return; }
  const rows = [];
  for (const tr of Array.from(body.rows)) {
    // If exporting only selected rows, require first-cell checkbox to be checked
    if (selectedOnly) {
      const cb = tr.cells[0]?.querySelector('input[type="checkbox"]');
      if (!cb || !cb.checked) continue;
    }
    const cells = Array.from(tr.cells).slice(startIdx).map(td => csvEscape(textify(td)));
    rows.push(cells.join(','));
  }

  if (!rows.length) { alert('No rows to export.'); return; }

  const csv = '\uFEFF' + [header, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

exportButton.addEventListener("click", function () {
  exportTableToCSV(".table-widget > table", { selectedOnly: true });
});

let currentSortColumn = null;
let currentSortDirection = 'asc';
let isResizing = false;  // NEW FLAG

function sortTableByColumn(columnIndex) {
  if (isResizing) {
    // Block sorting if resizing just happened
    return;
  }

  const table = document.getElementById('team-table');
  const rows = Array.from(
    table.querySelectorAll('tbody tr')
  );
  const isTextColumn = columnIndex !== 1;
  const direction = (currentSortColumn === columnIndex && 
      currentSortDirection === 'asc') ? 'desc' : 'asc';

  rows.sort((rowA, rowB) => {
    let cellA = rowA.children[columnIndex].textContent.trim();
    let cellB = rowB.children[columnIndex].textContent.trim();

    if (!isTextColumn) {
      cellA = cellA.toLowerCase();
      cellB = cellB.toLowerCase();
    }

    if (direction === 'asc') {
      return cellA.localeCompare(
        cellB, undefined, { numeric: true }
      );
    } else {
      return cellB.localeCompare(
        cellA, undefined, { numeric: true }
      );
    }
  });

  rows.forEach(row => 
    table.querySelector('tbody').appendChild(row)
  );

  document.querySelectorAll('#team-table th')
  .forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
  });

  const header = document.querySelector(
    `#team-table th:nth-child(${columnIndex + 1})`
  );
  header.classList.add(
    direction === 'asc' ? 'sorted-asc' : 'sorted-desc'
  );

  currentSortColumn = columnIndex;
  currentSortDirection = direction;
}

document.querySelectorAll('#team-table th')
.forEach((th, index) => {
  th.addEventListener('click', () => {
    sortTableByColumn(index);
  });
});

document.querySelectorAll('#team-table th.resizable')
.forEach(th => {
  let startX, startWidth;

  const resizer = document.createElement('div');
  resizer.style.width = '1px';
  resizer.style.height = '100%';
  resizer.style.position = 'absolute';
  resizer.style.top = '0';
  resizer.style.right = '0';
  resizer.style.background = '#7d7d7d';
  resizer.style.cursor = 'col-resize';
  th.style.position = 'relative';

  resizer.addEventListener('mousedown', (e) => {
    isResizing = true;  
    startX = e.pageX;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(th).width, 
      10
    );
    document.documentElement.addEventListener(
      'mousemove', onMouseMove);
    document.documentElement.addEventListener(
      'mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    const newWidth = startWidth + (e.pageX - startX);
    th.style.width = newWidth + 'px';
  }

  function onMouseUp() {
    document.documentElement.removeEventListener(
      'mousemove', onMouseMove);
    document.documentElement.removeEventListener(
      'mouseup', onMouseUp);

    setTimeout(() => isResizing = false, 100);
  }

  th.appendChild(resizer);
});


const selectAllCheckbox = document.getElementById('selectAllCheckbox');
const rowCheckboxes = document.querySelectorAll('.rowCheckbox');

// Add a click listener to the "select all" checkbox
selectAllCheckbox.addEventListener('click', function() {
    // Loop through all the individual row checkboxes
    rowCheckboxes.forEach(checkbox => {
        // Set each checkbox's checked state to match the "select all" checkbox
        checkbox.checked = this.checked;
    });
});

// Add a click listener to each individual row checkbox
rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        // Get a list of all checked row checkboxes
        const allChecked = document.querySelectorAll('.rowCheckbox:checked');
        // If the number of checked row checkboxes is the same as the total number of rows,
        // then check the "select all" checkbox. Otherwise, uncheck it.
        selectAllCheckbox.checked = allChecked.length === rowCheckboxes.length;
    });
});