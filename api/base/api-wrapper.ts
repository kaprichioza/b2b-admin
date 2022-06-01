import Axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

import pkg from '~/package.json'
const basePath = '/api'

export type TokenProvider = Promise<() => Promise<{ token: string; logout: () => void }>>
export type ApiConstructor<T> = new (axios: AxiosInstance) => T

//data => data && typeof data === 'object' ? snakeCaseKeys(data, { deep: true }) : data
function createApi<T>(Api: ApiConstructor<T>, basePath: string, tokenProvider?: TokenProvider): T {
	const axios = Axios.create({
		timeout: 59000,
		baseURL: basePath,
	})

	let getToken: () => Promise<{ token: string; logout: () => void }>

	axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
		if (tokenProvider) {
			if (!getToken) {
				getToken = await tokenProvider
			}

			const authInfo = await getToken()

			if (authInfo && authInfo.token) {
				config.headers['X-O3-App-Name'] = pkg.name
				config.headers['Authorization'] = `Bearer ${authInfo.token}`
			}
		}

		return config
	}, (error: AxiosError) => {
		return Promise.reject(error)
	})

	axios.interceptors.response.use((response) => response, async (error) => {
		if (error.response && tokenProvider && error.response.status === 401) {
			if (!getToken) {
				getToken = await tokenProvider
			}
			(await getToken()).logout()
		}

		return Promise.reject(error)
	})

	return new Api(axios)
}

export { createApi }
