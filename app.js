const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const express = require("express");
const app = express();
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true  }, )
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Routers
const users = require("./routes/api/users");
const languages = require("./routes/api/languages");
const problems = require("./routes/api/problems");
const solutions = require("./routes/api/solutions");
const contests = require("./routes/api/contests");


app.use("/api/users", users);
app.use("/api/problems", problems);
app.use("/api/languages", languages);
app.use("/api/solutions", solutions);
app.use("/api/contests", contests);

