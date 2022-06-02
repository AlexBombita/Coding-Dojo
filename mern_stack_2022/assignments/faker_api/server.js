const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this.id = faker.database.mongodbObjectId()
    }
}

class Company {
    constructor() {
        this.id = faker.database.mongodbObjectId()
        this.name = faker.company.companyName()
        this.street = faker.address.streetAddress()
        this.city = faker.address.cityName()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()       
    }
}

// api route "/api/users/new" that returns a new user
app.get( "/api/users/new", (req, res) => {   
    const newUser = new User()
    console.log(newUser)
    res.json(newUser);
});

//  api route "/api/companies/new" that returns a new company
app.get( "/api/companies/new", (req, res) => {
    const newCompany = new Company()
    console.log(newCompany);
    res.json(newCompany)
});

// api route "/api/user/company" that returns both a new user and a new company
app.get( "/api/user/company", (req, res) => {
    const newUser = new User()
    const newCompany = new Company()
    res.json({newCompany, newUser})
});

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "hi World" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
