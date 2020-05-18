'use strict';

// take the data and validate 
// const minimist = require('minimist');

class Input{
  constructor(){
    const note = process.argv.slice(2);
    this.action = this.actions(note[0]);
    this.payload = this.payloads(note[1]);
  }

  payloads(payload){
    return payload ? payload : console.log('error text is: ',payload);
  }
  
  actions(action){
    if(action === '-add'){
      return 'add';
    }
    else if(action === '-a'){
      return 'add';  
    }
    else if(action === '--add'){
      return 'add';  
    }
    else{
      console.log('error in: ',action);
    }
  }
}



module.exports = Input;
