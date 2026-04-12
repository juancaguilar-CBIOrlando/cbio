export const prerender = false

import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
	const headers = { "Content-Type": "application/json" }

	let body: Record<string, string>
	try {
		body = await request.json()
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON" }), {
			status: 400,
			headers,
		})
	}

	const { name, memberSince, phone, email, godWorking, encouragement } = body

	if (!name || !phone || !godWorking) {
		return new Response(JSON.stringify({ error: "Missing required fields" }), {
			status: 400,
			headers,
		})
	}

	const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY

	if (!accessKey) {
		console.error("Missing WEB3FORMS_ACCESS_KEY env var")
		return new Response(JSON.stringify({ error: "Server configuration error" }), {
			status: 500,
			headers,
		})
	}

	const message = [
		`Nombre: ${name}`,
		`Teléfono: ${phone}`,
		email ? `Correo: ${email}` : null,
		memberSince ? `Tiempo en la iglesia: ${memberSince}` : null,
		`¿Cómo está obrando Dios en tu vida?\n${godWorking}`,
		encouragement ? `Palabra de aliento para la iglesia:\n${encouragement}` : null,
		`\nEnviado desde la campaña Un Corazón · cbiorlando.org`,
	]
		.filter(Boolean)
		.join("\n\n")

	try {
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				access_key: accessKey,
				subject: `Testimonio de ${name} — Un Corazón`,
				from_name: name,
				message,
			}),
		})

		if (!res.ok) {
			const err = await res.text()
			console.error("Web3Forms error:", err)
			return new Response(JSON.stringify({ error: "Email delivery failed" }), {
				status: 502,
				headers,
			})
		}

		return new Response(JSON.stringify({ ok: true }), { status: 200, headers })
	} catch (err) {
		console.error("Fetch error:", err)
		return new Response(JSON.stringify({ error: "Network error" }), {
			status: 500,
			headers,
		})
	}
}
