"use strict";

const app = require("../app");
const PORT = 4000

app.listen(PORT, () => {
    console.log("The server is running on "+PORT+" port.");
});