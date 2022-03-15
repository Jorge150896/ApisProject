import React, { useState, useContext } from 'react';
import robot2 from '../../assets/svg/logo/robotb_1.svg';
import brazorobot from '../../assets/svg/logo/brazorobot.svg';
import drone from '../../assets/svg/logo/drone.svg';
import Particle from '../../components/Particle/Particle';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/LoginService';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { Fade } from 'react-reveal';
import './LoginPage.scss';
import Formbasic from '../../components/Formbasic/Formbasic';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const getUserFromApi = (form) => {
    // registerUser({ email: form.email, password: form.password }).then(

    loginUser(form).then((data) => {
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
        console.log(data);

        setLoading(false);
        toast.error(`${data.msg}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
          pauseOnHover: false
        });
        setError(data.msg);
      }
    });
  };
  const handleLogin = async (form) => {
    setLoading(true);
    getUserFromApi(form);
  };
  return (
    <>
      <div className="login">
        <div className="login__content">
          <Particle />
          <ToastContainer autoClose={1500} />

          <div className="loginStyled">
            <Fade left>
              <div className="login__content__left">
                <Formbasic
                  handleLogin={handleLogin}
                  loading={loading}
                  error={error}
                />
              </div>
            </Fade>
            <Fade right>
              <div className="login__content__right">
                <img
                  src={robot2}
                  alt=""
                  className="login__content__right__robot"
                />
                <img
                  src={drone}
                  alt=""
                  className="login__content__right__drone"
                />
                <img
                  src={brazorobot}
                  alt=""
                  className="login__content__right__brazorobot"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default LoginPage;
