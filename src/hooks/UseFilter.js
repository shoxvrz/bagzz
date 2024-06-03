// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateFilteredData } from "../toolkit/filterSlice";

// const UseFilter = () => {
//   const dispatch = useDispatch();
//   const { originalData } = useSelector((state) => state.filter);

//   const [inputData, setInputData] = useState({
//     groceries: "",
//     furniture: "",
//     beauty: "",
//     name: "",
//   });

//   const filterHandler = () => {
//     let tempData = [...originalData];

//     tempData = tempData.filter((item) =>
//       item.name.toLowerCase().includes(inputData.name)
//     );

//     if (inputData.beauty !== "") {
//       tempData = tempData.filter((item) => item.beauty === inputData.beauty);
//     }
//     dispatch(updateFilteredData(tempData));
//   };

//   console.log(originalData);

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setInputData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   return {
//     filterHandler,
//     inputHandler,
//     inputData,
//   };
// };

// export default UseFilter;
