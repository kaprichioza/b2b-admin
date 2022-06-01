import { nuxtConfig, AuthType } from '@fe/nuxt-config'
const config = nuxtConfig({
	// https://tracker-sdk.o3.ru/tracker/concept/configuration/
	//
	// Дефолтные значения:
	// config.namespace = имя сервиса (нельзя переопределить)
	// config.dev = process.env.NODE_ENV !== production
	//
	// tracker: {
	// 	// автоматическая инициализация трекера
	// 	autoInit: false,
	// 	// автоматическое отправление событий
	// 	pageTrackerEnabled: false,
	// },
	tracker: true,

	// Добавляет в context nuxt'a this.$logger https://gitlab.ozon.ru/fe/logger
	logger: true,

	// Включает sentry.
	// Для полноценной работы необходимо передать в values.yml SENTRY_DSN
	// больше информации https://gitlab.ozon.ru/fe/bootstraper/-/blob/master/docs/tutorial/sentry.md
	sentry: false,

	// Включает одну из возможных авторизаций
	// из require('@fe/nuxt-config').AuthType
	authorization: AuthType.keycloak,

	// Proxy для локальной разработки.
	// Для выключения proxy значение false
	// Для собственной настройки необходимо передать обьект
	// {'/api/example': 'http://example.stg.o3.ru'}
	// 'auto' сформирует конфиг проксирования на основе ~/api.json
	proxy: 'auto',

	// Включает devtoolkit в приложении
	// Для того чтобы увидеть интерфейс необходимо добавить fe-devtoolkit=true в localStorage
	// Или добавить о query параметр fe-devtoolkit=true
	// Пример: http://localhost:3000?fe-devtoolkit=true
	devtoolkit: true,

	// Проверяет наличие необходимых пакетов для работы выбранного кита
	// и подключает глобальные стили
	uikit: 'ods',

	// Опция для указания интервала обновления версии приложения (в мс). false для отключения проверки версии
	versionInterval: 30000,
})

export default config
