import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editValue, takeValue, update } from "../store/reduce";

export default function BT1() {
  const listUser = useSelector((state) => state.reducer.value);
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState({
    name: "",
    age: "",
    city: "",
  });

  const [index, setIndex] = useState();

  const [check, setCheck] = useState(true);

  const handleTakeInput = (e) => {
    const { name, value } = e.target;
    setNameInput({
      ...nameInput,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch(takeValue(nameInput));
    setNameInput({ name: "", age: "", city: "" });
  };
  const handleUpdate = () => {
    dispatch(editValue({ value1: nameInput, value2: index }));
    setNameInput({ name: "", age: "", city: "" });
    setCheck(true);
  };
  const handleDelete = (index) => {
    const cloneListUser = [...listUser];
    cloneListUser.splice(index, 1);
    dispatch(update(cloneListUser));
  };
  const handleEdit = (index) => {
    const fakeInput = {
      name: listUser[index].name,
      age: listUser[index].age,
      city: listUser[index].city,
    };
    setIndex(index);
    setCheck(false);
    setNameInput(fakeInput);
  };

  return (
    <>
      {" "}
      <div className="flex  justify-around items-center h-[50vh] ">
        <div>
          <div>
            <input
              type="text"
              className="block border border-black w-[30vw] p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={nameInput.name}
              onChange={handleTakeInput}
            />
            <input
              type="text"
              className="block border border-black w-[30vw] p-3 rounded mb-4"
              name="age"
              placeholder="age"
              value={nameInput.age}
              onChange={handleTakeInput}
            />
            <input
              type="text"
              className="block border border-black w-[30vw] p-3 rounded mb-4"
              name="city"
              placeholder="address"
              value={nameInput.city}
              onChange={handleTakeInput}
            />
            <button
              onClick={check ? handleSave : handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
        <table className="border-collapse border border-slate-500 ... text-center">
          <thead>
            <tr>
              <th className="border border-slate-600 ... w-[50px]">Id</th>
              <th className="border border-slate-600 ... w-[200px]">Name</th>
              <th className="border border-slate-600 ... w-[50px]">Age</th>
              <th className="border border-slate-600 ... w-[100px]">City</th>
              <th className="border border-slate-600 ... w-[200px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-700 ...">{index + 1}</td>
                <td className="border border-slate-700 ...">{item.name}</td>
                <td className="border border-slate-700 ...">{item.age}</td>
                <td className="border border-slate-700 ...">{item.city}</td>
                <td className="border border-slate-700 ...">
                  <button
                    onClick={() => handleEdit(index)}
                    className="mr-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        ​
      </div>
    </>
  );
}
