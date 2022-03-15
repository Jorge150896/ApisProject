import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import RingLoader from 'react-spinners/RingLoader';
import { AuthContext } from '../../auth/authContext';
import { registerUser } from '../../services/RegisterService';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { css } from '@emotion/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterPage.scss';
import { Fade } from 'react-reveal';
import ParticleTwo from '../../components/ParticleTwo/ParticleTwo';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: '#fff';
`;

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(80, 43, 207)'
    }
  }
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const [form, setForm] = useState({
    names: '',
    lastNames: '',
    email: '',
    password: '',
    password2: '',
    rol: 'USER_ROLE'
  });

  const getUserFromApi = (form) => {
    registerUser(form).then((data) => {
      if (data.status === 1) {
        const dataUsuario = data.usuario;

        setLoading(false);
        const userApisProject = {
          idUser: dataUsuario.uid,
          names: dataUsuario.names,
          lastNames: dataUsuario.lastNames,
          career: dataUsuario.career,
          university: dataUsuario.university,
          actualWork: dataUsuario.actualWork,
          nameCompany: dataUsuario.nameCompany,
          linkCV: dataUsuario.linkCV,
          description: dataUsuario.description,
          redLinkedin: dataUsuario.redLinkedin,
          redGitLab: dataUsuario.redGitLab,
          redGitHub: dataUsuario.redGitHub,
          redYoutube: dataUsuario.redYoutube,
          redInsta: dataUsuario.redInsta,
          redFace: dataUsuario.redFace,
          TecnologyOne: dataUsuario.TecnologyOne,
          TecnologyTwo: dataUsuario.TecnologyTwo,
          TecnologyThree: dataUsuario.TecnologyThree,
          activeMember: dataUsuario.activeMember,
          img: dataUsuario.img,
          phone: dataUsuario.phone,
          address: dataUsuario.address,
          email: dataUsuario.email,
          token: data.token
        };
        const action = {
          type: types.login,
          payload: { userApisProject }
        };

        dispatch(action);
        navigate('/perfil', {
          replace: true
        });
      } else {
        setLoading(false);
        toast.error(`${data[0].msg}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
      }
    });
  };

  const handleRegister = async (form) => {
    if (form.password == form.password2) {
      setLoading(true);
      getUserFromApi(form);
    } else {
      toast.error('Contraseñas no coinciden', {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        pauseOnHover: false
      });
    }
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="register">
        <ParticleTwo />

        <ToastContainer autoClose={1500} />
        <Fade>
          <form
            className="register__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(form);
            }}
          >
            <Link to="/login">
              <div className="register__form__back mb-1">
                <ArrowBackIosIcon />
                Regresar
              </div>
            </Link>

            <div className="register__form__title mb-1">Registro</div>

            <div className="register__form__subtitle mb-5">
              Por favor complete todos los campos para registrarse
            </div>
            <ThemeProvider theme={theme}>
              <div className="row register__form__datos">
                <div className=" col col-12 col-md-6 register__form__datos__left">
                  <TextField
                    id="outlined-basic"
                    label="Names *"
                    variant="outlined"
                    name="names"
                    value={form.names}
                    fullWidth
                    type="text"
                    className="mb-4"
                    placeholder="Ingresa tu Nombre"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    fullWidth
                    type="number"
                    value={form.phone}
                    className="mb-4"
                    placeholder="Ingresa tu Telefono"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                </div>
                <div className="col col-12 col-md-6 register__form__datos__right">
                  <TextField
                    id="outlined-basic"
                    label="LastNames"
                    variant="outlined"
                    name="lastNames"
                    value={form.lastNames}
                    fullWidth
                    type="text"
                    className="mb-4"
                    placeholder="Ingresa tus Apellidos"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={form.address}
                    fullWidth
                    type="text"
                    className="mb-4"
                    placeholder="Ingresa tus Dirección"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                </div>
              </div>
              <div className="row  register__form__datos">
                <div className="col col-12 ">
                  <TextField
                    id="outlined-basic"
                    label="Email *"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    fullWidth
                    type="email"
                    className="mb-4"
                    placeholder="Ingresa tu Correo Electrónico"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                </div>
              </div>
              <div className="row register__form__datos">
                <div className="col col-12 col-md-6 register__form__datos__left">
                  <TextField
                    id="outlined-basic"
                    label="Password *"
                    variant="outlined"
                    name="password"
                    fullWidth
                    type="password"
                    value={form.password}
                    className="mb-4"
                    placeholder="Ingresa tu Contraseña"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                </div>
                <div className="col col-12 col-md-6 register__form__datos__right">
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password *"
                    variant="outlined"
                    name="password2"
                    fullWidth
                    type="password"
                    value={form.password2}
                    className="mb-5"
                    placeholder="Confirma tu Contraseña"
                    focused
                    disabled={loading}
                    onChange={handleForm}
                  />
                </div>
              </div>
              <div className="row register__form__datos">
                <div className=" register__form__datos__button">
                  {form.password === '' ||
                  form.email === '' ||
                  form.password2 === '' ||
                  form.names === '' ? (
                    <button type="button" className="button" disabled>
                      Registrarme
                    </button>
                  ) : (
                    <button
                      className="button register__form__textButton"
                      disabled={loading}
                    >
                      {loading ? (
                        <RingLoader color={'#fff'} css={override} size={40} />
                      ) : (
                        'Registrarme'
                      )}
                    </button>
                  )}
                </div>
              </div>
            </ThemeProvider>
          </form>{' '}
        </Fade>
      </div>
    </>
  );
};

export default RegisterPage;
