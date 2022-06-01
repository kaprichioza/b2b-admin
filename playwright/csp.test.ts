import { test, expect } from '@playwright/test'

test('После загрузки страницы не отправляются отчеты об ошибках CSP', async ({
	page,
	baseURL,
}) => {
	let cspReportIsExists = false
	page.on('request', (request) => {
		if (request.url() === `${baseURL}/csp-report` && request.method() === 'POST') {
			cspReportIsExists = true
		}
	})
	await page.goto(baseURL as string, {
		waitUntil: 'domcontentloaded',
	})
	await page.waitForTimeout(3000)

	// Проверяем, что не было ни одного запроса на ручку /csp-report
	expect(cspReportIsExists).toEqual(false)
})
