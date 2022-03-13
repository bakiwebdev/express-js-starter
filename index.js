import 'dotenv/config'; // allow to use .env file
import app from './app.js' // import app.js 

// choose any port you want
const PORT = 5000;

// start server on port 5000 or any port you specified in .env file
app.listen( process.env.PORT || PORT, () => { console.log(`Server started on port ${PORT}`)})