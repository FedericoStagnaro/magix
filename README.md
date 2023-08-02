# Proyecto de microservicios en NestJS   <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="45" alt="Nest Logo" /></a>

## Description de proyecto

Magix es un proyecto para un negocio ficticio que consiste en proveer un sistema de gestion de articulos y venta via web, con calificacion de articulos , administracion de usuarios, permisos y autenticacion.
La finalidad es incorporar estrategias de desarrollo y experiencia en el proceso.

### Descripcion de modelo de negocio

| Contexto | "Tienda de Varitas Ollivanders en el Callejón Diagon" | 
|------|-------|
|  Garrick Ollivander nos encarga un sistema de software para la administracion de su negocio "Tienda de Varitas Ollivanders en el Callejón Diagon"    |   ![alt text](https://static.wikia.nocookie.net/harrypotter/images/c/c2/Harry_Potter_in_Ollivanders_PM.png/revision/latest?cb=20161208051711)    | 

## Objetivos
  ✅ Servicio de usuarios <br/>
  ✅ Autenticación y autorización basada en roles <br/>
  ⬜ Servicio de gestion de productos  <br/>
  ⬜ Servicio de venta <br/>
  ⬜ Servicio de adm. de envios <br/>
  ⬜ Manifiestos kubernetes y Docker <br/>
  ⬜ ... <br/>

## Tecnologías
  <p>
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
  </p>

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

## License

Nest is [MIT licensed](LICENSE).
