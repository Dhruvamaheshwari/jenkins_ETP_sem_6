const express = require('express')
const app = express();

const Port = 4000;

app.get('/' , (req  ,res) => {
    res.send("Hello jee ETP Chal rha h jeeee");
})

app.listen(Port , ()=>console.log(`server is running on port ${Port}`));