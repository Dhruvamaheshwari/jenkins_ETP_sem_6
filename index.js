const express = require('express')
const app =  express();
const port = 4000;


app.get('/' , (req  ,res)=>{
   res.send('or ram kya hal h??')
})

app.listen(port , () => console.log(`server is listin on port ${port}`))