'use strict';

require('@code-fellows/supergoose');
let Collection = require('../lib/model/notes-collection');
let Crud = new Collection();

describe('notes-collection Model', () => {
  it('test get function and list all', () => {
    let obj = {};
    return Crud.get(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('test get function and list category',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.get({payload:record.category})
          .then(note => {
            Object.keys(obj).forEach(key => {
              expect(note[key]).toEqual(obj[key].category);
            });
          });
      });
  });

  it('test create func',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('update func',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.update({payload:record._id})
          .then(note => {
            Object.keys(obj).forEach(key => {
              expect(note[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('delete func',()=>{
    let obj= {payload:'write',category:'SCHOOL'};
    return Crud.create(obj)
      .then(record =>{
        return Crud.delete({payload:record._id})
          .then(note => {
            expect(note).toBeUndefined();
          });
      });

  });
});