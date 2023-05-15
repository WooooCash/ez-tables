export const toRedmineTable = (data) => {
  let { cells, colCount } = data;
  let tableString = "";
  cells.forEach((cell, i) => {
    if (i % colCount == 0) 
      tableString += "\n| ";
    if (cell.bold) 
      tableString += "*";
    
    tableString += cell.text.trim()
    if (cell.bold) 
      tableString += "*";
    tableString += " | "
  });
  return tableString;
};
