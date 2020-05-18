'use strict';

const Input = require('../lib/input');
const option = new Input();

jest.spyOn(global.console, 'log');


class valid{
  badInput(){    
    it('it gives error if when theres no note',()=>{
      option.payloads();
      option.action;
      option.payload;
      expect(console.log).toHaveBeenCalled();
    });
    it('it gives error if write any things instead of(--add,-add,-a)',()=>{
      option.actions('-ads');
      option.action;
      option.payload;
      expect(console.log).toHaveBeenCalled();
    });
    return false;
  }
  goodInput(){
    it('return add if using this (--add,-add,-a)',()=>{
      expect(option.actions('--add')).toEqual('add');
      expect(option.actions('-add')).toEqual('add');
      expect(option.actions('-a')).toEqual('add');
    });
    it('display the note when the note is written',()=>{
      let note = 'Watch movie';
      expect(option.payloads(note)).toEqual(note);
    });
    return true;
  }
}
describe('valid Input module',()=>{
  const validation= new valid();
  validation.goodInput();
  validation.badInput();
});