import { getAllNewsDetails } from "@/apis/prisma/news-detail";
import ErrorView from "@/components/error-view";
import { AllTable } from "./all-table";

export async function AllContents() {
	try {
		const newsDetails = await getAllNewsDetails();

		return (
			<AllTable
				data={newsDetails.map((d) => {
					return {
						id: d.id,
						title: d.title,
						quote: d.quote,
						url: d.url,
						status: d.status,
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
