"use client";

export default function FormBuilder() {
  const formFields = [];

  const handleAddFormField = (e) => {
    const formData = new FormData(e.target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: "",
    };
  };

  const handleUpdateFormField = (id, updatedField) => {};

  const handleDeleteFormField = (id) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset>
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select name="type" id="type">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
          />
          <button type="submit" className="secondary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {formFields.map((field) => (
              <li key={field.id}>
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    handleUpdateFormField(field.id, { value: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="secondary"
                  onClick={() => handleDeleteFormField(field.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <span>Your form fields will show here</span>
          <button className="primary">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
