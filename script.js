
// trying to recreate table
const arrays = Array(100).fill(1).map((n, i) => n + i)

const app = document.getElementById("app");
const table = document.createElement("table");
const rows = 10;
const cols = 10;

let index = 0;

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");

  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    td.textContent = arrays[index];
    index++;
    tr.appendChild(td);
}
table.appendChild(tr);
};

app.appendChild(table);


// const arrays = [];

// for (let i = 1; i <= 100; i++) {
//   arrays.push(i);
// }
