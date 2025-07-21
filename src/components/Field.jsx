import React from "react";
import FieldList from "./FieldList";

const Field = ({ field, onUpdate, onDelete }) => {
  const handleLabelChange = (e) => {
    onUpdate({ ...field, label: e.target.value });
  };

  const handleTypeChange = (e) => {
    const updatedType = e.target.value;
    const updatedField = {
      ...field,
      type: updatedType,
    };

    if (updatedType === "nested") {
      updatedField.children = field.children || [];
    } else {
      delete updatedField.children;
    }

    onUpdate(updatedField);
  };

  const handleToggle = () => {
    onUpdate({ ...field, enabled: !field.enabled });
  };

  const handleChildChange = (children) => {
    onUpdate({ ...field, children });
  };

  return (
    <div className="field">
      <div className="fieldarea">
      <input
        type="text"
        placeholder="Enter label"
        value={field.label}
        onChange={handleLabelChange}
      />

      <select value={field.type} onChange={handleTypeChange}>
        <option value="" disabled hidden>
          Field Type
        </option>
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="objectid">ObjectId</option>
        <option value="float">Float</option>
        <option value="nested">Nested</option>
      </select>

      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={field.enabled}
          onChange={handleToggle}
        />
        <span className="slider" />
      </label>

      <button className="delete-btn" onClick={onDelete}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      </div>

      {field.type === "nested" && (
        <div className="nested">
          <FieldList
            fields={field.children || []}
            setFields={(newChildren) => handleChildChange(newChildren)}
            onChange={(newChildren) => handleChildChange(newChildren)}
          />
        </div>
      )}
    </div>
  );
};

export default Field;
