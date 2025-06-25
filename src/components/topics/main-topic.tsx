import Image from "next/image";

export const MainTopic = () => {
	return (
		<>
			<Image
				src={"/lines.svg"}
				alt=""
				width={915}
				height={1674}
				className="absolute"
			/>
			<Image src={"/rcecad.svg"} alt="RCEcad" width={413} height={105} />
		</>
	);
};
