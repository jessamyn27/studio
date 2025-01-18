import { render, screen } from '@testing-library/react';
import Navbar from "../../../components/sections/Navbar";

// test visibility of UI elements expected to display
test('should display: How To Use', () => {
    render(<Navbar />);
    const message = screen.queryByText(/How To Use/i);
    expect(message).toBeVisible()
});

test('should display: Style Basics', () => {
    render(<Navbar />);
    const message = screen.queryByText(/Style Basics/i);
    expect(message).toBeVisible()
});

test('should display: Web Components', () => {
    render(<Navbar />);
    const message = screen.queryByText(/Web Components/i);
    expect(message).toBeVisible()
});