const express = require("express")
const app = express()
const path = require("path")
const rIndex = require("./routers/index")
const rPhysics = require("./routers/physics")
const rEnglish = require("./routers/english")
const rMaths = require("./routers/maths")
const port = (process.env.PORT || '3000');

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "pug")

app.use(rIndex)
app.use(rPhysics)
app.use(rEnglish)
app.use(rMaths)

app.listen(port, ()=> {
    console.log("server running ");
})
