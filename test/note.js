import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Note from '../src/components/Note';

describe('the note component', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Note />);
    it('parent element is of type div', () => {
        const actual = renderer.getRenderOutput().type;
        const expected = 'div';
        expect(actual).toEqual(expected);
    });
    
    it('child element is of type textarea', () => {
        const actual = renderer.getRenderOutput().props.children[0].type;
        const expected = 'textarea';
        expect(actual).toEqual(expected);
    });
});

/*
describe('the like button', () => {
        
    it('should increase the count', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Note />);
        
        const actual = renderer.getRenderOutput().props.children[2];
        
    });
    
});*/
