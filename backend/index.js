import express from "express"
const app=express()

const port = 3000

app.get('/hello', (req, res)=>{
    res.send("Welcome to node js Srilalitha")
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})

export default app;
