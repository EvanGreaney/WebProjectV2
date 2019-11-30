const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-9c16h.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const carschema = new Schema({
    Model:String,
    year:String,
    Image:String
})

const CarModel = mongoose.model('car', carschema);

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/cars', (req, res) => {

    CarModel.find((error, data) =>{
        res.json({cars:data});
    })
})

    app.delete('/api/cars/:id', (req, res)=>{
        console.log(req.params.id);
    
        CarModel.deleteOne({_id: req.params.id},
            (error, data) =>{
                res.json(data);
            })
    })

    app.put('/api/cars/:id', (req, res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        CarModel.findByIdAndUpdate(req.params.id,
           
            req.body,
            {new:true},
            (error,data)=>{
                res.json(data);
            })
    })
    
    app.get('/api/cars/:id', (req, res)=>{
        console.log("GET" + req.params.id);
        CarModel.findById(req.params.id,(error,data)=>{
            res.json(data);
        })
    })

    app.post('/api/cars', (req,res)=>{
        console.log('Post request Successful');
        console.log(req.body.Model);
        console.log(req.body.year);
        console.log(req.body.Image);
    
        CarModel.create({
            Model:req.body.Model, 
            year:req.body.year, 
            Image:req.body.Image
        });
    
        res.json('post recieved!');
    })

    app.put('/api/cars/:id', (req, res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        CarModel.findByIdAndUpdate(req.params.id,
           
            req.body,
            {new:true},
            (error,data)=>{
                res.json(data);
            })
    })

    app.get('/api/cars/:id', (req, res)=>{
        console.log("GET" + req.params.id);
        CarModel.findById(req.params.id,(error,data)=>{
            res.json(data);
        })
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))