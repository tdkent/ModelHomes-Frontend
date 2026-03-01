import { Separator } from "@/components/ui/separator";

interface Props {
	element: "h1" | "h2";
	text: string;
}

export default function TextHeading({ element, text }: Props) {
	return (
		<>
			<div>
				{element === "h1" && <h1>{text}</h1>}
				{element === "h2" && <h2>{text}</h2>}
				<Separator />
			</div>
		</>
	);
}
