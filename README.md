# ⛩️ KMA Score serverless API

This is a serverless API for KMA Score. It's written in TypeScript and runs on AWS Lambda.

## 📁 Project structure

This project is structured as a monorepo and based on [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design). ~~Actually, I don't know much about DDD, this is my pet project to practice it.~~

```
├── packages
│   ├── core                        - Contains all of your business logic following clean architecture and domain driven design/
│   │   └── src
│   │       ├── application         - Define behaviour of the application, interact with services from outside packages/core
│   │       │   ├── ports           - Define contracts interfaces that should be honoured by the infrastructure.
│   │       │   ├── prisma
│   │       │   └── util
│   │       ├── domain              - Contain main domain business logic including entities, value objects, interfaces, enum
│   │       └── infra               - Contains concrete lower level detail of outside world which should honours/implements contracts (interfaces) from application/ports.
│   └── functions                   - Contains the Lambda functions.
│       └── src
│           ├── middleware          - Contains the middlewares.
├── prisma                          - Contains the Prisma schema and migrations.
│   └── migrations                  - Contains the Prisma migrations.
└── stacks                          - Contains the app's infrastructure as code (IaC).
    └── layers                      - Contains the Lambda layers.
```

## 💻️ Development

### 📜 Presiquites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [AWS CLI](https://aws.amazon.com/cli/) (v2 or higher)

### 📦 Installation

```bash
$ npm i
```

### 🏃‍♂️ Run

```bash
$ npm run dev
```

### 🚀 Deploy

#### Before you deploy

- If you want to use your custom domain, you need to have a certificate in ACM.
- Prisma binary need to be generated before deploy.

#### Deploy

```bash
$ npm run deploy --stage [stage_name]
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
