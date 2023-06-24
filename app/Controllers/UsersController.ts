// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Response } from "@adonisjs/core/build/standalone";
import Usermongo from "App/Model/Usermongo";

// const User = require('./../models/User');
// import { Request } from '@adonisjs/core/build/standalone'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { processCliArgs } from '@japa/runner'

export default class UsersController {

  //CREATE USER
  public async create(req) {
    try{
      const users = req.request.body()
      // console.log(users)

       

     await Usermongo.create({
        name: users.name,
        address: users.address,
        createdAt: users.createdAt
    })
    return "User added successfully"
    }catch (error) {
        console.log("Error in creating customer!");
    };



    
    // DELETE USER
    public async delete({request}) {
      try{

        const userId = request.params()._id
        // console.log(userId)
        // const users = req.request.body()
        // console.log(users)
        await Usermongo.findOneAndDelete({ _id:userId });
        
        
        return "User deleted successfully"
       
      }catch (error) {
          console.log("Error in deleting customer!");
      }

      //READ
      
    public async read(request) {
      try{

        // return request.request.body()
         
        const findname = request.request.body()
        // console.log(users)
        const user = await Usermongo.find(findname)

        if(!user){
          return "user not found"
        }
        return user
        
        
        
       
      }catch (error) {
          console.log("Error in reading customer!");
      }
  }
}

