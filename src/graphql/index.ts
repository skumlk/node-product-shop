import { join } from 'path';
import { readFileSync } from 'fs';
import { buildSchema } from "graphql";
import resolvers from "./resolvers";
const readdir = require('fs-readdir-recursive')

const gqlFiles = readdir(__dirname)
    .filter((item: string) => { return item.endsWith(".graphql")});

let typedefs = '';

gqlFiles.forEach((file: string) => {
  typedefs += readFileSync(join(__dirname, file), {
    encoding: 'utf8',
  });
});

var graphqlSchema : any = {
    schema: buildSchema(typedefs),
    rootValue: resolvers,
    graphiql: true,
}

export default graphqlSchema;