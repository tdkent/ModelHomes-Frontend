import { useLocation } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	const location = useLocation();
	const pathname = location.pathname;

	const arr = Array.from({ length: 10 }, (_, idx) => idx);

	if (pathname === "/homes") {
		return (
			<div
				data-testid="loading-skeleton"
				className="flex flex-col gap-4 w-full my-4"
			>
				<Skeleton className="h-16 w-full mb-8 lg:w-40 lg:h-12 lg:ml-4" />
				{arr.map((el) => {
					return (
						<div
							key={el}
							className="flex items-center gap-4 px-4 sm:px-6 md:px-6 lg:gap-8 lg:px-8"
						>
							<Skeleton className="h-16 w-16 rounded-full lg:h-20 lg:w-20" />
							<div className="space-y-2">
								<Skeleton className="h-3 w-40 lg:h-4" />
								<Skeleton className="h-3 w-40 lg:h-4" />
								<Skeleton className="h-3 w-50 lg:h-4" />
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-col w-full gap-4 mt-20 sm:mt-28 px-4 sm:px-16 md:mt-32 lg:w-200 lg:mx-auto lg:px-0 lg:mt-40">
				<Skeleton className="h-8 w-50" />
				<div className="flex flex-col gap-4 my-8">
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
				</div>
				<Skeleton className="h-8 w-50" />
				<div className="flex flex-col gap-4 my-8">
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
				</div>
				<Skeleton className="h-8 w-50" />
				<div className="flex flex-col gap-4 my-8">
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
					<div className="flex flex-col gap-3">
						<Skeleton className="h-4 w-40 lg:h-4" />
						<Skeleton className="h-4 w-40 lg:h-4" />
					</div>
				</div>
			</div>
		</>
	);
}
