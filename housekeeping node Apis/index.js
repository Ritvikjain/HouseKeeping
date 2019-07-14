const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParse = require('body-parser');
let db;
const app = express();
const url = "mongodb://localhost:27017";
MongoClient.connect(url , function (err ,client) {
    db = client.db('housekeeping');
})
app.use(cors());
app.use(bodyParse.json());
app.listen(8000, function () {
    console.log("http server started");
})
app.post("/all", function ( req, res) {
    db.collection("assets").find({}).toArray(function ( err, data) {
        res.json(data);
        console.log(data);
    })    
})
app.post("/add-asset", function ( req, res) {
    let data = req.body;
    db.collection("assets").find({}).toArray((err,r) =>{
            data.assetid = r.length+1 +"";
            db.collection("assets").insertOne(data,function (err,r) {
            res.json(r);
        })
    })
    
})
app.post("/add-task", function ( req, res) {
    let data = req.body;
    db.collection("tasklist").find({}).toArray((err,r) =>{
            data.taskid = r.length+1 +"";
            db.collection("tasklist").insertOne(data,function (err,r) {
            res.json(r);
        })
    })
    
})
app.post("/add-worker", function ( req, res) {
    let data = req.body;
    db.collection("workers").find({}).toArray((err,r) =>{
            data.workerid = r.length+1 +"";
            db.collection("workers").insertOne(data,function (err,r) {
            res.json(r);
        })
    })
    
})
app.post("/allocate-task", function ( req, res) {
    let data = req.body;
    db.collection("allocatetask").insertOne(data,function (err,r) {
        res.json(r);
    })
})
app.post("/get-tasks-for-worker/",function(req,res) {
    let id = req.body
    db.collection("allocatetask").find({"workerid": id}).toArray((err,r) => {
        res.json(r);
    })
})