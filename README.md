# Product Management API 🚀

## Overview 🎯

Welcome to your go-to Product Management API! This nifty little RESTful API lets you do all the CRUD magic — create, read, update, and delete products like a boss. It chats with a database that holds your product’s secrets: ID, name, price, and description.

## Features ✨

- Add a shiny new product
- Fetch all your awesome products
- Peek at a single product by its ID
- Give your product a makeover (update)
- Say goodbye and delete a product
- Hunt down a product by its name like a pro

## Technologies Used 🛠️

- Backend wizardry with Node.js + Express.js
- Tested and tamed using Postman
- XAMPP handling the database backstage

## API Endpoints 📡

| Method | Endpoint         | What It Does                     |
| ------ | ---------------- | --------------------------------|
| GET    | /products        | Grab all your products           |
| GET    | /products/:id    | Check out a product by its ID    |
| POST   | /products        | Make a fresh new product         |
| PUT    | /products        | Update the deets of a product    |
| DELETE | /products        | Send a product packing           |
| GET    | /products/search | Search for that one product name |

## Example JSON for Creating a Product 📝

```json
{
  "name": "Example Product",
  "price": 100.5,
  "description": "This is an example product."
}
