import React from 'react';
import { render } from '@testing-library/react';
import DashboardMenu from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<DashboardMenu/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});