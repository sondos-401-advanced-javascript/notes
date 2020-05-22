#!/usr/bin/env node
'use strict';


const Input = require('./lib/input');
const Note = require('./lib/notes');
const mongoose = require('mongoose');

const MONGOO_URI = 'mongodb://localhost:27017/notes';
// connect the mongo
mongoose.connect(MONGOO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const option = new Input();
const result = new Note();
result.valid(option);

switch (option.action) {
case 'add':
  result.add(option);
  result.save(option)
    .then(mongoose.disconnect);
  break;
case 'list':
  result.list(option)
    .then(mongoose.disconnect);
  break;
case 'delete':
  result.delete(option)
    .then(mongoose.disconnect);
  break;
}
