# (Odyssey Course) Intro to GraphQL with TypeScript

Welcome to the starter code for **Intro to GraphQL with TypeScript**. You can find the [course lessons and instructions](https://apollographql.com/tutorials/intro-typescript) on Odyssey, [Apollo](https://apollographql.com)'s learning platform.

## How to use this repo

The course will walk you step by step on what to do. This codebase is the starting point of your journey!

Navigate to the root of the project directory, and run the following commands.

```
npm install && npm run dev
```

The `final` branch of this repo contains the final stage of the course, with all of the steps and code completed! If you get stuck, you can refer to it and compare your code.

## Getting Help

This repo is _not regularly monitored_.

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey). You can also [join the Apollo Discord](https://discord.gg/graphos).


# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official TypeScript documentation]([https://docs.gradle.org](https://www.typescriptlang.org/docs/))


### Installing Apollo Server Dependency

`npm install @apollo/server graphql graphql-tag`


### Setting up our data source

`npm install @apollo/datasource-rest`


### Project Structure

📂 src
 ┣ 📂 datasources

 ┣ 📄 context.ts

 ┣ 📄 graphql.d.ts

 ┣ 📄 index.ts

 ┣ 📄 models.ts

 ┣ 📄 resolvers.ts

 ┣ 📄 schema.graphql

 ┗ 📄 types.ts

### Installing Dependencies


`npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers`


### Generating Types

`npm run generate`
