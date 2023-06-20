import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RouteDetailCard from './index'

const handleClick = jest.fn()

const testProps = {
    img: 'https://example.com/image.jpg', // A URL for the image that will be used as a background
    name: 'Test Route', // The name of the route
    time: '2 hours', // The time it takes to complete the route
    icons: ['clock', 'dog-friendly', 'toilets'], // An array of icon names
    description: 'This is a test description for the route.', // A description of the route
    index: 1, // The index of the route, used in the onClick handler
    onClick: handleClick
};

test('route title renders correctly', () => 
{
    render(<RouteDetailCard {...testProps}/>)
    const routeTitle = screen.getByText(/Test Route/i)
    expect(routeTitle).toBeInTheDocument()
})

test('route icons render correctly', () => 
{
    render(<RouteDetailCard {...testProps}/>)
    const image = screen.getByAltText('dog-friendly')
    expect(image.src).toContain('/dog-friendly.svg')
})

test('onClick prop functions correctly', () => 
{
    render(<RouteDetailCard {...testProps}/>)
    fireEvent.click(screen.getByText('Test Route'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})
