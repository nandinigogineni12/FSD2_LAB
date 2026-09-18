const express=require("express");
const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.render('index',{
        title:'User Registration',
        error:null,
        user:null
    });
});

app.post("/submit",(req,res)=>{
    const{name,email,password,age}=req.body;

    let errors=[];
    if(!name || name.length<3){
        errors.push("Name is required and must be atleast 3 characters long");

    }
    if(!email || !email.includes('@')){
        errors.push("enter a valid email");
    }
    if(!password || password.length<6){
        errors.push("password must be atleast 6 characters long");
    }
    if(!age || age<18){
        errors.push("age must be 18 or above");
    }

    if(errors.length>0){
        res.render('index',{
            title:'registration failed',
            error:errors,
            user:null
        });
    }
    else{
        res.render('index',{
            title:'registration succesfull',
            error:null,
            user:name

        });
    }
});
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});