# Product Management API

## Overview

This project is a simple RESTful API that provides CRUD operations for managing products. It interacts with a database that stores product details, including ID, name, price, and description.

## Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update a product's details
- Delete a product
- Search for a product by its name

## Technologies Used

- Backend: Node.js with Express.js
- API Testing: Postman
- XAMPP for database management

## API Endpoints

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | /products        | Retrieve all products        |
| GET    | /products/:id    | Retrieve a product by ID     |
| POST   | /products        | Create a new product         |
| PUT    | /products        | Update a product             |
| DELETE | /products        | Delete a product             |
| GET    | /products/search | Search for a product by name |

## Example JSON for Creating a Product

```json
{
  "name": "Example Product",
  "price": 100.5,
  "description": "This is an example product."
}
```

## License

This project is licensed under the MIT License.

---

Feel free to contribute to this project by submitting pull requests or reporting issues!
