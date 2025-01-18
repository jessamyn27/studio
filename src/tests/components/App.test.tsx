import { render } from '@testing-library/react';
import App from "../../components/App";

// root app should display Home component
it('should display Home component', () => {
    render(<App />);
    const component = (/Home/i);
    expect(component).toBeDefined()
});