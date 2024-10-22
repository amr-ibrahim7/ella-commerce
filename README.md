# E-Commerce Project

A modern e-commerce web application built using Vue 3 with Pinia for state management and Axios for fetching product data from external APIs.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [State Management (Pinia)](#state-management-pinia)

## Features
- **Product Categories**: Users can browse products by various categories such as **smartphones**, **groceries**, **fragrances**, **beauty**, and more.
- **Product Details**: View detailed information about individual products, including descriptions, prices, and related products.
- **Flash Deals**: Displaying discounted products using a **slice** of products from the API response.
- **Shopping Cart**: Add, delete, and manage items in the cart, with cart persistence using **localStorage**. This ensures the cart remains saved across sessions.
- **Responsive Design**: The website is fully responsive, adapting to various screen sizes for a seamless experience on both mobile and desktop devices.
- **Pinia State Management**: Pinia is used for centralized state management, making it easier to manage application state across components.
- **Vuetify UI**: The website utilizes **Vuetify**, a material design framework, for a modern and consistent UI design.
- **Swiper Integration**: **Swiper.js** is used to create interactive and smooth carousels for product images and featured promotions.

## Tech Stack
- **Vue 3**: A modern and reactive JavaScript framework for building UI components.
- **Vue Router**: For handling client-side routing and page navigation.
- **Pinia**: A state management solution that provides a simpler alternative to Vuex.
- **Axios**: For performing HTTP requests to fetch product data from an external API.
- **Vuetify**: A comprehensive UI library built on top of Material Design principles.
- **Swiper**: A powerful tool for building responsive and interactive carousels.
## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <https://github.com/amr-ibrahim7/ella-commerce.git>
cd e-commerce-project
npm install


Usage
Start the development server:

npm run serve
Then navigate to http://localhost:8080 to see the application in action.

Then navigate to http://localhost:8080 to see the application in action.

Project Structure

src/
│
├── assets/           # Static assets like images
├── components/       # Vue components
├── router/          # Vue Router configuration
├── stores/           # Pinia stores (state management)
│   ├── cart.js       # Manages shopping cart functionality
│   └── products.js   # Manages product categories, flash deals, etc.
├── views/            # Main views for different pages
├── App.vue           # Root component
└── main.js           # Application entry point

State Management (Pinia)
This project uses Pinia for state management, with two main stores:

productsModule: Handles fetching and managing product data, including:

Categories such as smartphones, groceries, beauty, and more.
Flash deals, new products, and product details.
API integration using Axios to retrieve product data from external sources.
cartStore: Manages the shopping cart functionality, with features such as:
Adding products to the cart.
Deleting products from the cart.
Persisting the cart using localStorage so that items remain saved across sessions.
