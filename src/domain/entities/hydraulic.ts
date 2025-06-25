export type Hydraulic = {
	population: Population;
	perCapita: PerCapita;
	roadCoating: RoadCoating;
	coefficient: Coefficient;
	material: Material;
	infiltration: Infiltration;
	returnCoefficient: number;
};

export type Population = {
	initialPopulation: number;
	saturationPopulation: number;
};

export type PerCapita = {
	initialPerCapita: number;
	finalPerCapita: number;
};

export type RoadCoating = {
	maximumCoating: number;
	minimumCoating: number;
};

export type Coefficient = {
	k1Coefficient: number;
	k2Coefficient: number;
};

export type Infiltration = {
	initialInfiltration: number;
	finalInfiltration: number;
};

export type Material = "pvc" | "aluminum" | "ceramic";
