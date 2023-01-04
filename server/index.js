import express from "express";
import mysql from "mysql";
import cors from "cors";

const app=express()
app.use(cors());
app.use(express.json());

const db=mysql.createConnection(
    {
        host:"localhost",
        user:"dbproject",
        password:"Dbms#12",
        database:"cyc2",
    }
);
db.connect((err)=>{
if(err) console.log(err)

console.log("Database connected")
})
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/query",(req,res)=>{
    console.log(req.body.query)
    const q=req.body.query
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        else
        return res.send(data)
    })
})

app.get("/station",(req,res)=>{
    const q="Select * from station;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        else
        return res.send(data)
    })
})

app.post("/station",(req,res)=>{
    const q="insert into station (`stnName`,`stnAddress`,`cycCapacity`,`empID`) values (?) "
    const values=[
        req.body.stnName,
        req.body.stnAddress,
        req.body.cycCapacity,
        req.body.empID,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else
        return res.send("Station Created")
    })
})

app.post("/employee",(req,res)=>{
    const q="insert into employee (`empName`,`empAddress`,`dob`,`stnID`,`servID`) values (?) "
    const values=[
        req.body.empName,
        req.body.empAddress,
        req.body.dob,
        req.body.stnID,
        req.body.servID,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else
        return res.send("Employee Created")
    })
})
app.post("/tripdetails",(req,res)=>{
    const q="insert into tripdetails (`stnID_start`,`stnID_end`,`cycID`,`custID`,`distTravelled`,`beginTime`,`endTime`) values (?) "
    const values=[
        req.body.stnID_start,
        req.body.stnID_end,
        req.body.cycID,
        req.body.custID,
        req.body.distTravelled,
        req.body.beginTime,
        req.body.endTime
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else
             res.send("Tripdetails entered successfully!")
    })
})
app.get("/employee",(req,res)=>{
    const q="Select * from employee;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        else
        return res.send(data)
    })
})


app.listen(8080,()=>{
    console.log("Listening on port 8080")
})