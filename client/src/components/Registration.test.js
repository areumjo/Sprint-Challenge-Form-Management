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

        // const username = container.getByPlaceholderText('Username')
        // fireEvent.change(username, { target: { value: 'user' } })

        // const password = container.getByPlaceholderText('Password')
        // fireEvent.change(password, { target: { value: 'pwpwpwpw' } })        

        // fireEvent.click(button);

        // const display = container.queryByTestId('ok-display');
        // expect(display.getAttribute('key')).toBe('user')




        // const userData = container.getByTestId('ok-user');
        
        //console.log(submitBtn)
        // button.simulate('click')
        // expect(mockFn).toHaveBeenCalled();
    })
})