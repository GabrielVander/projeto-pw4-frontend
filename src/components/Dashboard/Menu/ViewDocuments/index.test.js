import React from 'react';
import { render } from '@testing-library/react';
import ViewDocuments from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<ViewDocuments/>);

		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});