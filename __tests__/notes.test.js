'use strict';

const Output = require('../lib/notes');
require('@code-fellows/supergoose');
const option = new Output();
jest.spyOn(global.console,'log');

describe('notes module',()=>{
  it('don\'t call the console if there is error in CLI',()=>{
    const obj={action:'', payload:'',category:''};
    option.excute(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it('will call console if there are note and CLI correct',()=>{
    const obj={action:'add', payload:'play',category:'school'};
    option.excute(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('dosent save values',()=>{
    let obj = {action:'add',payload: 'save notes',category: ''};
    option.save(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{

          expect(record[key]).not.toEqual(obj[key]);
        });
      });

  });
  it('save values',()=>{
    let obj = {action:'add',payload: 'save notes',category: 'school'};
    option.save(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{

          expect(record[key]).toEqual(obj[key]);
        });
      });

  });
  it('dosent save values',()=>{
    let obj = {action:'add',payload: 'save notes',category: ''};
    option.save(obj)
      .then(record =>{
        Object.keys(obj).forEach(key =>{

          expect(record[key]).not.toEqual(obj[key]);
        });
      });
  });
  it('list all the items', ()=> {
    let obj = {action:'list',payload:undefined};
    option.save(obj)
      .then(record => {
        return option.list(obj)
          .then(note => {
            Object.keys(obj).forEach(key=> {
              expect(note[key]).toEqual(note[key]);
            });
          });
      });
  });
  it('list the category items', ()=> {
    let obj = {action:'list',payload:'life'};
    option.save(obj)
      .then(record => {
        return option.list(obj)
          .then(note => {
            Object.keys(obj).forEach(key=> {
              expect(note[key]).toEqual(note[key]);
            });
          });
      });

  });
  it('delete item', ()=> {
    let obj = {action:'delete',payload:'5'};
    option.save(obj)
      .then(record => {
        return option.delete(record)
          .then(note => {
            Object.keys(obj).forEach(key=> {
              expect(note[key]).toEqual(note[key]);
            });
          });
      });
  });
});