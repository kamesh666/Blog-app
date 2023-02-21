# Blog-app

## Blogging-API

This is an api for a blogging app

---

## Requirements

1.User should be able to signup

2.User should be able to login with Passport using JWT

3.Implement basic auth

4.All users should be able to get blogs that have been published

5.Logged users should be able to create blogs

6.Owners should be able to update and delete blogs both published and drafts

7.Test application

## Setup

- Install NodeJS, mongodb
- pull this repo
- update env with example.env
- run npm start

## Models

---

### User

| field     | data_type | constraints |
| --------- | --------- | ----------- |
| id        | string    | required    |
| email     | string    | required    |
| firstname | string    | required    |
| lastname  | string    | required    |
| password  | string    | required    |

### Blog

| field        | data_type | constraints                                  |
| ------------ | --------- | -------------------------------------------- |
| id           | string    | default: date.now                            |
| created_at   | string    | required, {published or draft},default:draft |
| title        | string    | required,unique                              |
| description  | string    | required                                     |
| read_count   | number    | default: 0                                   |
| reading_time | string    |                                              |
| tags         | array     | []                                           |
| body         | string    | required                                     |
| timestamp    | date      | default: date.now                            |
| author       | object    | required                                     |
