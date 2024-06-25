## Project Overview:
Delish is a comprehensive food ordering application developed using the MERN stack. It allows users to browse a variety of food items, add them to their cart, and place orders. It also includes features for checking order status and viewing order history. The application also includes an admin panel for managing food items, user accounts, and orders.

## Features:
- ### User Authentication:
      Allows users to register and login to their accounts.
- ### Browse Food Items:
      Users can browse a wide range of food items available on the platform.
- ### Add/Remove Items from Cart:
      Users can add food items to their cart and remove them as needed.
- ### Place Orders:
      Users can proceed to checkout and place orders for their selected items.
- ### View Order History:
      Users can view their order history to track past purchases.
- ### Admin Panel:
      An admin panel is available for managing food items, user accounts, and orders. Admins can add new food items, update existing ones, delete items, view and manage user orders, including order details and status updates.

## Technologies Used
- ### Frontend:
  - React
  - React Router
  - Axios
  - React Toastify
- ### Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Stripe for Payment Processing

## Steps:
1. Clone the repository:
      git clone https://github.com/dhriti-exe/Delish.git
      cd Delish
2. Install Dependencies:
      cd frontend
      npm install
      cd ../backend
      npm install
      cd ../admin
      npm install
3. Environment Variables:
    - Create a `.env` file in the `backend` directory and add the following:
        - `MONGO_URI=your_mongo_db_connection_string`
        - `STRIPE_SECRET_KEY=your_stripe_secret_key`
4. Start the Development Servers:
      cd backend
      npm run server
      cd ../frontend
      npm run dev
      cd ../admin
      npm run dev

## API Endpoints:
- ### User Authentication:
    - `POST /api/auth/register`: Register a new user.
    - `POST /api/auth/login`: Login a user.
- ### Food Items:
    - `GET /api/food/list`: Get all food items.
    - `POST /api/food/add`: Add a new food item.
    - `PUT /api/food/update/:id`: Update a food item.
    - `DELETE /api/food/delete/:id`: Delete a food item.
- ### Cart:
    - `POST /api/cart/add`: Add an item to the cart.
    - `POST /api/cart/remove`: Remove an item from the cart.
    - `GET /api/cart`: Get cart items.
- ### Orders:
    - `POST /api/orders/place`: Place a new order.
    - `GET /api/orders`: Get user orders.
