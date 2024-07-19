const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors"); //  it enables CORS for all routes in your Express.js application, allowing cross-origin requests from any domain to access your server's resources.
const app = express();
connectToMongo();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json()); //  to parse JSON-encoded bodies of incoming requests, making the request body available under the req.body property.
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Phle saare instructions dedo phir suno 
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
