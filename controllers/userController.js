const userService = require("../services/userServices")


exports.getAllusers = async(req,res)=>{
    try{
        const users = await userService.getAllUsers();
        res.json({data:users,status:"Success"});
    }
    catch(err){
        res.status(500).json({error: err.meaasge});
    }
};

exports.createUser = async(req,res)=>{
    try{
        const user = await userService.createUser(req.body);
        res.json({data:user,status:"Success"});
    }catch(err){
        res.status(500).json({error:err.meaasge});
    }
};

exports.getUserById = async(req,res)=>{
    try{
    const user = await userService.getUserById(req.params.id);
    res.json({data:user,status:"Success"});
    }
    catch(err){
        res.status(500).json({error:err.meaasge});
    }
};

exports.updateUser = async(req,res)=>{
    try{
        const user = await userService.updateUser(req.params.id,req.body);
        res.json({data:user,status:"Success"});
    }catch(err){
        res.status(500).json({error:err.meaasge});
    }
};

exports.deleteUser = async(req,res)=>{
    try{
        const user = await userService.deleteUser(req.params.id);
        res.json({data:user,status:"Success"});
    }catch(err){
        res.status(500).json({error:err.meaasge});
    }
}