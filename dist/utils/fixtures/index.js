"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const faker_1 = require("@faker-js/faker");
const rosie_1 = require("rosie");
exports.ProductFactory = new rosie_1.Factory()
    //@ts-ignore
    .attr("id", faker_1.faker.number.int({ min: 1, max: 1000 }))
    .attr("name", faker_1.faker.commerce.productName())
    .attr("description", faker_1.faker.commerce.productDescription())
    //@ts-ignore
    .attr("stock", faker_1.faker.number.int({ min: 10, max: 100 }))
    //@ts-ignore
    .attr("price", +faker_1.faker.commerce.price());
