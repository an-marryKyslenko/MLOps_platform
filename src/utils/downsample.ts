import type { Experiment } from "../types/Experiment";

export const downsample = (data: Experiment[], every: number) =>
	data.filter((_, index) => index % every === 0);
