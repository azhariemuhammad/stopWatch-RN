import React from 'react';
import Enzyme, {
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { Button } from 'native-base';
import renderer from 'react-test-renderer';
import ButtonStopwatch from '../components/ButtonStopwatch';

describe('<ButtonStopwatch />', () => {
    it('should renders ButtonStopwatch component properly', () => {
        const rendered = renderer.create(<ButtonStopwatch />).toJSON();
        expect(rendered).toBeTruthy()
    })
})
