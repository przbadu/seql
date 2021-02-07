import React from "react";

const TextField = ({
  label,
  inline = false,
  name,
  value,
  onChange,
  ...rest
}) => {
  if (inline)
    return (
      <div className="form-group">
        <div className="col-3 col-sm-12">
          <label className="form-label" htmlFor="input-example-1">
            {label}
          </label>
        </div>
        <div className="col-9 col-sm-12">
          <input
            className="form-input"
            name={name}
            value={value}
            onChange={onChange}
            {...rest}
          />
        </div>
      </div>
    );

  return (
    <div className="form-group">
      <label className="form-label" htmlFor="input-example-1">
        {label}
      </label>
      <input
        className="form-input"
        value={value}
        onChange={onChange}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default TextField;
