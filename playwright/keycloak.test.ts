import { test, expect } from '@playwright/test'

const LOGIN = process.env.LOGIN as string
const PS = process.env.PS as string

test('basic test', async ({
	page,
	baseURL,
}) => {
	// await page.goto(baseURL as string)

	// await page.type('[type=text]', LOGIN)
	// await page.type('[type=password]', PS)
	// await page.click('[name=login]')

	// const url = new URL(page.url())

	// expect(url.hash).toBeTruthy()

	// await page.waitForURL(/\/([\w-]+)?(?!#)/)

	// expect(page.url()).not.toContain('/login-error')
	// expect(await page.innerText('[aria-current="page"]')).toEqual('Главная')
})
