import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarouselHomePage from '.';

const TestProps = [{
    title: 'lone ranger expidition',
    img: './hero_image.jpg',
    description: 'TEXT TEXT'
  },{
    title: '2',
    img: './h2.jpg',
    description: 'TEXT TEXT'
  },{
    title: 'lone ron',
    img: './hero3.jpg',
    description: 'TEX1XT'
  },{
    title: 'lo4tion',
    img: './hero_5e.jpg',
    description: 'TEX3EXT'
  }]

test("to see if carousel loads", () => {
    render(<CarouselHomePage arr={TestProps}/>)

    const imgTitle = screen.getByText("lone ron")
    expect(imgTitle).toBeInTheDocument()

})
