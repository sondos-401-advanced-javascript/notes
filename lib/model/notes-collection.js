'use strict';
const mongo = require('./notes-schema');

class Crud{
  async get(option){
    if(option.payload){
      let find = await mongo.find({});
      find.forEach(val =>{
        if(val.category ===  option.payload.toUpperCase()){
          console.log(`${val.payload}
            Category: ${val.category}  ID: ${val._id}`);
        }
      });
    }
    else{
      let find = await mongo.find({});
      find.forEach(val =>{
        console.log(`${val.payload}
          Category: ${val.category}  ID: ${val._id}`);
      });
    }
      
  }
  
  async create(option){
    let note = new mongo(option);
    await note.save();
    console.log('note saved This is fun');
  }
  update(){

  }
  async delete(option){
    await mongo.findByIdAndDelete(option.payload);
    console.log(`Deleted Note ${option.payload}`);
  }
}

module.exports=Crud;