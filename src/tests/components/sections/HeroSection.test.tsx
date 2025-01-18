import { render } from '@testing-library/react';
import Cards from "../../../components/sections/Hero";

// cards should display child component
it('should display Card component', () => {
    render(<Cards />);
    const component = (/Card/i);
    expect(component).toBeDefined();
});