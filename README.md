# node-product-shop
# To run docker file
    run command: docker-compose up

After docker instance started go to rest.http file, and you can run all the routes using this file using "vs code REST Client"

To access graphql api go to 

http://localhost:4000/graphql

# To run unit tests
    run command: npm run test

This will create test database and run the migrations on top of it and finally e2e and unit tests will run.

# To run in local machine

Prisma and dotenv should installed globally, then

1. cd src
2. npm install
3. update config/.dev.env file
4. npm run dev

# Folder Structure
1. config - configuratins including env files
2. const - Application constants
3. contrllers
4. errors
5. graphql - schemas for graphql code
6. helpers
7. interfaces
8. middlewares - To handle exceptions
9. prisma models
10. routes - all the routes defined in here
11. Services
12. startup
13. validations