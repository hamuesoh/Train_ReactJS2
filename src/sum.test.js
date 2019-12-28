// import React from 'react';
const sum = require('./sum');

test('test dpp ', ()=> {
    expect(sum(1,3)).toEqual(4);
})

test('func 2 ', ()=>{
    expect(sum(2,3)).toEqual(5);
});