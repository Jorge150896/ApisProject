# Programa Top v13 - Tiempo Parcial - Assesment I

El objetivo de esta misión es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.
La misión consta de dos partes:

1. Construir un proyecto en React
2. Cuestionario

##

# Proyecto React: Apis Project

🚀 Link para ver el proyecto: [https://apisproject.netlify.app/](https://apisproject.netlify.app/)

## Vista:

[![APIsProject](https://i.imgur.com/REHSlgc.png)](https://apisproject.netlify.app/)

# Cuestionario

1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

   ```
   1ª ceremonia: Planificación del Sprint o Sprint Planning
   Marca el inicio de un sprint donde participa el equipo Scrum al completo;. Generalmente se divide en dos partes. En la primera parte el equipo se compromete con una serie de entregables. En la segunda parte del sprint se identifican las tareas que se deben completar para cumplir con los entregables. Esta reunión puede tomar de una a dos horas. El resultado de esta reunión es el sprint backlog, la lista de todas los items con sus tareas asociadas.

   2ª ceremonia: Scrum Diarias o Daily Meetings
   Es una reunión muy corta conocido comúnmente sólo como “La Daily”, es una reunión diaria de 15 minutos en la que participa exclusivamente el Development Team, generalmente al inicio del día, en que cada participante cuenta qué items ha completado, en cuál está trabajando y si ha tenido alguna dificultad.

   3ª ceremonia: Revisión del sprint Sprint Review
   Es la reunión que marca el final del sprint. Se revisan los items que se terminaron y los que no se terminaron. Generalmente están presentes todos los interesados en el proyecto.

   4ª ceremonia: Retrospectiva o Sprint Retrospective
   Esta es una reunión interna del equipo, el objetivo de la retrospectiva es hacer de reflexión sobre el último Sprint e identificar posibles mejoras para el próximo
   ```

2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

   En el diseño web, un wireframe o prototipos es una representación visual en escala de grises de la estructura y funcionalidad de una sola página web o aplicativo móvil.

   Podemos hacerlos de distintas formas:

   ```
    1. WIREFRAMES creados a mano.
    2. Mockflow es una aplicación para crear wireframes en la nube.
    3. Balsamiq Mockups es otra gran aplicación para crear tus wireframes o prototipos.
    4. Figma o Adobe XD, comunmente usados para el mockup con diseño, pero tambien cuenta con plantillas tipo wireframes.

   ```

3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

   `var` se usa desde el standard ecmascript5 (ES5), let y const fueron añadidos desde ecmascript2015 (ES2015 o ES6)
   `var` te permite hacer modificaciones en los valores almacenados, en el caso de `let`, este cambio también es permitido, pero tanto `let` como `const` son `block-scope` y `const` hace referencia a una constante, así que el valor de esta no puede ser cambiado una vez sea declarado, por otro lado, al declarar una variable como const debes asignarle un valor en ese momento, no después.

   Ejemplo imprimiendo numeros en un bucle:

   ```
   const numbersVar = () => {

     for (var i = 0; i < 6; i++) {
       setTimeout(function printer() {
         console.log(i);
       }, 100 * i);
     }
   };

   numbersVar(); // Imprime 6, 6, 6, 6, 6, 6,
   ```

   Todas las funciones que se ejecutan en el setTimeout guardan una referencia a i. Si las funciones se ejecutaran inmediatamente, el valor de i sería el esperado, pero como la ejecución ocurrirá eventualmente, el valor de i será el último valor que se le asigne, en este caso 6.

   Para arreglar este error o bug, se requiere que el valor a imprimir viva dentro de un scope que no se comparta entre todas las funciones. Esto lo podemos lograr usando let en lugar de var.

   ```
   const numbersLet = () => {
     for (let i = 0; i < 6; i++) {
       // Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

       setTimeout(function printer() {
         console.log(i);
       }, 100 * i);
     }
   };

   numbersLet(); //Imprime 0,1,2,3,4,5
   ```

   let tiene es “block scope”. Su valor es contenido dentro del bloque de código actual, en otras palabras entre dos llaves "{}". Lo que sucede es que en cada loop i es independiente, es como si estuviera definida en la primera línea del bloque del for-loop.

   Eso quiere decir, que cada i que se utiliza en las funciones es distinta. Por esta razón el valor no se comparte y obtenemos el valor que esperamos.

4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

   - git branch nombre-de-la-rama -> Con este creamos la rama
   - git checkout nombre-de-la-rama -> Con este nos movemos a la nueva rama
   - git checkout -b nombre-de-la-rama -> Con este realizamos los dos pasos anteiores en uno solo

5. Explicar la diferencia entre git merge y git rebase.

   - El rebase unifica las ramas dejando un arbol lineal.
     El merge aun deja el gráfico de las ramas.
   - El merge a la hora de querer unificar nos toca realizar un commit de más , este es el commit que muchos dicen commit innecesario . El rebase unifica sin necesidad de crear un nuevo commit .
   - Hay una diferencia bien importante que debemos tener en cuenta a la hora de mirar cual de los dos tomar . El rebase unifica las ramas perdiendo el historial de los commit y el merge no . Esto puede resultar bien importante cuando se necesite llevar o saber el historial de commit y se esta trabajando con otros compañeros en esa rama.

   - `git merge` debería usarse para subir cambios y nuevas features a la rama principal y `git rebase` debería ser usado cuando se trata de integrar ramas secundarias.
     Para la rama principal debemos tratar de mantener todo el detalle posible de la historia de trabajo, sin embargo para las ramas secundarias que deben unirse entre ellas, no es tan necesario hacer un seguimiento tan minucioso. 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull? 7. ¿Qué es el Virtual DOM? 8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

   Un pull request es una petición que el propietario de un fork de un repositorio hace al propietario del repositorio original para que este último incorpore los commits que están en el fork. En cambio un git pull es para bajar los cambios de un repositorio a nuestro proyecto en local.

7. ¿Qué es el Virtual DOM?

   El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

- [https://codepen.io/jorge-vicu-a-valle/pen/KKXyaXW?editors=1100](https://codepen.io/jorge-vicu-a-valle/pen/KKXyaXW?editors=1100)

## 👍 Sígueme en mis redes sociales:

<table>
  <tr>
      <td>
      <a href="https://jorge-vicuna.gitlab.io/jorge-vicuna/">
        <img src="https://jorge-vicuna.gitlab.io/jorge-vicuna/static/media/avatar.272f0e79.jpg" width="100px;" alt=""/>
        <br />
        <sub><b>Jorge Vicuña Valle</b></sub>
      </a>
    </td>
</Table>

- WebPersonal: (https://jorge-vicuna.gitlab.io/jorge-vicuna/)
- GitLab: (https://gitlab.com/jorge_vicuna)
- Youtube: (https://www.youtube.com/channel/UCW0m1TKKiN3Etejqx6h3Jtg)
- Linkedin: (https://www.linkedin.com/in/jorge-vicuna-valle/)
- Facebook: (https://www.facebook.com/jorge.vicunavalle/)

```

```
