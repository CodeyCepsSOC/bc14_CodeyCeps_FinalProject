import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RouteDetailDropdown from './index'

const handleClick = jest.fn()

const testProps = {
    name: 'Test Route', // The name of the route
    distance: 20, // The distance in kilometers
    time: '2 hours', // The time it takes
    icons: ['car', 'bike', 'bus'], // An array of icon names for the DetailsBar
    description: 'This is a test description for the route.', // A description of the route
    map: 'https://example.com/map.jpg', // A URL for the map image
    onClick: handleClick
};

test('text is displaying correctly', ()=> {
    render(<RouteDetailDropdown {...testProps} />)
    const time = screen.getByText('2 hours')
    const distance = screen.getByText('20 km')
    const description = screen.getByText('This is a test description for the route.')
    expect(time).toBeInTheDocument()
    expect(distance).toBeInTheDocument()
    expect(description).toBeInTheDocument()
})

test('details bar renders icons correctly', ()=> {
    render(<RouteDetailDropdown {...testProps} />)
    testProps.icons.forEach(icon => {
        expect(screen.getByAltText(icon)).toBeInTheDocument();
    });
})

test('map image renders correctly', () => 
{
    render(<RouteDetailDropdown {...testProps}/>)
    const image = screen.getByAltText('route map')
    expect(image.src).toContain('https://example.com/map.jpg')
})

test('onClick works correctly', () => 
{
    render(<RouteDetailDropdown {...testProps}/>)
    fireEvent.click(screen.getByText('X'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})

