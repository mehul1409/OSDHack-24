const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const users = require('./Models/user');

app.post('/',async(req,res)=>{
    try {
    console.log(req.body); // {name,email}
    const user = users.create(req.body);
    res.json({
        msg:"user created"
    })
} catch(error){
    console.log(error);
    res.json({
        err:error
    })
}

   
})

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server started at port 8000');
    }
})
