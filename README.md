# ⛩️ KMA Score serverless API

This is a serverless API for KMA Score. It's written in TypeScript and runs on AWS Lambda.

## 📁 Project structure

This project is structured as a monorepo and based on [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design). ~~Actually, I don't know much about DDD, this is my pet project to practice it.~~

```
├── packages
│   ├── core                        - Contains all of your business logic following clean architecture and domain driven design
│   │   └── src
│   │       ├── application         - Define behaviour of the application, interact with services from outside packages/core
│   │       │   ├── ports           - Define contracts interfaces that should be honoured by the infrastructure.
│   │       │   ├── useCases        - Define application use cases which should be independent of the infrastructure. Use cases request and response will interact with outside world.
│   │       │   └── util
│   │       ├── container           - Contains the dependency injection container using `awilix`.
│   │       ├── domain              - Contain main domain business logic including entities, value objects, interfaces, enum
│   │       ├── infra               - Contains concrete lower level detail of outside world which should honours/implements contracts (interfaces) from application/ports.
│   │       └── shared              - Contains shared classes and interfaces across core package.
│   └── functions                   - Contains the Lambda functions.
│       └── src
│           ├── middleware          - Contains the middlewares.
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
$ pnpm i
```

### 🛠️ Setup

1. Create a `.secrets` file in the root directory and fill information from `.secrets.example`.
2. Set up the AWS CLI with your credentials.

```bash
$ aws configure
# if you want to use SSO
$ aws sso configure
```

If you want to use a different profile, you can set the `AWS_PROFILE` environment variable.

```bash
$ export AWS_PROFILE=your-profile
```

3. Login to AWS (if you use SSO)

```bash
$ aws sso login
```

4. Load secrets to AWS

```bash
$ pnpm sst secrets load .secrets
```

### 🏃‍♂️ Run

```bash
$ pnpm dev
```

### 🚀 Deploy

#### Before you deploy

- If you want to use your custom domain, you need to have a certificate in ACM.
- Set the secrets in `.secrets` file to deploy enviroment.

#### Deploy

```bash
$ pnpm deploy --stage [stage_name]
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
