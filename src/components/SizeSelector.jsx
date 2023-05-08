import { useState } from "react";

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
        <div>
          {[...Array(maxRows)].map((e, row) => (
            <div>
              {[...Array(maxCols)].map((e2, col) => (
                <div 
                  className="selector"
                  onMouseEnter={() => setSize({ rows: row + 1, cols: col + 1 })}
                  onClick={() => setPicked(true)}
                >
                  
                </div>
              ))}
            </div>
          ))}
          <div>
            ({size.cols}, {size.rows})
          </div>
        </div>
      )}
    </>
  );
};

export default SizeSelector;
