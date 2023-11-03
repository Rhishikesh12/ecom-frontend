<p align="center">
  <img src="https://github.com/Rhishikesh12/Shopie-E-Commerce-Website/assets/72931748/8face3f2-c7a2-4f89-9a23-6a47199a92e3" alt="Image" height="80" width="300">
</p>

# **Shopie E-Commerce Website**

Shopie E-Commerce Website is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides users with the ability to explore different varieties of clothing, add products to their cart, and make purchases. The website features a modern UI design for an enhanced user experience.

I utilized JWT for authentication, Cryptojs for password encryption/decryption, <b>Stripe</b> for payment processing, built an API, and tested it using Postman

## **Screenshots**

![image](https://github.com/Rhishikesh12/Shopie-E-Commerce-Website/assets/72931748/8397a52c-353c-48d7-b274-8a6fc79e297d)

![image](https://github.com/Rhishikesh12/Shopie-E-Commerce-Website/assets/72931748/9e8a4387-397e-4b0c-9a80-fb329440672b)

![image](https://github.com/Rhishikesh12/Shopie-E-Commerce-Website/assets/72931748/947ccb3f-39fa-41a5-9b7d-8ba8e37f070a)

![image](https://github.com/Rhishikesh12/Shopie-E-Commerce-Website/assets/72931748/7c4c4685-08ec-44c3-b024-42305eb39e42)



## **Installation**

To run the project locally, follow these steps:

1. Clone the repository:

    To Clone Frontend : 
    ```
    git clone --single-branch -b main https://github.com/Rhishikesh12/Shopie-E-Commerce-Website.git .
    ```

    To Clone Backend : 
    ```
    git clone --single-branch -b backend https://github.com/Rhishikesh12/Shopie-E-Commerce-Website.git .
    ```
    
    Please create a folder named "Backend/Frontend" in your local storage and then execute the provided clone commands. The code will extracted directly to your folder.
   

1. Install the dependencies for the both ( Backend & Frontend ):
    
    ```
    npm install
    ```
    
4. Create a **`.env`** file in the **`Backend`** directory and provide the necessary environment variables, such as:
    
    ```
    PORT=5000
    MONGODB_URI=mongodb://localhost/shopie
    PASS_SEC = key to encrypt and decrypt password (set on your own)
    JWT_SECRET=your_jwt_secret (set on your own)
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
    
    Replace **`mongodb://localhost/shopie`** with your MongoDB connection string, **`your_jwt_secret`** with your preferred JWT secret key, and **`your_stripe_secret_key`** with your Stripe secret key.
    
5. To Run the Frontend:
    
    ```
    npm start 
    ```
    
    The Frontend will start running on **`http://localhost:3000`**.
    
6. To Run the Backend:
    
    ```
    npm run dev
    ```
    
    The Backend will start running on **`http://localhost:5000`**.
    

## **Technologies Used**

The following technologies and libraries were used to build this project:

- MongoDB: A NoSQL database used to store product and user data.
- Express.js: A web application framework used for building the server-side API.
- React.js: A JavaScript library used for building the user interface.
- Node.js: A JavaScript runtime environment used for running the server-side code.
- JWT (JSON Web Token): Used for user authentication and authorization.
- Crypto.js: Used for encrypting and decrypting user passwords.
- Stripe: A payment gateway used for processing payments.
- Postman: A tool used for testing the API endpoints.

## **Conclusion**

Overall, this project served as a practical learning experience for me to grasp the fundamentals of the MERN stack, including user authentication, data encryption, integrating a payment gateway, and building and testing a RESTful API.
# ecom-frontend
