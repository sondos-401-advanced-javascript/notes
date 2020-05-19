'use strict';

const Output = require('../lib/notes');
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
});