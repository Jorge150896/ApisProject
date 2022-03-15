import React, { useState, useEffect, useContext } from 'react';
import Formulario from '../../components/Formulario/Formulario';
import ListaTareas from '../../components/ListaTareas/ListaTareas';
// import tareas from '../../utils/tareas';
import {
  getTareas,
  createTarea,
  deleteTarea,
  updateTarea
} from '../../services/TareaService';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../auth/authContext';

import './TodoPage.scss';

export default function TodoPage() {
  // Estados del componente
  const [listaTareas, setListaTareas] = useState([]);
  const [editable, setEditable] = useState(null);
  const { user } = useContext(AuthContext);
  const [loadPage, setLoadPage] = useState(false);

  const getTareasFromApi = async () => {
    setLoadPage(false);

    getTareas().then((data) => {
      if (data.tareas) {
        setListaTareas(data.tareas.reverse());
      }
    });
  };
  // Ciclo de vida con hook useEffect
  useEffect(() => {
    getTareasFromApi();
  }, [loadPage]);

  // función para agregar una nueva tarea
  const handleRegistrar = async (tarea) => {
    const tareaNueva = {
      nameTarea: tarea
    };
    createTarea(tareaNueva, user.userApisProject.token).then((data) => {
      setLoadPage(true);
      console.log(data);
      if (data.status === 1) {
        toast.success(`Tarea Creada`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
      } else {
        toast.error(`${data.msg}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
      }
    });
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id, nameTarea, estado) => {
    const tareaEditada = {
      nameTarea: nameTarea,
      completado: !estado
    };
    updateTarea(id, tareaEditada, user.userApisProject.token).then((data) => {
      setLoadPage(true);
      console.log(data);
      if (data.status == 1) {
        toast.success(`Estado Cambiado`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
      } else {
        toast.error(`${data[0].msg}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
      }
    });
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    const tareaEditada = {
      nameTarea: nuevaTarea.nameTarea
    };
    updateTarea(nuevaTarea.id, tareaEditada, user.userApisProject.token).then(
      (data) => {
        setLoadPage(true);
        console.log(data);
        if (data.status == 1) {
          toast.success(`Tarea Editada`, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000,
            pauseOnHover: false
          });
        } else {
          toast.error(`${data.msg}`, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 3000,
            pauseOnHover: false
          });
        }
      }
    );
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    deleteTarea(id, user.userApisProject.token).then((data) => {
      setLoadPage(true);
      toast.success(`Tarea Eliminada`, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        pauseOnHover: false
      });
    });
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <div className="todoApp">
          <ToastContainer autoClose={1500} />

          <Formulario
            handleRegistrar={handleRegistrar}
            handleEditar={handleEditar}
            editable={editable}
          />
          <ListaTareas
            listaTareas={listaTareas}
            handleToggle={handleToggle}
            handleEliminar={handleEliminar}
            recibirEditable={recibirEditable}
          />
        </div>
      </div>
    </>
  );
}
