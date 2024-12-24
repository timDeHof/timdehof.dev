import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='flex flex-col items-center justify-center min-h-[400px]'>
					<h2 className='text-2xl font-bold'>Oops, there was an error</h2>
					<button
						className='px-4 py-2 mt-4 text-white rounded bg-primary'
						onClick={() => this.setState({ hasError: false })}>
						Try again
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
