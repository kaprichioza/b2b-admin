import { VueComponent, Component, Prop } from '@fe/types'
import { Header, Logo, Icon, Avatar, Tabs, TabNuxt } from '@fe/ods'
import { ic_m_exit, ic_s_enter } from '@fe/ods/icons'

type MenuItemType = {
	text: string
	url: string
	active: boolean
}

interface Props {
	isLoggedIn?: boolean
	login?: () => Promise<void> | void
	logout?: () => Promise<void> | void
	userName?: string
	projectName: string
	menuItems: MenuItemType[]
}

@Component
export class LayoutHeader extends VueComponent<Props> {
	@Prop({
		default: false,
	}) readonly isLoggedIn!: Props['isLoggedIn']

	@Prop() readonly projectName!: Props['projectName']
	@Prop() readonly login!: Props['login']
	@Prop() readonly logout!: Props['logout']
	@Prop() readonly userName!: Props['userName']
	@Prop() readonly menuItems!: Props['menuItems']

	render() {
		return (
			<Header
				logo={(
					<Logo
						projectName={this.projectName}
					/>
				)}
				beforeSeparator={[
					this.userName && <Avatar key="question" alt={this.userName}/>,
				]}
				afterSeparator={this.isLoggedIn ? (
					<Icon
						aria-label="Выход"
						whenClick={this.logout}
						key="logout"
						source={ic_m_exit}
					/>
				) : this.login ? (
					<Icon
						aria-label="Вход"
						whenClick={this.login}
						key="login"
						source={ic_s_enter}
					/>
				) : null}
				menu={(
					<Tabs>
						{this.menuItems.map((item) => (
							<TabNuxt
								key={item.text}
								to={item.url}
								label={item.text}
								active={item.active}
							/>
						))}
					</Tabs>
				)}
			/>
		)

	}
}
