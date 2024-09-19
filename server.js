const express = require("express")
const app = express()
const port = 3101

app.set("view engine", "ejs")

// [GET] /
app.get("/", (req, res) => {
  res.render("pages/index")
})

app.listen(port, () => {
  console.log(`Server chạy thành công trên cổng ${port}`)
  console.log(`http://localhost:${port}`)
  console.log(`testcookie.com:${port}`)
})
