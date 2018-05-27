import React from 'react';

import Stopwatch from '../components/Stopwatch';

import renderer from 'react-test-renderer';


describe('<Stopwatch />', () => {
    it('should render Stopwatch component properly', () => {
        const rendered = renderer.create(<Stopwatch />).toJSON();
        expect(rendered).toBeTruthy();
    })
    
})