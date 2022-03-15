import Particles from 'react-tsparticles';

import React from 'react';

const Particle = () => {
  const particlesInit = (main) => {
    // console.log(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'white'
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            // onHover: {
            //   enable: true,
            //   mode: 'repulse'
            // },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: 'rgb(80, 43, 207)'
          },
          links: {
            color: 'rgb(80, 43, 207)',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: false
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 3,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 50
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    />
  );
};
export default Particle;
