const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');

app.use(express.json());

const port = 4000
// const emails = "asatideepak@gmail.com"
const generateToken = async (email) => {
    try {
        let token = await jwt.sign({ email: email }, "myownsecret");
        console.log(token)
        return token;
    } catch (error) {
        console.log("error2", error);
        throw new Error("error");
    }
};

app.post('/', (req, res) => {
    try {
        console.log("email: ", req.body.email)
    const token = generateToken(req.body.email)
    res.send(token)
    // res.send('Hello World ganesha i am here')
    } catch (error) {
        console.log("Error :", error)
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  