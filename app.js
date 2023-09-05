const express = require("express") // reruiring express package
const app = express() // storing it in app , app vanney variable thoughout use garxau

// '/' ma gayo vaney k dekhauney hae, request paxi response hunai paryo
// app.get('/',(req,res)=>{
//     res.send()
// })

app.get('/',(req,res)=>{
    res.send("<h1>K xa sathi home page page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("About page")

})


app.get("/contact",(req,res)=>{
    res.send("From contact page")
})







// port number -> like a room number  for certain time . Jaba sama run garai ra hunxau kate se sakyo

app.listen(3000,function(){
    console.log("NodeJs Project has started on port 3000")
})
