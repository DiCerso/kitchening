const express = require('express')
const app = express();
const port =3030;

const path = require('path')

app.use(express.static('public'))


app.get('/', (req, res)=>{
    return res.sendFile(path.resolve(__dirname, 'index.html'))
})



app.listen(port, ()=> console.log("server running in http://localhost:3030"))