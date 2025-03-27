"use client";

import { useReducer } from "react";

const initialFormState = {
  fields: {
    name: '',
    email: '',
    cgu: false,
  },
  submitting: false,
  error: false,
  success: false,
}

const reducer = (state, {action, key, value}) => {

  switch (action) {
    case 'fieldUpdate':
      return {...state, fields: {...state.fields, [key]: value }}
  
    case 'submit':
      // fetch
      return {...state, success: true}
    default:
      break;
  }
  
  return state
}

export default function App() {
  const [form, dispatch] = useReducer(reducer, initialFormState)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({action: 'submit'})
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => dispatch({action: 'fieldUpdate', key: 'name', value: e.target.value})}
            value={form.fields.name}
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => dispatch({action: 'fieldUpdate', key: 'email', value: e.target.value})}
            value={form.fields.email}
            autoComplete="email"
            required
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input
            id="cgu"
            name="cgu"
            type="checkbox"
            onChange={(e) => dispatch({action: 'fieldUpdate', key: 'cgu', value: e.target.checked})}
            checked={form.fields.cgu}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {form.submitting && <p>Submitting...</p>}
      {form.error && <p>{error}</p>}
      {form.success && <p>Success!</p>}
    </div>
  );
}
