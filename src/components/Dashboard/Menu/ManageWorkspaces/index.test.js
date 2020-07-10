import React from 'react';
import { render } from '@testing-library/react';
import ManageWorkspaces from './index';

describe('Component renders properly', () => {
	test('Matches snapshot', () => {
		const component = render(<ManageWorkspaces/>);
        
		expect(component).toBeDefined();
		expect(component).toMatchSnapshot();
	});
});