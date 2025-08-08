import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app component', () => {
	render(<App />);
	const linkElement = screen.getByRole('heading', { name: /My Philippines Travel Level/i });
	expect(linkElement).toBeInTheDocument();
});
