type DomainSuccessPayload<T> = {
	success: true;
	data: T;
};

type DomainFailurePayload = {
	success: false;
	data: undefined;
};

export type DomainFeature<I, O> = (
	input: I,
) => Promise<DomainSuccessPayload<O> | DomainFailurePayload>;

export const backendUrl = process.env.BACKEND_URL;
