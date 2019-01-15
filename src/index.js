export default function blur(node, params) {
	const {
		radius = 10,
		inverse = false,
		delay = 0,
		duration = 400,
		easing = t => 1 - Math.pow(1 - t, 3),
	} = params;

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			opacity: ${t}; 
			filter: blur(${ (inverse ? t : u) * radius}px);
		`
	};
}