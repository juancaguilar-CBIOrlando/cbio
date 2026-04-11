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

	const { name, memberSince, godWorking, encouragement } = body

	if (!name || !godWorking) {
		return new Response(JSON.stringify({ error: "Missing required fields" }), {
			status: 400,
			headers,
		})
	}

	const apiKey = import.meta.env.RESEND_API_KEY
	const toEmail = import.meta.env.TESTIMONY_TO_EMAIL

	if (!apiKey || !toEmail) {
		console.error("Missing RESEND_API_KEY or TESTIMONY_TO_EMAIL env vars")
		return new Response(JSON.stringify({ error: "Server configuration error" }), {
			status: 500,
			headers,
		})
	}

	const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><style>
  body { font-family: Georgia, serif; color: #161e57; max-width: 600px; margin: 0 auto; padding: 24px; }
  h1 { font-size: 24px; border-bottom: 3px solid #fcd22a; padding-bottom: 12px; }
  .field { margin: 20px 0; }
  .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #7b82a8; margin-bottom: 4px; }
  .value { font-size: 16px; line-height: 1.6; white-space: pre-wrap; }
  .footer { margin-top: 32px; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px; }
</style></head>
<body>
  <h1>✉️ Nuevo Testimonio — Un Corazón</h1>
  <div class="field">
    <div class="label">Nombre</div>
    <div class="value">${escapeHtml(name)}</div>
  </div>
  ${memberSince ? `<div class="field"><div class="label">Tiempo en la iglesia</div><div class="value">${escapeHtml(memberSince)}</div></div>` : ""}
  <div class="field">
    <div class="label">¿Cómo está obrando Dios en tu vida?</div>
    <div class="value">${escapeHtml(godWorking)}</div>
  </div>
  ${encouragement ? `<div class="field"><div class="label">Palabra de aliento para la iglesia</div><div class="value">${escapeHtml(encouragement)}</div></div>` : ""}
  <div class="footer">Enviado desde la campaña Un Corazón · cbiorlando.org</div>
</body>
</html>`

	try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				from: "Un Corazón <noreply@cbiorlando.org>",
				to: [toEmail],
				subject: `Testimonio de ${name} — Un Corazón`,
				html,
			}),
		})

		if (!res.ok) {
			const err = await res.text()
			console.error("Resend error:", err)
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

function escapeHtml(str: string) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
}
