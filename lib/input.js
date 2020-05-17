'use strict';

// take the data and validate 
// const minimist = require('minimist');


function Input(){
  const note = process.argv.slice(2);
  this.action = this.action(note[0]) ? this.action(note[0]): console.error('error in: ',note[0]);
  if(this.action){
    this.payload = this.payload(note[1]) ? this.payload(note[1]) : console.error('error text is: ',note[1]);
  }

}

Input.prototype.payload = (payload = '') =>{
  return payload ? payload : undefined;
};

Input.prototype.action = (action = '') =>{
  if(action === '-add'){
    return 'add';
  }
  else if(action === '-a'){
    return 'add';  
  }
  else{
    return undefined;
  }
};

module.exports = Input;
