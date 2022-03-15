import React, { useState, useEffect } from 'react';
import './Formulario.scss';

export default function Formulario(props) {
  // estado del componente
  const [nameTarea, setNameTarea] = useState('');

  // funcion propia del componente que puede emitir 2 funciones dependiendo de una propiedad
  const handleClick = (event) => {
    // prevenir redirección
    event.preventDefault();

    if (!props.editable) {
      // registrar una nueva tarea
      props.handleRegistrar(nameTarea);
    } else {
      // editar una tarea

      props.handleEditar({
        id: props.editable._id,
        nameTarea: nameTarea,
        completado: props.editable.completado
      });
    }
    // limpiar el formulario
    setNameTarea('');
  };

  // dos ciclos de vida, cuando el componente se monta por primera vez y cuando el componente se actualiza segun una propiedad de su estado
  useEffect(() => {
    if (props.editable) {
      setNameTarea(props.editable.nameTarea);
    }
  }, [props.editable]);

  return (
    <form className="col-6 ml-auto mr-auto mb-5 designForm">
      <div className="form-group">
        <label>Titulo de la tarea</label>
        <input
          type="text"
          className="form-control"
          value={nameTarea}
          onChange={(e) => setNameTarea(e.target.value)}
        />
        <small className="form-text text-muted">
          Escribe la tarea que deseas registrar
        </small>
      </div>
      <div>
        <button
          type="submit"
          className={props.editable ? 'btn btn-warning' : 'btn btn-primary'}
          onClick={handleClick}
          disabled={!nameTarea}
        >
          {props.editable ? 'Editar' : 'Registrar'}
        </button>
      </div>
    </form>
  );
}
