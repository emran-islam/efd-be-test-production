## EF Digital Software Engineer Test

## Overview

Hult/EF specialize in delivering immersive learning programs focused on the most critical global business skills for all levels of employees. Programs are run on a short period and new ones come and go frequently, to help with the maintenance of this, the marketing team would like an admin dashboard to manage program content. As the backend developer on this project you are expected to create an API that will faciliate CRUD requests from the new UI.

## Prerequisites

Ensure you have the following installed:

- **Node.js** 
- **npm** (Node Package Manager)
- **TypeScript** 

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/emran-islam/efd-be-test-production
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory based on `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Edit the `.env` file with your configuration details.

4. **Build the Project** (if using TypeScript)

    ```bash
    npx tsc
    ```
    ```

5. **Start the Application**

    ```bash
    npm start
    ```

6. **Run Tests** (Optional)

    ```bash
    npm test
    ```

## Access the Application

Open your browser and navigate to:
http://localhost:3000 

## Troubleshooting

- **Missing Dependencies**: Run `npm install` again if you encounter issues.
- **Build Issues**: Ensure your TypeScript configuration is correct.
- **Environment Variables**: Verify `.env` file settings.

