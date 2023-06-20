import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Footer from '../Footer';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';


// Tests that the Footer component renders without errors
test('renders without errors', () => {
    render(<Footer />, {wrapper: BrowserRouter});
    const footer = screen.getByRole('navigation');
    expect(footer).toBeInTheDocument();
});

// Tests that all the links and images render on the footer
test('renders all the links and images without errors', () => {
    render(<Footer />, {wrapper: BrowserRouter});

    const footer = screen.getByRole('navigation');
    expect(footer).toBeInTheDocument();

    const logo = screen.getByAltText(/walkmate homepage footer logo/i);
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutUsLink = screen.getByRole('link', { name: /about us/i });
    expect(aboutUsLink).toBeInTheDocument();

    const eventsLink = screen.getByRole('link', { name: /events/i });
    expect(eventsLink).toBeInTheDocument();

    const exploreLink = screen.getByRole('link', { name: /explore/i });
    expect(exploreLink).toBeInTheDocument();

    const community = screen.getByText(/community/i);
    expect(community).toBeInTheDocument();

    const signUp = screen.getByText(/sign up/i);
    expect(signUp).toBeInTheDocument();

    const contactUs = screen.getByText(/contact us/i);
    expect(contactUs).toBeInTheDocument();
});

//Tests that all the links navigate you to the correct page based off the selected link
test('Checks footer links navigate you to correct page', () => {
    render(<Footer />, {wrapper: BrowserRouter});

    const homeLink = screen.getByRole('link', { name: /home/i });
    fireEvent.click(homeLink);
    expect(window.location.hash).toBe('#home');

    const aboutUsLink = screen.getByRole('link', { name: /about us/i });
    fireEvent.click(aboutUsLink);
    expect(window.location.hash).toBe('#about-us');

    const eventsLink = screen.getByRole('link', { name: /events/i });
    fireEvent.click(eventsLink);
    expect(window.location.hash).toBe('#events');

    const exploreLink = screen.getByRole('link', { name: /explore/i });
    fireEvent.click(exploreLink);
    expect(window.location.hash).toBe('#explore');
  });



