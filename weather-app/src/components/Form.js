import React, { useState } from "react";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return alert("Debe escribir una ciudad");
    newLocation(city);
    setCity("");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad o Código Postal"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="btn btn-primary input-group-text border"
            type="submit"
          >
            Buscar
          </button>

          <button
            className="btn btn-primary input-group-text border"
            onClick={() => setCity("")}
            disabled={!city}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
