'use strict';

// ./file-name -a || --add

const Execute = {};

Execute.add = (option)=>{
  if(option.action && option.payload){
    console.log(option);
    console.log({ note: option.payload, id: Math.floor(Math.random() * 100) });
  }
    
};

module.exports = Execute;

