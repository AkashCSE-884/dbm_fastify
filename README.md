Backend Microservice Project
This project is a backend microservice focused on efficiently handling REST API requests, boasting a capability to manage up to 5600 requests per second. Built using Fastify.js, a high-performance web framework for Node.js, and PostgreSQL for database management, utilizing stored functions for optimized data handling.

Project Structure
The project follows a structured approach for handling REST API requests. Key components include:

Routes: Defines the endpoints and their corresponding handlers for processing incoming requests.

Controllers: Implements the business logic for handling the requests received from the routes.

Services: Provides additional functionalities and services required by the controllers.

Models: Represents the data models and schemas used within the application.

Middlewares: Houses middleware functions for request processing and validation.

Configurations: Contains configuration files for environment variables, database connections, etc.

Utils: Includes utility functions and helper modules used throughout the project.

Technologies Used
Fastify.js: Utilized for its high performance and low overhead, ensuring efficient handling of HTTP requests.

PostgreSQL: Chosen for its reliability, scalability, and support for stored functions, optimizing data operations.

Performance
The project has been optimized to handle a high volume of requests, capable of processing up to 5600 requests per second, ensuring scalability and responsiveness.
