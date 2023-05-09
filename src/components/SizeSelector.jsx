import { useState } from "react";
import css from "../css/SizeSelector.module.css";

const maxRows = 10;
const maxCols = 10;

const SizeSelector = () => {
  const [size, setSize] = useState({ rows: 0, cols: 0 });
  const [picked, setPicked] = useState(false);

  // const selector = () => {
  //   return (
  //   );
  // };

  return (
    <>
      {!picked && (
        <>
          <div onMouseLeave={() => setSize({ rows: 0, cols: 0 })}>
            {[...Array(maxRows)].map((e, row) => (
              <div className={css.selectorRow}>
                {[...Array(maxCols)].map((e2, col) => (
                  <div
                    className={[
                      css.selector,
                      row < size.rows && col < size.cols ? css.selected : "",
                    ].join(" ")}
                    onMouseEnter={() =>
                      setSize({ rows: row + 1, cols: col + 1 })
                    }
                    onClick={() => setPicked(true)}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div>
            ({size.cols}, {size.rows})
          </div>
        </>
      )}
    </>
  );
};

export default SizeSelector;
