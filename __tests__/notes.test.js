'use strict';

const Output = require('../lib/notes');
const option = new Output();


jest.spyOn(global.console, 'log');

describe('service', () => {
  //not
  it('don\'t call the console if you not added', () => {
    const obj = { action: '', payload: '', category: '' };
    option.add(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it('will call console if there are note and CLI correct', () => {
    const obj = { action: 'add', payload: 'play', category: 'school' };
    option.valid(obj);
    expect(console.log).not.toHaveBeenCalled();
  });
  it('dosen\'t save values', () => {
    let obj = { action: 'add', payload: '', category: '' };
    option.save(obj)
      .then(() => {
        expect(console.log).not.toHaveBeenCalled();
      });
  });
  it('not list all the items', () => {
    let obj1 = { action: 'lt', payload: 'life' };
    option.list(obj1)
      .then(() => {
        expect(console.log).not.toHaveBeenCalled();
      });
  });
  it('un delete item', () => {
    let obj = { action: 'add', payload: '5ec3e9309e75481176e50eb3' };
    option.delete(obj)
      .then(() => {
        expect(console.log).not.toHaveBeenCalled();
      });
  });
  //call
  it('if you add note', () => {
    const obj = { action: 'add', payload: 'play', category: 'school' };
    option.add(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('will not call console if there are note and CLI correct', () => {
    const obj = { action: 'add', payload: 'play', category: '' };
    option.valid(obj);
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  //line 46
  it('save values', () => {
    let obj = { action: 'add', payload: 'save notes', category: 'life' };
    option.save(obj);
    expect(console.log).toHaveBeenCalled();
  });

  it('update values', () => {
    let obj = { action: 'update', payload: '5ec3e9309e75481176e50eb3'};
    option.update(obj);
    expect(console.log).toHaveBeenCalled();
  });

  // line 25-27
  it('not list all the items', () => {
    let obj1 = { action: 'list', payload: 'school' };
    option.list(obj1);
    expect(console.log).toHaveBeenCalled();
  });
  
  //line 33-35
  it('list all the items', () => {
    let obj = { action: 'list', payload: '' };
    option.list(obj);
    expect(console.log).toHaveBeenCalled();
  });

 



  //line 53
  it('delete item', () => {
    let obj = { action: 'delete', payload: '5ec3e9309e75481176e50eb3' };
    option.delete(obj)
      .then(() => {
        expect(console.log).toHaveBeenCalledTimes(6);
      });
  });


});


