import React, { useState } from "react";

const Notes = () => {
  const [listData, setListData] = useState([]); //

  const [inputData, setInputData] = useState("");

  const [editIndex, setEditIndex] = useState(undefined);

  const addData = () => {
    if (!inputData) {
      alert("please fill it first");
      return false;
    }
    let temp = [...listData];
    if (editIndex === undefined) {
      temp.push(inputData);
    } else {
      temp[editIndex] = inputData;
    }

    setListData(temp);
    setInputData("");
    setEditIndex(undefined);
  };

  const delData = (ind) => {
    let temp = [...listData];
    temp.splice(ind, 1);
    setListData(temp);
    setInputData("");
    setEditIndex(undefined);
  };
  const editData = (item, ind) => {
    setInputData(item);
    setEditIndex(ind);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => addData()}>
          {editIndex === undefined ? "Add" : "Edit"}
        </button>
      </div>
      <div>
        {listData.map((item, ind) => (
          <div>
            <label>{item}</label>
            <button onClick={() => delData(ind)}>Del</button>
            <button onClick={() => editData(item, ind)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
