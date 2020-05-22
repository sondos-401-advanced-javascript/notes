'use strict';

// take the data and validate 
// const minimist = require('minimist');

class Input {
  constructor() {
    const note = process.argv.slice(2);
    this.action = this.actions(note[0]);
    this.payload = this.payloads(note[1]) || note[1];//it is a note but when use list it is category or id
    this.category = note[3];
  }
  payloads(payload) {
    if (this.action === 'add') {
      return payload ? payload : console.log('error text is: ', payload);
    }
  }

  actions(action) {
    if (action === '-a') {
      return 'add';
    }
    else if (action === '--add') {
      return 'add';
    }
    else if (action === '--list') {
      return 'list';
    }
    else if (action === '--delete' || action === '-delete') {
      return 'delete';
    }
    else if (action === '--update') {
      return 'update';
    }
    else {
      console.log('error in: ', action);
    }
  }

}



module.exports = Input;
