
// import React, { useState } from "react";
// import FieldList from "./components/FieldList";
// import "./App.css";

// const App = () => {
//   const [fields, setFields] = useState([]);

//   const handleChange = (updatedFields) => {
//     setFields(updatedFields);
//   };

//   const handleSubmit = () => {
//     console.log("Final JSON:", buildJson(fields));
//     alert("Check the console for final JSON!");
//   };

//   const buildJson = (items) => {
//     const result = {};
//     items.forEach((item) => {
//       if (!item.enabled || !item.label || !item.type) return;
//       result[item.label] =
//         item.type === "nested"
//           ? buildJson(item.children || [])
//           : item.type.toUpperCase();
//     });
//     return result;
//   };

//   return (
//     <div className="app">
//       <div className="left-panel">
//         <h2>JSON Schema Builder</h2>
//         <FieldList fields={fields} setFields={setFields} onChange={handleChange} />
//         <button className="submit-btn" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>

//       <div className="right-panel">
//         <h3>Live JSON Preview</h3>
//         <pre>{JSON.stringify(buildJson(fields), null, 2)}</pre>
//       </div>
//     </div>
//   );
// };

// export default App;





import React, { useState } from "react";
import FieldList from "./components/FieldList";
import "./App.css";

const App = () => {
  const [fields, setFields] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState(false); 

  const handleChange = (updatedFields) => {
    setFields(updatedFields);
  };

  const buildJson = (items) => {
    const result = {};
    items.forEach((item) => {
      if (!item.label) return;

      const key = item.label;
      result[key] =
        item.type === "nested"
          ? buildJson(item.children || [])
          : item.type
          ? item.type.toUpperCase()
          : "";
    });
    return result;
  };

  const handleFirstItemAdd = (newFields) => {
    setFields(newFields);
    setIsItemAdded(true);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <FieldList
          fields={fields}
          setFields={setFields}
          onChange={handleChange}
        />
        <button className="submit-btn" onClick={() => console.log("Final JSON:", buildJson(fields))}>
          Submit
        </button>
      </div>

      <div className="right-panel">
        <pre>{JSON.stringify(buildJson(fields), null, 2)}</pre> 
       </div>
    </div>
  );
};

export default App;
