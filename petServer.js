const express=require("express")
const cors=require("cors")
const app=express()
const path=require("path")

const publicpath=path.join(__dirname,"Public")
app.use(express.urlencoded({extended:false}))
app.use(cors())

 const petlist=[
        {   id:1,
            petName:"jack",
            age:5,
            PetBreed:"german",
            price:80000
        }
    ]

app.post("/petApi",(req,res)=>{
   

    const newpets={
        id:petlist.length+1,
        petName:req.body.petName,
        age:req.body.petAge,
        PetBreed:req.body.Breed,
        price:req.body.Price,
    }
    petlist.push(newpets)
    
    res.sendFile(`${publicpath}/PetTable.html`)
})

app.get("/petlist",(req,res)=>{
    res.json(petlist)
})


app.get("",(req,res)=>{
    res.sendFile(`${publicpath}/Pet.html`)
})

app.listen(8000,()=>{
    console.log("server has start")
})