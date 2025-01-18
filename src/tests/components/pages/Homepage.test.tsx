import { render } from '@testing-library/react';
import Home from "../../../components/pages/Home";

// Home should display child component
it('should display Navbar component', () => {
    render(<Home />);
    const component = (/Navbar/i);
    expect(component).toBeDefined();
});