const
	path = require('path'),
	pkg = require('./package.json');

export default {
	input: path.posix.resolve('src/js/index.js'),
	external: [
		'd3-array',
		'd3-scale',
		'd3-hexbin',
		'd3-dispatch',
		'd3-selection',
		'leaflet'
	],
	output: {
		banner: `/*! ${pkg.name} - ${pkg.version} - ${pkg.copyright} + */`,
		file: path.posix.join('./dist', `${pkg.artifactName}.js`),
		format: 'umd',
		globals: {
			'd3': 'd3',
			'd3-hexbin': 'd3.hexbin',
			'leaflet': 'L'
		},
		name: pkg.moduleName,
		sourcemap: true
	}
};
