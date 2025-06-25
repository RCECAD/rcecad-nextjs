import type { Hydraulic } from "./hydraulic";

export type Project = {
	id: string;
	name: string;
	businessName: string;
	riverBasinName: string;
	city: string;
	state: string;
	engineerName: string;
	hydraulicData: Hydraulic;
};

// export type Calculations = {}
