const express = require('express')
const app = express()
const port = 5000;

app.get('/' , (req  ,res) => {
    res.send('kyaa haal h jee , sb mast ??')
})


app.listen(port , () => console.log(`server is started at port ${port}`))