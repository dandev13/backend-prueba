## Desarrollo Backend - Prueba Técnica

## Arquitectura de Microservicios Desarrollado en: NestJs (Framework de Nodejs)

## Base de datos NoSql: MongoDB

## Correr Proyecto:

El proyecto se encuentra dockerizado, por lo tanto, encontremos los archivos Dockerfile y Docker-compose.
De esta forma si tenemos docker instalado y ejecutandose podemos usar el sgte cmd para ejecutar los servicios de la BD y del Microservicio:
$ docker compose up -d

O podemos correr solo la base de datos de mongo en Docker y el microservicio local:
$ npm install
$ nest start --watch
