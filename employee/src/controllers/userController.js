const Employee = require('../models/user')

exports.createUser = async (req, res) => {
    try {
      const { name, age, location } = req.body;
      console.log(name, age, location)
      const user = await Employee.create({ name, age, location });
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };


exports.getUsers = async (req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(201).json(employees)
    }catch(error){
        res.status(500).json({ error: 'Unable to get USers' });

    }
}

exports.getUserById = async (req,res) =>{
    try{
        const { userId } = req.params;
        const employee = await Employee.findById(userId)
        res.status(200).json(employee)
    }catch(error){
        res.status(501).json({error:"error while fetching ser by id"})
    }
}


exports.updateUser = async (req,res) =>{
    try{
        const {userId} = req.params;
        const updated = req.body;
        const option = {new:true}
        const employee = await Employee.findByIdAndUpdate(userId,updated,option)
        res.status(200).json(employee)

    }catch(error){
        res.status(501).json({error:"error while updating the user"})

    }
}


exports.deleteEmployee = async (req, res) =>{
    try{
        const {userId} = req.params;
        const employee = await Employee.findByIdAndDelete(userId)
        res.status(200).json(employee)

    }catch(error){
        res.status(501).json({error:"error while deleting the user"})

    }
}