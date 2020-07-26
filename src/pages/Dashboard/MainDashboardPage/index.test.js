import React from 'react';
import { render } from '@testing-library/react';
import MainDashboardPage from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<MainDashboardPage/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});