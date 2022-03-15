import React from 'react';
import PropTypes from 'prop-types';
import './ListaTareas.scss';

export default function ListaTareas({
  listaTareas,
  handleToggle,
  handleEliminar,
  recibirEditable
}) {
  const botonIncompleta = (id, nameTarea, estado) => (
    <button
      className="btn btn-primary mr-2 mb-2"
      onClick={() => handleToggle(id, nameTarea, estado)}
    >
      Marca incompleta
    </button>
  );
  const botonCompleta = (id, nameTarea, estado) => (
    <button
      className="btn btn-primary mr-2 mb-2"
      onClick={() => handleToggle(id, nameTarea, estado)}
    >
      Marcar completada
    </button>
  );
  const botonEditar = (tarea) => (
    <button className="btn btn-warning" onClick={() => recibirEditable(tarea)}>
      Editar
    </button>
  );
  const botonEliminar = (id) => (
    <button className="btn btn-danger" onClick={() => handleEliminar(id)}>
      Eliminar
    </button>
  );

  return (
    <div className="row " style={{ width: '100%' }}>
      {listaTareas.map((tarea) => (
        <div className="col-4 mb-4" key={tarea._id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{tarea.nameTarea}</h5>
              <p className="card-text">
                {tarea.completado ? 'Tarea completada' : 'Tarea incompleta'}
              </p>
              <p>{tarea.id}</p>
              {tarea.completado
                ? botonIncompleta(tarea._id, tarea.nameTarea, tarea.completado)
                : botonCompleta(tarea._id, tarea.nameTarea, tarea.completado)}
              {tarea.completado ? botonEliminar(tarea._id) : botonEditar(tarea)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ListaTareas.propTypes = {
  listaTareas: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleEliminar: PropTypes.func.isRequired,
  recibirEditable: PropTypes.func.isRequired
};
