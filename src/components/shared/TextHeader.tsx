import { Separator } from "@/components/ui/separator";

interface Props {
	text: string;
}

export default function TextHeading({ text }: Props) {
	return (
		<>
			<div>
				<h2 className="heading">{text}</h2>
				<Separator />
			</div>
		</>
	);
}
