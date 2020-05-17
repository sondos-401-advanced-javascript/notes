'use strict';

// ./file-name -a || --add

function Output(option){
  this.excute(option);
  this.add(option);
}
Output.prototype.excute = (option) =>{
  if(option.action && option.payload){
    console.log(option);
  }
};

Output.prototype.add = (option)=>{
  if(option.action && option.payload){
    console.log({ note: option.payload, id: Math.floor(Math.random() * 100) });
  }
    
};

module.exports = Output;

