import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import RingLoader from 'react-spinners/RingLoader';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { GoogleLogin } from 'react-google-login';

import './Formbasic.scss';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: '#fff';
`;

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      //   main: purple[500],
      main: 'rgb(80, 43, 207)'
    }
  }
});

const Formbasic = ({ handleLogin, loading, error }) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  var url = window.location.hostname.includes('localhost')
    ? 'http://localhost:8082/api/auth/google'
    : 'https://qpcode.herokuapp.com/api/auth/google';
  // var url = "https://qpcode.herokuapp.com/api/auth/google";
  const [form, setForm] = useState({ email: '', password: '' });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const { dispatch } = useContext(AuthContext);

  const responseGoogle = (response) => {
    setLoadingGoogle(true);

    var id_token = response.wc.id_token;
    const data = { id_token };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((resp) => resp.json())
      .then((data) => (console.log('Nuestro server', data), GoogleData(data)))
      .catch(console.log);
  };

  const GoogleData = (data) => {
    const dataUsuario = data.usuario;
    setLoadingGoogle(false);

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
  };
  // const logout = (response) => {
  //   console.log(response);
  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   console.log(auth2);

  //   if (auth2 != null) {
  //     auth2
  //       .signOut()
  //       .then(auth2.disconnect().then(console.log("LOGOUT SUCCESSFUL")));
  //   }
  // };
  return (
    <form
      className="formbasicLogin"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(form);
      }}
    >
      <div className="formbasicLogin__title mb-1">Iniciar Sesión</div>
      <div className="formbasicLogin__subtitle mb-5">
        Ingresa tus credenciales
      </div>
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          type="email"
          className="mb-5"
          value={form.email}
          placeholder="Ingresa tu correo electrónico"
          focused
          disabled={loading}
          onChange={handleForm}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          fullWidth
          type="password"
          className="mb-5"
          value={form.password}
          placeholder="Ingresa tu contraseña"
          focused
          disabled={loading}
          onChange={handleForm}
        />
      </ThemeProvider>
      <div className="formbasicLogin__buttons  mb-4">
        <div className="formbasicLogin__buttons__loginNormal">
          {form.password === '' || form.email === '' ? (
            <button type="button" className="button" disabled>
              Ingresar
            </button>
          ) : (
            <button
              // type="button"
              className="button"
              // onClick={() => {
              //   handleLogin(form);
              // }}
              disabled={loading}
            >
              {loading ? (
                <RingLoader color={'#fff'} css={override} size={40} />
              ) : (
                'Ingresar'
              )}
            </button>
          )}
        </div>
        <div className="formbasicLogin__buttons__loginGoogle">
          <GoogleLogin
            clientId="655844817021-astk30osumrqo4iebkrjcp7ndkhov0ns.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="formbasicLogin__buttons__loginGoogle__button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                {loadingGoogle ? (
                  <RingLoader
                    color={'rgb(80, 43, 207)'}
                    css={override}
                    size={40}
                  />
                ) : (
                  <>
                    <GoogleIcon style={{ marginRight: '10px' }} />
                    Login Google
                  </>
                )}
              </button>
            )}
            // buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            fullWidth
          />
        </div>
      </div>
      {/* 
      <GoogleLogout
        clientId="655844817021-astk30osumrqo4iebkrjcp7ndkhov0ns.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        onFailure={logout}
      ></GoogleLogout> */}

      <div className="formbasicLogin__texto">
        ¿No tienes una cuenta?
        <Link to="/register">
          <span className="formbasicLogin__texto--link">Registrate</span>
        </Link>
      </div>
    </form>
  );
};

export default Formbasic;
