/**
 * Created by Admin on 2017/2/14.
 */
import Hello from 'components/Hello'
import login from '../view/login'
import SignOut from '../view/signout/index.vue'
import Home from '../view/Home'
import Interest from '../view/Interest'
import MyTask from '../view/MyTask'
import PersonalCenter from '../view/PersonalCenter'

import TaskDoing from 'components/TaskDoing.vue'
import TaskEnding from 'components/TaskEnding.vue'
const routes = [

	  {
	    path: '/',
	    name: 'Hello',
	    component: Hello
	  },
	{ path: '/login',component:login },
	{ path: '/signout',component:SignOut },
	{ path: '/home',
		component: Home ,
		beforeEnter: (to, from, next) => {
			// ...
			next()
		}
	},
	{ path: '/myTask',component: MyTask,
		children: [
			{ path: '/', component: TaskDoing },
			{ path: 'TaskDoing', component: TaskDoing },
			{ path: 'TaskEnding', component: TaskEnding }
		]
	},
	{ path: '/interest', component: Interest },
	{ path: '/personalCenter', component: PersonalCenter }
]

export default routes;