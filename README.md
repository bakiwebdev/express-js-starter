# Express API Starter with TypeScript

A basic starter for an Express.js API with TypeScript.

## Installation

Before you begin, ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/bakiwebdev/express-js-starter.git
```

2. Navigate to the project directory:

```bash
cd express-js-starter
```

3. Install the dependencies:

```bash
npm install
```

## Usage

The following npm scripts are available:

- `start`: Builds and runs the production version of the API.
- `dev`: Runs the API in development mode using `nodemon`, which automatically restarts the server when changes are detected.
- `build`: Lints the code and compiles TypeScript into JavaScript.
- `lint`: Lints the code using ESLint with the Airbnb TypeScript style guide.
- `test`: Runs the test suite using Jest.

To execute a script, run the following command:

```bash
npm run <script-name>
```

## Configuration

The configuration for the Express API can be modified through environment variables. Create a `.env` file in the project root directory and add your configuration variables there. Here's an example:

```plaintext
PORT=3000
```

## Folder Structure

```
├── dist/               # Compiled JavaScript files
├── src/                # Source code
│   ├── api/            # Request handlers
│   ├── interfaces/     # Type Interface
│   ├── middlewares.ts  # Middleware functions
│   ├── app.ts          # Express application setup
│   └── index.ts        # Entry point
├── .eslintrc           # ESLint configuration
├── .gitignore          # Git ignore rules
├── package.json        # Project metadata and dependencies
└── tsconfig.json       # TypeScript configuration
```

## Dependencies

- cors: ^2.8.5
- dotenv: ^16.3.0
- express: ^4.18.2
- helmet: ^6.2.0
- morgan: ^1.10.0

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Author

[Biruk Endris](https://www.bakiwebdev.com)

## Links

- Repository: [express-js-starter](https://github.com/bakiwebdev/express-js-starter)
- Issue Tracker: [express-js-starter Issues](https://github.com/bakiwebdev/express-js-starter/issues)
- Documentation: [express-js-starter Readme](https://github.com/bakiwebdev/express-js-starter#readme)
