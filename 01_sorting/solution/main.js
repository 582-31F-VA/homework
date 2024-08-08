import students from "./students.js";
import populateTable from "./table.js";
import sortStudents from "./sort.js";

const table = document.querySelector("table");
populateTable(table, students);
table.addEventListener("click", sortStudents());
