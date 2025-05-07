import { connectToDatabase } from "./src/database/connectDB.js";
import { app } from "./src/index.js";
import { port } from "./config.js";  // Make sure to import 'port' from your config file

connectToDatabase().then(() => {
    // Start the app after successful DB connection
    app.listen(port, () => {
        console.log("App is Listening on " + port);
    });
}).catch((err) => {
    console.log("Sorry, there is a problem with the connection", err);
});
