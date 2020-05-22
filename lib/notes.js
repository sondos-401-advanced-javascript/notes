'use strict';

// ./file-name -a || --add 'note text' --category 'the category'
const collection = require('./model/notes-collection');
let Curd = new collection();



class Output {

  constructor() {

  }
  add(option) {
    if (option.action === 'add' && option.payload && option.category) {
      console.log(`Add note: ${option.payload}`);
    }
  }

  async list(option) {
    let find = await Curd.get(option);
    find.forEach(val => { console.log(`${val.payload}
            Category: ${val.category}  ID: ${val._id}`);
    });
  }

  async save(option) {
    console.log('note saved This is fun');
    await Curd.create(option);
  }

  async delete(option) {
    console.log(`Deleted Note ${option.payload}`);
    await Curd.delete(option);
  }

  async update(option){
    console.log(`Update Note: ${option.payload}`);
    await Curd.update(option);
  }

  valid(option) {
    if (!option.category && option.action == 'add') {
      console.log('the CLI should be -a || --add \'note text\' --category \'the category\'');
    }
  }
}

module.exports = Output;

