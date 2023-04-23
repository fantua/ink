import React from 'react';
import {render} from '../../src/index.js';

const Test = () => {
	throw new Error('errored');
};

const app = render(<Test />, {initWaitUntilExit: true});

try {
	await app.waitUntilExit();
} catch (error: unknown) {
	console.log(`waitUntilExit catch: ${(error as Error).message}`);
}