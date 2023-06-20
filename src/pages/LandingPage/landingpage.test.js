import { render,screen, fireEvent } from "@testing-library/react";
import LandingPage from "./index.js";
import '@testing-library/jest-dom/extend-expect';

test("About Us section rendering", () => {
    
    render(<LandingPage />);
    
    // Assert that the "Why WalkMate?" heading is rendered
    const aboutUsHeading = screen.getByText("Why WalkMate?");
    expect(aboutUsHeading).toBeInTheDocument();
    
    // Assert that the "Community" section is rendered
    const reliableText = screen.getByText("Reliable");
    const reliableDescription = screen.getByText("100% of our users have given us a 5 star rating in terms of reliability. Our routes are safe, secure and our events are all planned meticulously according to weather predictions.");
    expect(reliableText).toBeInTheDocument();
    expect(reliableDescription).toBeInTheDocument();
  });

/* test("Button click event", () => {
    const mockHandleClick = jest.fn(); // Mocking the handleClick function
    const { getByText } = render(<LandingPage onClick={mockHandleClick} />);
    const startExploringButton = getByText("Start exploring...");
    fireEvent.click(startExploringButton);
    expect(mockHandleClick).toHaveBeenCalled(); // Expect that the handleClick function has been called
  }); */
  
  