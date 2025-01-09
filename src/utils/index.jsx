import { useState, useEffect } from "react";

// Optimized image component
export function OptimizedImage({ src, alt, width, height, className }) {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading='lazy'
			decoding='async'
			onLoad={(e) => {
				e.target.classList.remove("opacity-0");
			}}
			className={`transition-opacity duration-300 opacity-0 ${className}`}
		/>
	);
}

// Optimized form handler with debouncing
export function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
