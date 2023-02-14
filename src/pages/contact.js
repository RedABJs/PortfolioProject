import PageLayout from '../components/PageLayout';
import { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
// Villa, acá va lo suyo

export default function Contact() {
  // Form status management
  const [contactForm, setConctacForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  // Change the status of the form
  const handleChange = (e) => {
    setConctacForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission event
  const handleSumbit = async (e) => {
    // Stop the form from submitting and refreshing the page
    e.preventDefault();

    // Set the form when submitting it
    setConctacForm({
      nombre: '',
      telefono: '',
      email: '',
      asunto: '',
      mensaje: '',
    });

    // Send the data  in JSON format
    const JSONdata = JSON.stringify(contactForm);
    console.log(JSONdata);
  };

  return (
    <PageLayout title="Contact">
      <div className="h-screen p-5 flex">
        <div className="mt-16">
          <form onSubmit={handleSumbit}>
            <label htmlFor="name">Nombre</label>
            <input
              name="nombre"
              type="text"
              value={contactForm.nombre}
              onChange={handleChange}
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
              name="telefono"
              type="number"
              value={contactForm.telefono}
              onChange={handleChange}
            />
            <label htmlFor="email">Correo</label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              value={contactForm.email}
              onChange={handleChange}
            />
            <label htmlFor="asusnto">Asunto</label>
            <select name="asunto" id="asunto" onChange={handleChange}>
              <option value="" defaultChecked>
                ----Selecciona tus interes----
              </option>
              <option value="interes1">Interes 1</option>
              <option value="interes2">Interes 2</option>
              <option value="interes3">Interes 3</option>
              <option value="interes4">Interes 4</option>
              <option value="interes5">Interes 5</option>
            </select>
            <label htmlFor="mensaje">¿Cómo podemos ayudarte?</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="Escribe aquí..."
              value={contactForm.mensaje}
              onChange={handleChange}
            ></textarea>
            <br />
            <button>Enviar</button>
          </form>
          <div>
            <h1>Mapa</h1>
          </div>
        </div>
      </div>
      ;
    </PageLayout>
  );
}
