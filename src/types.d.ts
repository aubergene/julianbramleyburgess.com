declare module '*.csv' {
	import { DSVRowArray } from 'd3-dsv';
	const value: DSVRowArray<any>;
	export default value;
}
