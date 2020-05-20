'use strict';

// ./file-name -a || --add 'note text' --category 'the category'
const Notes = require('./model/notes-schema');

class Output{
  constructor(){
    
  }
  excute(option) {
    if(option.action==='add' && option.payload && option.category){
      this.add(option);
    }
  }
  add(option){
    console.log( `Add note: ${option.payload}`);
  }
  async list(option){
    if(option.action === 'list'){
      if(option.payload){
        let find = await Notes.find({});
        find.forEach(val =>{
          if(val.category ===  option.payload.toUpperCase()){
            console.log(`${val.payload}
            Category: ${val.category}  ID: ${val._id}`);
          }
        });
      }
      else{
        let find = await Notes.find({});
        find.forEach(val =>{
          console.log(`${val.payload}
          Category: ${val.category}  ID: ${val._id}`);
        });
      }
      
    }
  }
  async save(option){
    if(option.action==='add' && option.payload && option.category){
      let note = new Notes(option);
      await note.save();
      console.log('note saved This is fun');
    }
    else if(!option.category && option.action=='add'){
      console.log('the CLI should be -a || --add \'note text\' --category \'the category\'');
      // process.exit();
    }
  }
  async delete(option){
    if(option.action === 'delete'){
      await Notes.findByIdAndDelete(option.payload);
      console.log(`Deleted Note ${option.payload}`);
    }
  }
}



module.exports = Output;

