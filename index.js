const express = require('express')
const app =  express();
const port = 4000;


app.get('/' , (req  ,res)=>{
   res.send('Hello jee kya haal chaal')
})

app.listen(port , () => console.log(`server is listin on port ${port}`))