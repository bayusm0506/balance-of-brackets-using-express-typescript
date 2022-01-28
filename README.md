# Brackets

Simple RESTFul API to make balance of brackets. Check Valid Parentheses with a Stack

## Clone Project

```bash
https://github.com/bayusm0506/brackets.git
cd /brackets
```

## Structure Folder

```
.
├── jest.config.js
├── output
│   ├── contoh-1.png
│   ├── contoh-2.png
│   ├── contoh-3.png
│   ├── contoh-4.png
│   ├── contoh-5.png
│   ├── contoh-6.png
│   └── unit-test.png
├── package.json
├── README.md
├── src
│   ├── config
│   │   └── app.ts
│   ├── controllers
│   │   └── brackets.ts
│   ├── routes
│   │   └── bracket.ts
│   ├── server.ts
│   └── __tests__
│       └── bracket.test.ts
├── tsconfig.json
```

## Installation

```bash
# Install use npm
npm install

# Install use yarn
yarn install
```

## Usage

```bash
# running project
npm run dev
or
yarn dev
```

## API

#### BRACKET
```sh
POST : /api/bracket
```
```json
JSON : 
{
    "input" : "()"
}
```
#### EXAMPLE OUTPUT
![enter image description here](https://github.com/bayusm0506/brackets/blob/master/output/contoh-1.png)

``` 
#### UNIT TESTING
running
yarn test / npm run test
```

#### EXAMPLE UNIT TESTING
![enter image description here](https://github.com/bayusm0506/brackets/blob/master/output/unit-test.png)

```
#### APP INFO

#### Author originally
Bayu Setra Maulana [bayusm.com]

If you want to declare json and endpoint without manual, you can import below collection
Postman Collection : https://www.getpostman.com/collections/fb5a3a39d854d4820e06
```
