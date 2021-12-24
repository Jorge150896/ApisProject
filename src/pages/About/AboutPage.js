import Particle from '../../components/Particle/Particle';
import { Col, Card, Button, Accordion } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import imagen from '../../assets/storeproject.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { FaGitlab } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

import './AboutPage.scss';

const AboutPage = () => {
  return (
    <>
      <div className="contentAbout">
        <Particle />
        <div className="row aboutSection">
          <Col xs={12} md={5} className="aboutSection__project">
            <Fade>
              <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                  <Card.Title>APIs Project</Card.Title>
                  <Card.Subtitle>Bootcamp Make It Real</Card.Subtitle>

                  <Card.Text>
                    Esta página tendrá la responsabilidad de listar una serie de
                    productos que se debe obtener consumiendo la api de Fake
                    Store API.
                  </Card.Text>
                  <a
                    href="https://fakestoreapi.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Button>Fake Store API</Button>
                  </a>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col xs={12} md={7} className="aboutSection__datos">
            <Fade>
              <Card>
                <Card.Header>Autor:</Card.Header>

                <Card.Img
                  variant="top"
                  src="https://jorge-vicuna.gitlab.io/jorge-vicuna/static/media/avatar.272f0e79.jpg"
                />
                <Card.Body>
                  <Card.Title>Jorge Vicuña Valle</Card.Title>
                  <Card.Subtitle>(Desarrollador Mobile/Web)</Card.Subtitle>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Descripción</Accordion.Header>
                      <Accordion.Body>
                        Soy Desarrollador Web/Mobile y Bachiller Ing.
                        Electrónica. Con lo que aprendí en mi carrera y mis
                        participaciones en concursos, he adquirido una
                        diversidad de conocimientos que ahora pongo en práctica,
                        tengo una gran capacidad tanto en la programación de
                        microcontroladores como en el desarrollo web y móvil.
                        Pertenezco a varios grupos innovadores, en los cuales he
                        conseguido los primeros lugares en eventos de
                        programación y robótica. Busco dirigir mi carrera en
                        temas de Internet of Things y Desarrollo de aplicativos
                        web y móviles.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Lo aprendido en el programa
                      </Accordion.Header>
                      <Accordion.Body>
                        1- Metodología SCRUM. <br />
                        2- Prototipado y Diseño.
                        <br />
                        3- Programación (Html, Css, JavaScript, Bootstrap, Sass
                        - React).
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="aboutSection__datos__icons">
                    <a
                      target="_blank"
                      href="https://gitlab.com/jorge_vicuna"
                      rel="noreferrer"
                      className="icon i-gitlab"
                    >
                      <FaGitlab style={{ width: '25' }} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jorge-vicuna-valle/"
                      rel="noreferrer"
                      className="icon i-linkedin"
                    >
                      <AiFillLinkedin style={{ width: '25' }} />
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/Jorge150896"
                      rel="noreferrer"
                      className="icon i-github"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCW0m1TKKiN3Etejqx6h3Jtg"
                      rel="noreferrer"
                      className="icon i-youtube"
                    >
                      <YoutubeIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/jorge_vicuna_valle/"
                      rel="noreferrer"
                      className="icon i-instagram"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/jorge.vicunavalle/"
                      rel="noreferrer"
                      className="icon i-facebook"
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                  <hr></hr>
                  <Card.Subtitle>
                    <a
                      target="_blank"
                      href="https://jorge-vicuna.gitlab.io/jorge-vicuna/"
                      rel="noreferrer"
                    >
                      jorge_vicuna
                    </a>
                    , Correo: jorge150896@hotmail.com
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
