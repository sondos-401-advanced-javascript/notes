'use strict';
const mongo = require('./notes-schema');

class Crud {
  async get(option) {
    let listNotes = option.payload ?
      await mongo.find({ category: option.payload.toUpperCase() }) :
      await mongo.find({});
    return listNotes;
  }

  async create(option) {
    let note = new mongo(option);
    return await note.save();
  }

  async update(option) {
    return await mongo.findByIdAndUpdate({ _id: option.payload });
  }

  async delete(option) {
    await mongo.findByIdAndDelete(option.payload);
  }
}

module.exports = Crud;

