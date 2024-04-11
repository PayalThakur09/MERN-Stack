const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// AddPage Data

router.post("/addpage", async (req, res) => {
    const { countryname, capitalname } = req.body;
    console.log(req.body);

    if (!countryname || !capitalname) {
       
        return res.status(422).json("plz fill the data");
    }
    try {
        const preuser = await users.findOne({ capitalname: capitalname });
        console.log(preuser);

        if (preuser) {
            // return res.status(404).json("this is user is already present");
            return res.status(422).json("this is user is already present");
        } else {
            const addpuser = new users({
                countryname, capitalname
            });

            await addpuser.save();
            console.log(addpuser);
            return res.status(201).json(addpuser);
        }

    } catch (error) {
        // return res.status(404).json(error)
        return res.status(422).json(error)
    }
})

// get userdata

router.get("/getdata",async(req,res) => {
    try{
       const userdata = await users.find()
       res.status(201).json(userdata)
       console.log(userdata);  
    }catch (error){
        res.status(422).json(error)
    }
})

router.get("/getuser/:id" , async(req,res)=> {
    try {
        const {id} = req.params;
        const user = await users.findById(id);
        res.status(201).json(user);
        console.log(user)

    }  catch (error){
        res.status(422).json(error);
    }
})

// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete user
router.delete("/deleteuser/:id", async(req,res)=> {
    try{
      const {id} = req.params;

      const deleteuser = await users.findByIdAndDelete({_id:id})
      console.log(deleteuser);
      res.status(201).json(deleteuser);
      
    }catch (error){
      res.status(422).json(error);
    }
})

//select dropdown
router.get("/getcountry", async(req,res)=> {
    try{
        const usereddata = await users.find()
        res.status(201).json(usereddata)
        console.log(usereddata);  
     }catch (error){
         res.status(422).json(error)
     }
})


module.exports = router;