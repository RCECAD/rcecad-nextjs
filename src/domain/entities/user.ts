type UserType = "person" | "business";

export type User = {
	id: string;
	userType: UserType;
	name: string;
	cnpj?: string;
	cpf?: string;
	email: string;
	password: string;
	token: string;
	role: string;
	created: string;
	expiresIn: string;
	status: string;
};
