import { VueComponent, Component, VNode } from '@fe/types'

import styles from './index.module.css'

import { RootModule, useStore } from '~/store/root'

@Component({
	layout: 'default',

	async fetch({
		store: $store, query, route,
	}) {
		const store = useStore<RootModule>($store)

		// Начальный запрос за получением данных на странице
	},
})

export default class MainPage extends VueComponent {
	root = useStore<RootModule>(this.$store)

	trackSomeEvent() {

		/**
		 * https://tracker-sdk.o3.ru/
		 * https://tracker-sdk.o3.ru/tracker/concept/custom-events/
		 */
		this.$tracker.sendEvent({
			actionType: 'some_action',
		})
	}

	render(): VNode {
		return (
			<div class={styles.page}>
				<div class={styles.headerText}>Полезные советы</div>

				<div class={styles.help}>
					<div class={styles.button}>
						<span>⌘</span> + <span>Shift</span> + <span>P</span>
					</div>

					<div>В VsCode откроет панель команд. Для создания нового компонента выбери <strong>hygen</strong> </div>
				</div>

				<div class={styles.help}>
					<div>
						<span class={styles.cmd}>
						/&gt; npm run api
						</span>
					</div>

					<div>Команда перегенерирует API на основе swagger-файла, указанного в createApiDefinition </div>
				</div>
			</div>
		)
	}
}
