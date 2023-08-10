const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le server a démarré au port: " + port));
