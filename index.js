#!/usr/bin/env node
'use strict';


const Input = require('./lib/input');
const Note = require('./lib/notes');

const option = new Input();
const result = new Note();
result.excute(option);
result.add(option);