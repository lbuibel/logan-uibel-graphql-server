# GraphQL Server Example (SDL-first)

This project utilizes GraphQL with Node.js, [Prisma](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), and [apollo-server](https://www.npmjs.com/package/apollo-server), and the [nexus-prisma](https://github.com/graphql-nexus/nexus-schema-plugin-prisma) plugin. It is based on a SQLite database, you can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db).

## Server Requirements
- [x] Prisma as your data modeling tool
- [x] Docker-based PostgreSQL, MySQL, or MongoDB as your data store
- [x] At least 3 Query resolvers to get data from your server.  See [query.js](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/src/query.js), specific routes can be searched for based on parameter (line 23) or all of the routes can be returned with this query.
- [x] At least 2 Mutation resolvers allowing users to create, update, or upsert an item. See [mutation.js](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/src/mutation.js)
- [x] At least 1 Mutation resolver allowing users to delete an item. See [mutation.js](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/src/mutation.js)
- [x] Your datastore will contain at least 25 items. [route_data.json](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/prisma/seed_files/route_data.json) & [seed.js](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/prisma/seed.js)
- [x] Your app will be deployable locally using Docker and will have seed data entered into the datastore.
- [x] All of your source code will be properly uploaded to GitHub
- [x] Your ReadMe file will accurately describe your server install and run process and how to use the APIs

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/lbuibel/DGM4790-graphql-server
```

Install npm dependencies:

```
cd DGM4790-graphql-server
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

<Details><Summary><strong>Starting from scratch</strong></Summary>

*The scripts below can be found in [package.json](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/package.json)

If you already have an exhisting Docker container running, and want to restart, run the `nuke` script.

```
npm run nuke
```

Create and migrate a new database by running the `generate` script:

```
npm nun createDB
```

Generate the Prisma Client code by running the `generate` npm script:

```
npm nun seed
```

Seed the database by running the `seed` npm script.  This loads 25 individual routes that can be found in [route_data.json](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/prisma/seed_files/route_data.json).

- For how these routes are seeded see [seed.js](https://github.com/lbuibel/DGM4790-graphql-server/blob/master/prisma/seed.js)

```
npm nun generate
```
</Details>



### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve a specific route along with its name, type, miles, starting and final elevation

```graphql
query getRoute {
  Route(id: __ROUTE_ID__) {
    id
    name
    type
    miles
    startingElevation
    finalElevation
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Retrieve all routes

```graphql
query allRoutes {
  Routes {
    id
    name
    miles
  }
}
```

#### Creating a route

```graphql
mutation createRoute {
  createRoute(
    name: "Test Route",
    type: "paved",
    miles: 50
    startPoint: "40°25'56.6"N 111°44'55.3"W",
    endPoint: "40°25'51.8"N 111°36'49.6"W",
    startingElevation: 5070,
    finalElevation: 8060,
    iframeData: "https://www.google.com/maps/...
  ) 
  {
    name,
    id,
    createdAt,
  }
}
```

#### Update and exhisting route

```graphql
mutation updateRoute {
  updateRoute (
    id: __ROUTE_ID__,
    name: "Updated Route",
    type: "paved",
    miles: 50,
    startPoint: "home",
    endPoint: "work",
    startingElevation: 100,
    finalElevation: 200,
    iframeData: "updated iframe"
  ) 
  {
    name,
    id,
    createdAt,
    updatedAt,
  }
}
```

#### Delete and exhisting route

```graphql
mutation deleteRoute {
  deleteOneRoute (where: {
    id: __ROUTE_ID__
  }) {
  id,
  name,
  }
}
```

> **Note**: You need to replace the `__POST_ID__`-placeholder with an actual `id` from a `Post` item. You can find one e.g. using the `allRoutes`-query.

#### Search for posts with a specific title or content

```graphql
query filterRoutes {
  Routes(searchString: "Canyon") {
    id
    name
    miles
  }
}
```

</Details>
