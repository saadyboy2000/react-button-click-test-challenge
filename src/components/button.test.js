import React from 'react';
import {shallow} from 'enzyme';
const callback = jest.fn();

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button />);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalledWith();
    });
});
