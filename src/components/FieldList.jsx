import React, { useState } from "react";
import Field from "./Field";

const FieldList = ({ fields, setFields, onChange, isNested = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFieldUpdate = (index, updatedField) => {
    const updatedFields = [...fields];
    updatedFields[index] = updatedField;
    setFields(updatedFields);
    onChange && onChange(updatedFields);
  };

  const handleAddField = () => {
    const newFields = [...fields, { label: "", type: "", enabled: true }];
    setFields(newFields);
    onChange && onChange(newFields);
    setIsExpanded(true); // expand on click
  };

  const handleDelete = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    setFields(updated);
    onChange && onChange(updated);
  };

  return (
    <div className="field-list-wrapper">
      <div className="field-list">
        {fields.map((field, index) => (
          <Field
            key={index}
            field={field}
            onUpdate={(updatedField) => handleFieldUpdate(index, updatedField)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      <button
        className={`add-btn ${isExpanded ? "expanded" : ""}`}
        onClick={handleAddField}
      >
        + Add Item
      </button>
    </div>
  );
};

export default FieldList;

