import { NextResponse } from "next/server";
import { signIn, type Input } from "@/domain/features/sign-in-feature";

export async function POST(req: Request) {
	const { email, password }: Input["user"] = await req.json();
	const { success, data } = await signIn({ user: { email, password } });

	if (!success || !data) {
		return NextResponse.json(
			{ error: "Credenciais inválidas" },
			{ status: 401 },
		);
	}

	const expiresDate = new Date(data.expiresIn);

	const res = NextResponse.json({ ok: true });
	res.cookies.set({
		name: "token",
		value: data.token,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		expires: expiresDate,
	});

	return res;
}
