import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsBar from './index.js'

const testProps = {
    distance: 10, // The distance in kilometers
    time: '30 minutes', // The time it takes
    icons: ['clock', 'dog-friendly', 'toilets'], // An array of icon names
};

test('details bar renders icons correctly', ()=> {
    render(<DetailsBar {...testProps}/>)
    testProps.icons.forEach(icon => {
        expect(screen.getByAltText(icon)).toBeInTheDocument();
    });
})

test('time displays on screen', ()=> {
    render(<DetailsBar {...testProps}/>)
    const time = screen.getByText('30 minutes')
    expect(time).toBeInTheDocument()
})