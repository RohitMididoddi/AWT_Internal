const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
const url=mongoose.connect("mongodb+srv://Products:12345678@cluster0.cjprbtz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const UserSchema=new UserSchema({
    "name":{type:"String",required:true},
    "email":{type:"string",required:true},
    "password":{type:"string",required:true}
});
const ProductSchema=new ProductSchema({
    "id":{type:"string",required:true},
    "description":{type:"string"},
    "price":{type:"number",required:true},
    "category":{type:"string"},
    "stock":{type:"number",default:0}
});
const users=new model("User",UserSchema)
const products=new model("Product",ProductSchema)
app.get('/api/products',(req,res)=>{
    users.find()
    if(products){
        .then({
            res.status(200).json({message:products})
        })
    }
    else{
        .catch({
            res.status(404).json({message:"error",error})
        })
    }
});
app.listen(2000)={
    .then(){
        
    }
}
app.get('/api/products/id',(req,res)=>{(
    products.findOne(id)
    if(products.id){
        .then({
            res.status(200).json({message:products.id})
        })
        .catch({
            res.status(404).json({message:"not found"})
        })
    }
    else{
        .catch({
            res.status(404).json({message:"error",error})
        })
    }
});
app.post('/api/products',(req,res)=>{
    {"name","description","price","category","stock"}=req.params
    const UpdateProducts=products.update()
    if(!UpdateProducts){
        .then({
             res.status(404).json({message:"not updated"})
        })
        .catch({
            res.status(404).json({message:"error")
        })
    }
    else{
        .catch({
            res.status(404).json({message:"error",error})
        })
    }
})
app.put('/api/products/:id',(req,res)=>{
    {"id"}=req.params;
    {"description","price","category","stock"}=req.body;
    const UpdateProducts=findOneandUpdate(id);

})
app.delete('/api/products/:id',(req,res)=>{
    products.delete(id)

})





    
