/**
 * Populate the given table with the given students.
 * @param {HTMLElement} table - The table in which to insert the students.
 * @param {Array} students - The data about the students.
 */
export default function populateTable(table, students) {
    const tbody = table.querySelector("tbody");
    tbody.textContent = ""; // empty the table
    for (const student of students) {
        const tr = createRow(student);
        tbody.appendChild(tr);
    }
}

function createRow(student) {
    const tr = document.createElement("tr");
    for (const key in student) {
        const td = document.createElement("td");
        td.textContent = student[key];
        tr.appendChild(td);
    }
    return tr;
}
