import React from 'react';
import { render } from '@testing-library/react';
import DashboardPage from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<DashboardPage/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});