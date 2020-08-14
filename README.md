# Burger Queen
![burger-queen](https://github.com/sandrahfiestas/LIM012-fe-burger-queen/blob/develop/src/images/logo.png)

Somos **Burguer Queen**, una cadena de comida 24hrs.

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
seguir creciendo, implementamos un sistema que nos ayuda a tomar los pedidos de
nuestros clientes.

 Tenemos 2 menús: uno para el desayuno:

> | Ítem                      | Precio S/.|
> | ------------------------- | --------- |
> | Café americano            | 5         |
> | Café con leche            | 7         |
> | Sandwich de jamón y queso | 10        |
> | Jugo de frutas natural    | 7         |
>
 Y otro menú para el resto del día:

> | Ítem                 | Precio |
> | -------------------- | ------ |
> | **Hamburguesas**     | **S/** |
> | Hamburguesa simple   | 10     |
> | Hamburguesa doble    | 15     |
> | **Acompañamientos**  | **S/** |
> | Papas fritas         | 5      |
> | Aros de cebolla      | 5      |
> | **Para tomar**       | **S/** |
> | Agua 500ml           | 5      |
> | Agua 750ml           | 7      |
> | Bebida/gaseosa 500ml | 7      |
> | Bebida/gaseosa 750ml | 10     |

 Nuestros clientes pueden escoger entre hamburguesas de res,
 de pollo, o vegetariana. Además, por \$ 1 adicional, pueden agregarle queso
 o huevo.

![desayuno](https://github.com/sandrahfiestas/LIM012-fe-burger-queen/blob/develop/src/images/desayuno.jpg)

La interfaz muestra dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. En donde se pueden elegir los _productos_ los mismo que serán mostrados en el _resumen del pedido_ con el
costo total.

![almuerzo](https://github.com/sandrahfiestas/LIM012-fe-burger-queen/blob/develop/src/images/desayuno.jpg)








### HTML y CSS

- [ ] HTML semántico
- [ ] CSS flexbox
- [ ] Sass
- [ ] Maquetación

### Frontend Development

- [ ] Componentes
- [ ] Manejo del estado

### PWA

- [ ] Concepto
- [ ] Utilidad
- [ ] Que es [Workbox](https://developers.google.com/web/tools/workbox)
- [ ] Qué es un `serviceWorker`


### React

- [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
- [ ] `props`
- [ ] [Manejo de eventos](https://es.reactjs.org/docs/handling-events.html)
- [ ] [Listas y keys](https://es.reactjs.org/docs/lists-and-keys.html)
- [ ] [Renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
- [ ] [Levantamiento de estados](https://es.reactjs.org/docs/lifting-state-up.html)
- [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
- [ ] [`CSS` modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [ ] [React Router](https://reacttraining.com/react-router/web)


### Firebase

- [ ] Firestore
- [ ] Firebase security rules
- [ ] Observables

### Testing

- [ ] Testeo de tus interfaces
- [ ] Testeo de componentes
- [ ] Testeo asíncrono
- [ ] Mocking

### Colaboración en Github

- [ ] Branches
- [ ] Pull Requests
- [ ] Tags

### Organización en Github

- [ ] Projects
- [ ] Issues
- [ ] Labels
- [ ] Milestones

### Buenas prácticas de desarrollo

- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

---

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

---

## Pistas / Tips

### Frameworks / libraries

- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue](https://es.vuejs.org/index.html)

### Herramientas

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)

### PWA

- [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
- [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
- [offlinefirst.org](http://offlinefirst.org/)
- [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

### Serverless

- [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
- [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
- [Firebase](https://firebase.google.com/)
- [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

### Cloud functions

- [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)
