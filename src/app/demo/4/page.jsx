"use client";

export default function App() {
  // Gérer l'état du formulaire avec useState puis refacto avec useReducer

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            onChange={(e) => {}}
            value=""
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => {}}
            value=""
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
            onChange={(e) => {}}
            checked={false}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {submitting && <p>Submitting...</p>}
      {error && <p>{error}</p>}
      {success && <p>Success!</p>}
    </div>
  );
}
