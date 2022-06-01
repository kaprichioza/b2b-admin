import { VueComponent, Component, VNode } from '@fe/types'

import styles from './default.module.css'

import { LayoutHeader } from '~/components'
import { RootModule, useStore } from '~/store/root'

@Component({
	async fetch() {
		const store = useStore<RootModule>(this.$store)

		// 👉 Неплохое место для инициализации общих для проекта зависимостей
	},
	errorCaptured(err) {
		return
		this.$logger.error(err)
	},
})
export default class DefaultLayout extends VueComponent {

	private projectName = 'b2b-admin'

	private get currentPath() {
		return this.$nuxt.$route.path
	}

	private get menuItems() {
		return [
			{
				text: 'main',
				url: '/',
				active: this.currentPath === '/',
			},
		]
	}

	private logout() {
		this.$keycloak && this.$keycloak.logout()
	}

	private get isLoggedIn() {
		return this.$keycloak ? Boolean(this.$keycloak.accessToken) : false
	}

	private get userName() {
		return this.$keycloak && this.$keycloak.name || ''
	}

	render(): VNode {
		return (
			<div class={styles.layout}>
				<LayoutHeader
					projectName={this.projectName}
					menuItems={this.menuItems}
					isLoggedIn={this.isLoggedIn}
					logout={this.logout}
					userName={this.userName}
				/>

				<div>
					<nuxt />
				</div>
			</div>
		)
	}
}
