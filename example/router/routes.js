import Button from '../pages/button.vue'
import Popup from '../pages/popup.vue'
import Dialog from '../pages/dialog.vue'
import Loading from '../pages/loading.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
