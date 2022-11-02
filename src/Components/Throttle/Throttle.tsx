import { FC, useEffect, useState, useCallback } from 'react';

function throttle(func: (event: MouseEvent) => void, delay: number) {
	let shouldWait: boolean = false;
	let waitingArgs: MouseEvent | null = null;

	const timeoutFunc = () => {
		if (waitingArgs === null) {
			shouldWait = false
		} else {
			func(waitingArgs);
			waitingArgs = null
			setTimeout(timeoutFunc, delay)
		}
	}

	return (args: MouseEvent) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}
	
		func(args);
		shouldWait = true;

		setTimeout(timeoutFunc, delay)
	}
}

export const Throttle: FC = () => {
	const [clientXY, setClientXY] = useState<number[]>([0, 0]);
	const [throttleXY, setThrottleXY] = useState<number[]>([0, 0]);

	const mouseTrekker = useCallback((event: MouseEvent) => {
		setClientXY([event.clientX, event.clientY]);
	}, []);

	const mouseThrottle = useCallback(throttle((event) => setThrottleXY([event.clientX, event.clientY]), 1000), []);

	useEffect(() => {
		document.addEventListener('mousemove', mouseTrekker)
		document.addEventListener('mousemove', mouseThrottle)
	}, [])
	return (
		<div>
			<h3>Mouse current position</h3>
			<h5>X: {clientXY[0]}, Y: {clientXY[1]}</h5>
			<h3>Mouse throttled position</h3>
			<h5>X: {throttleXY[0]}, Y: {throttleXY[1]}</h5>
		</div>
	)
}