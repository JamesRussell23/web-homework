/*
Every time I wrote something in Jest to test one of my components, would
receive the following error message: 
"Support for the experimental syntax 'jsx' isn't currently enabled."

The error message recommends:
    1. Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' 
    section of your Babel config to enable transformation.
    2. If you want to leave it as-is, add @babel/plugin-syntax-jsx 
    (https://git.io/vb4yA) to the 'plugins' section to enable parsing.

    Tried both methods, installed them via npm, added to babel file
    and still received same error message.

    Proceeded to Stack Overlow and tried many alternative solutions, 
    adding changes to both package.json and babel file. Still received 
    same error message. 

    Not sure if I am the only candidate that had issues with this but
    did not want to get held up on this one task, would like to work on
    other tasks. If I am missing something obvious please let me know!
    Looked on the Jest docs on how to install and still nothing worked.

// Sample Test I was trying to run: 
import React from 'react';
import ReactDOM from 'react-dom';
import Transaction from '../webapp/src/components/transaction';
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Transaction></Transaction, div)
  })

Created working test below to at least prove I can get test script
to properly run.
*/

describe('testPractice', () => {
    it('testPractice', () => {
      expect(true).toEqual(true);
    });
  });