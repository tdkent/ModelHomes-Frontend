import { TriangleAlert } from "lucide-react";
import { getErrorMessage } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Props {
	error: unknown;
	reset: (...args: unknown[]) => void;
}

export default function GlobalErrorBoundary({ error, reset }: Props) {
	const msg = getErrorMessage(error);
	console.debug("Error message:", msg);
	console.error(error);

	return (
		<div className="m-4">
			<Card role="alert" className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-destructive flex items-center gap-2">
						<TriangleAlert />
						Something went wrong!
					</CardTitle>
					<CardDescription>An unexpected error occurred.</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Please click the Retry button below, or try again later.</p>
				</CardContent>
				<CardFooter>
					<Button onClick={reset}>Retry</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
