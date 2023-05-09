import { useState } from "react";
import SizeSelector from "./SizeSelector";
import Table from "./Table";

const CreateTable = () => {
  const [size, setSize] = useState({});
  return (
    <>
      {!Object.keys(size).length && <SizeSelector setSize={setSize} />}
      {!!Object.keys(size).length && <Table size={size} />}
    </>
  );
};

export default CreateTable;
