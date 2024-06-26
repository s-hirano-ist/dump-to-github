import { getUnexportedNewsDetails } from "@/apis/prisma/news-detail";
import ErrorView from "@/components/error-view";
import { QueuedStack } from "./queued-stack";

export async function QueuedContents() {
	try {
		const newsDetails = await getUnexportedNewsDetails();

		return (
			<QueuedStack
				queuedContents={newsDetails.map((d) => {
					return {
						id: d.id,
						title: d.title,
						quote: d.quote,
						url: d.url,
						category: d.category?.category ?? "",
					};
				})}
			/>
		);
	} catch (error) {
		console.error("Unexpected error.", error);
		return (
			<div className="flex flex-col items-center">
				<ErrorView />
			</div>
		);
	}
}
