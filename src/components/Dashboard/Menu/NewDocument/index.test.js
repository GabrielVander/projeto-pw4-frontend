import React from 'react';
import { render } from '@testing-library/react';
import NewDocument from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<NewDocument/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});