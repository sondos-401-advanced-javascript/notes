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
      console.log({ note: option.payload, id: Math.floor(Math.random() * 100) });
    }}
}



module.exports = Output;

