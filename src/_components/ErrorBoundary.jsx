import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
					<h2 className='text-2xl font-bold text-red-500 mb-4'>
						Something went wrong!
					</h2>
					<button
						className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
						onClick={() => window.location.reload()}>
						Reload Page
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
