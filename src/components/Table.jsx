import { useEffect, useState } from "react";
import css from "../css/Table.module.css";

const Table = (props) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    let rowCount = props.size.rows;
    let colCount = props.size.cols;

    let blankTable = [];
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < colCount; j++) {
        blankTable.push({
          location: { row: i, col: j },
          text: "",
          bold: false,
        });
      }
    }

    setCells(blankTable);
    console.log(blankTable);
  }, []);

  const containerStyle = () => {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${props.size.cols}, 50px [col-start])` 
    }
  }

  return (
    <>
      <div style={containerStyle()}>
        {cells.map((cell) => (
          <div className={css.tableCell} contentEditable={true}>{cell.location.col},{cell.location.row}</div>
        ))}
      </div>
    </>
  );
};

export default Table;
