import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-2">
        <label htmlFor={name} className="d-block small fw-medium text-dark">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-light border border-muted text-dark small rounded-lg focus-ring-primary focus-border-primary outline-0 d-block w-100 p-3"
      />
    </div>
  );
};

export default FormField;
