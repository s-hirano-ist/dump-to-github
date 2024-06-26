"use client";

import { Button } from "@/components/ui/button";

type Props = {
	numberOfRows: number;
	onClickPrevious?: () => void;
	previousButtonDisabled?: boolean;
	onClickNext?: () => void;
	nextButtonDisabled?: boolean;
};
export function TableFooter({
	numberOfRows,
	onClickPrevious,
	previousButtonDisabled = true,
	onClickNext,
	nextButtonDisabled = true,
}: Props) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<span className="text-3xl font-bold text-primary">{numberOfRows}</span>
				個の項目
			</div>
			<div className="space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={onClickPrevious}
					disabled={previousButtonDisabled}
				>
					前のページ
				</Button>
				<Button
					variant="outline"
					size="sm"
					color="primary"
					onClick={onClickNext}
					disabled={nextButtonDisabled}
				>
					次のページ
				</Button>
			</div>
		</div>
	);
}
