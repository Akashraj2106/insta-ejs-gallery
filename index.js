const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running at port number: ${port}`);
});

app.get("/home/ig/:username", (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    let data = instadata[username];

    if (data) {
        res.render("home", { data });  // ✅ fixed
    } else {
        res.render("error");           // ✅ fixed
    }
});
