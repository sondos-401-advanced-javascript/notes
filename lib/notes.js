'use strict';

// ./file-name -a || --add

const Execute = {};

Execute.add = (option)=>{
  if(option.action && option.payload){
    console.log(option);
  }
    
};

module.exports = Execute;

