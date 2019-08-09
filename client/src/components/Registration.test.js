import React from 'react';
import { render, getByTestId, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Registration from './Registration.js';

describe('<Registration />', () => {
    it('renders without crashing', () => {
        render(<Registration />);
    });
    // submit button work?
    it('submit button?', () => {
        const container = render(<Registration />);
        const button = container.getByTestId('ok-button')
        expect(button.getAttribute('type')).toBe('submit');        
        fireEvent.click(button);

        // const userData = container.getByTestId('ok-user');
        
        //console.log(submitBtn)
        // button.simulate('click')
        // expect(mockFn).toHaveBeenCalled();
    })
})