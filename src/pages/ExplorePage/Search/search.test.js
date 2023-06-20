import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './index'
const setLocationMock = jest.fn()
const testProps = {
    setLocation: setLocationMock
};

test('searchbar renders on screen', ()=> {
    render(<Search {...testProps}/>)
    const inputElement = screen.getByPlaceholderText('Enter a location...')
    expect(inputElement).toBeInTheDocument()
})

test('text can be entered into searchbar', ()=> {
    render(<Search {...testProps}/>)
    const inputElement = screen.getByPlaceholderText('Enter a location...')
    fireEvent.change(inputElement, { target: { value: 'New York' }})
    expect(inputElement.value).toBe('New York')
})

test('onClick function fires when button is pressed', ()=> {
    render(<Search {...testProps}/>)
    const inputElement = screen.getByPlaceholderText('Enter a location...')
    fireEvent.change(inputElement, { target: { value: 'New York' }})
    const buttonElement = screen.getByText('Search')
    fireEvent.click(buttonElement)
    expect(setLocationMock).toHaveBeenCalledWith('New York')
})


