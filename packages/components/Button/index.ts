import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Button/style/index.scss'
import Button from '@/components/Button/src/button.vue'

Button.install = function (app: App) {
	app.component(`${prefix}Button`, Button)
	return app
}

export { Button }
