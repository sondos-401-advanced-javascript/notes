'use strict';

// take the data and validate 
const minimist = require('minimist');


function Input(){
const note = process.argv.slice(2);
this.action = this.action(note[0]);
this.payload = this.payload(note[1]);
}

Input.prototype.payload = (payload = '') =>{
return payload ? payload : 'there is nothing to remember';
}

Input.prototype.action = (action = '') =>{
    if(action === '-add' || '-a'){
return 'add';
    }
    else{
        return undefined;
    }
}

module.exports = Input;
