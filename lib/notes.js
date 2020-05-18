'use strict';

// ./file-name -a || --add

class Output{
  constructor(){
    
  }
  excute(option) {
    if(option.action && option.payload){
      console.log(option);
    }
  }
  add(option){
    if(option.action && option.payload){
      let id = Math.floor(Math.random() * 100);
      console.log( `Add note: ${option.payload} ,have id ${id}`);
    }}
}



module.exports = Output;

