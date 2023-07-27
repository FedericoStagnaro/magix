# Proyecto de microservicios en NestJS   <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="45" alt="Nest Logo" /></a>

## Description de proyecto

Magix es un proyecto para un negocio ficticio que consiste en proveer un sistema de gestion de articulos y venta via web, con calificacion de articulos , administracion de usuarios, permisos y autenticacion.
La finalidad es incorporar estrategias de desarrollo y experiencia en el proceso.

### Descripcion de modelo de negocio

| Contexto | "Tienda de Varitas Ollivanders en el Callejón Diagon" | 
|------|-------|
|  Garrick Ollivander nos encarga un sistema de software para la administracion de su negocio "Tienda de Varitas Ollivanders en el Callejón Diagon"    |   ![alt text](https://static.wikia.nocookie.net/harrypotter/images/c/c2/Harry_Potter_in_Ollivanders_PM.png/revision/latest?cb=20161208051711)    | 



## Instalacion

1) Instalar dependencias 
  ```bash
  $ npm install
  ```
2) Descargar imagen de Nats y correr en Docker
3) Correr MySQL - Puerto 3306 (TODO: crear manifiesto con despliegue de imagen y volumen en docker) 

## Correr la app

```bash
# correr la api gateway
$ npm run start:dev

# correr cada microservicio
$ nest start --watch nombre_servicio
```

## Support


## License

Nest is [MIT licensed](LICENSE).
