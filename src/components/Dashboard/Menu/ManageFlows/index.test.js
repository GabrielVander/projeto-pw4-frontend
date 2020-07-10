import React from 'react';
import { render } from '@testing-library/react';
import ManageFlows from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<ManageFlows/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});