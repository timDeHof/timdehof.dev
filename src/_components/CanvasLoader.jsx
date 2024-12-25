import { Html } from "@react-three/drei";

function CanvasLoader() {
	return (
		<Html center>
			<div className='flex items-center justify-center'>
				<div className='w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin' />
			</div>
		</Html>
	);
}

export default CanvasLoader;
