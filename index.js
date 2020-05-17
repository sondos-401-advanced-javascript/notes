#!/usr/bin/env node
'use strict';


const input = require('./lib/input');
const note = require('./lib/notes');

const option = new input();
new note(option);