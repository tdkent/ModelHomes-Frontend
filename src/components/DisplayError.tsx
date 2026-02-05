import { TriangleAlert } from "lucide-react";

interface Props {
	error: unknown;
	msg: string;
}

export default function DisplayError({ error, msg }: Props) {
	console.error(error);

	return (
		<div className="border rounded-md border-black/10 w-full max-w-sm p-4 flex flex-col gap-2">
			<div className="text-destructive flex items-center gap-2">
				<TriangleAlert />
				Something went wrong!
			</div>
			<div>{msg}</div>
		</div>
	);
}
