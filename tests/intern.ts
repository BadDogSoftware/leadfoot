export const capabilities = {
	'selenium-version': '2.43.0',
	'idle-timeout': 30
};

export const environments = [
	{ browserName: 'microsoftedge', fixSessionCapabilities: false },
	{ browserName: 'internet explorer', version: '11', platform: 'WIN8', fixSessionCapabilities: false },
	{ browserName: 'internet explorer', version: '10', platform: 'WIN8', fixSessionCapabilities: false },
	{ browserName: 'internet explorer', version: '9', platform: 'WINDOWS', fixSessionCapabilities: false },
	{ browserName: 'firefox', version: '33', platform: [ 'WINDOWS', 'MAC' ], fixSessionCapabilities: false },
	{ browserName: 'chrome', version: '38', platform: [ 'WINDOWS', 'MAC' ], fixSessionCapabilities: false },
	{ browserName: 'safari', version: '9', platform: 'MAC', fixSessionCapabilities: false }
];

export const maxConcurrency = 2;
export const tunnel = 'BrowserStackTunnel';

export const loaderOptions = {
	packages: [
		{ name: 'leadfoot', location: '_build' },
		{ name: 'src', location: '_build/src' },
		{ name: 'dojo', location: 'node_modules/dojo'}
	],
	map: {
		'leadfoot/tests/unit/lib': {
			'src': 'dojo/node!../../../src'
		},
		'leadfoot/tests/functional/helpers': {
			'src': 'dojo/node!../../../src'
		},
		'leadfoot/tests/functional/support': {
			'src': 'dojo/node!../../../src'
		},
		'leadfoot/tests/unit': {
			'src': 'dojo/node!../../src'
		},
		'leadfoot/tests/functional': {
			'src': 'dojo/node!../../src'
		}
	}
};

export const loaders = {
	'host-browser': 'node_modules/dojo-loader/loader.js',
	'host-node': 'dojo-loader'
};

export const suites = [
	'dojo/has!host-node?leadfoot/tests/unit/lib/util',
	'dojo/has!host-node?leadfoot/tests/unit/compat'
];

export const functionalSuites = [
	'leadfoot/tests/functional/helpers/pollUntil',
	'leadfoot/tests/functional/Server',
	'leadfoot/tests/functional/Session',
	'leadfoot/tests/functional/Element',
	'leadfoot/tests/functional/Command',
	'leadfoot/tests/functional/compat'
];

export const excludeInstrumentation = /^(?:tests|node_modules)\//;
