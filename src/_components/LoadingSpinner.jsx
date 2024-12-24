function LoadingSpinner() {
	return (
		<div className='flex items-center justify-center min-h-[200px]'>
			<div className='w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin' />
		</div>
	);
}

export default LoadingSpinner;
