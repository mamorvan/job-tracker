const express = require("express");

const app = express();

var PORT = 3000;

app.use(express.static(process.cwd() + "/public"));

app.listen(PORT, () => {
    console.log("listening on ", PORT);
});


