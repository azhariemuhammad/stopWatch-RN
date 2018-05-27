import React from 'react';
import Enzyme, {
    shallow,
    equal
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    View,
    Text
} from 'react-native';
Enzyme.configure({ adapter: new Adapter() });

import DisplayTimer from '../components/DisplayTimer';

import renderer from 'react-test-renderer';

describe('<DisplayTimer />', () => {
    it('should render DisplayTimer component properly', () => {
        const rendered = renderer.create(<DisplayTimer />).toJSON();
        expect(rendered).toBeTruthy();
    })
    it('should renders four Text', () => {
        const wrapper = shallow(<DisplayTimer />);
        expect(wrapper.contains(<Text>Display Timer</Text>)).toBeTruthy()
    })
})

