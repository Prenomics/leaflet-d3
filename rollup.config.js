import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const path = require('path');
const pkg = require('./package.json');

export default {
	input: ['src/index.js'],
	external: [
		'd3-array',
		'd3-scale',
		'd3-hexbin',
		'd3-dispatch',
		'd3-selection',
		'd3-transition',
		'leaflet'
	],
	output: {
		format: 'es',
		dir: 'dist',
		entryFileNames: 'main.js',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		terser({
			keep_classnames: true,
			output: {
				comments: false,
			},
		}),
	],
};
