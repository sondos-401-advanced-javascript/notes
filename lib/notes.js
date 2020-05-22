'use strict';

// ./file-name -a || --add 'note text' --category 'the category'
const Service = require('./model/notes-schema');



class Output {

  constructor() {

  }
  add(option) {
    if (option.action === 'add' && option.payload && option.category) {
      console.log(`Add note: ${option.payload}`);
    }
  }

  async list(option) {
    if (option.action === 'list') {
      let find = option.payload ?
        await Service.find({ category: option.payload.toUpperCase() }) :
        await Service.find({});
      find.forEach(val => {
        console.log(`${val.payload}
            Category: ${val.category}  ID: ${val._id}`);

      });
    }
  }

  async save(option) {
    if (option.action === 'add' && option.payload && option.category) {
      let note = new Service(option);
      console.log('note saved This is fun');
      await note.save();
    }
  }

  async delete(option) {
    if (option.action === 'delete') {
      console.log(`Deleted Note ${option.payload}`);
      await Service.findByIdAndDelete(option.payload);
    }
  }
  
  valid(option) {
    if (!option.category && option.action == 'add') {
      console.log('the CLI should be -a || --add \'note text\' --category \'the category\'');
    }
  }
}

module.exports = Output;

