# Feathers Postgres Docker


## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.


## Tools used

- Custom implementation of `knex provider`
- Auth (jwt) hooks + bcrypt
- Postgres DB
- Runs in docker (with `nodemon` for development -- auto reloading of server)
- Adminer (runs on localhost:8081)


## Getting Started

- rename `env.example` to `.env`
- `docker-compose up`
- runs on `localhost:3000`
- you can load `insomnia-data.json` to insomnia client

## Seed data

Update docker-compose
`command: bash -c "yarn && yarn migrate &&  yarn dev"`

to

`command: bash -c "yarn && yarn migrate && yarn seed && yarn dev"`

then run `docker-compose up`

## Sample data

username: `dan`
password: `asdfasdf123`


## Hooks

1. authorize - user must be authorized before performing action
2. bind-user - if jwt token is present in headers.authorization it will be exposed in `params.user`


## Migrations 

Stored in `/migrations`. On every `docker-compose up`, they are ran to `latest`.
To run migrations outside of docker container you need to update `.env`  POSTGRES_HOST to `localhost`.
