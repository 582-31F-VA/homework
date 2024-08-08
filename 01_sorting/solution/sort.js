import populateTable from "./table.js";
import students from "./students.js";

/**
 * Return an event handler that toggles between sorting students in the
 * table in ascending and descending order.
 * @return {Function}
 */
export default function sortStudents() {
    let order = 1;
    return (event) => {
        if (event.target.tagName !== "TH") return;
        const columnName = event.target.textContent;
        const sortedStudents = students.sort((a, b) => {
            if (a[columnName] >= b[columnName]) return order;
            if (a[columnName] <= b[columnName]) return -order;
        });
        order = -order;
        populateTable(event.currentTarget, sortedStudents);
    };
}
