import { useEffect, useState } from "react";
import css from "../css/Table.module.css";
import { toRedmineTable } from "../util/transformer";

const Table = (props) => {
  const [cells, setCells] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    let rowCount = props.size.rows;
    let colCount = props.size.cols;

    let blankTable = [];
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < colCount; j++) {
        blankTable.push({
          text: "",
          bold: false,
        });
      }
    }

    setCells(blankTable);
  }, []);

  const containerStyle = () => {
    return {
      padding: "2px 2px",
      backgroundColor: "white",
      gap: "2px",
      display: "grid",
      gridTemplateColumns: `repeat(${props.size.cols}, 1fr)`,
    };
  };

  const updateCell = (idx, value) => {
    let newCells = [...cells];
      console.log(value)
    newCells[idx].text = value;
    setCells(newCells);
  };

  const toggleBold = () => {
    if (selected == -1) return;
    let newCells = [...cells];
    newCells[selected].bold = !newCells[selected].bold;
    setCells(newCells);
  };

    const transformToRedmine = () => {
        let data = {cells: cells, colCount: props.size.cols}
        let redmineTable = toRedmineTable(data)
        console.log(redmineTable);
        navigator.clipboard.writeText(redmineTable.trim());
    }

  return (
    <>
      <div style={containerStyle()}>
        {cells.map((cell, i) => (
          <div
            className={[css.tableCell, (cell.bold ? css.bold : "")].join(' ')}
            onInput={(e) => updateCell(i, e.currentTarget.innerText)}
            onClick={() => setSelected(i)}
            contentEditable={true}
          ></div>
        ))}
      </div>
      <button onClick={toggleBold}>Toggle Bold</button>
      <button onClick={transformToRedmine}>Copy To Clipboard</button>
    </>
  );
};

export default Table;
