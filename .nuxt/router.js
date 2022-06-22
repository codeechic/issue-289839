import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fe318d5 = () => interopDefault(import('..\\pages\\about-me\\index.vue' /* webpackChunkName: "pages/about-me/index" */))
const _ffcc3350 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _6b818292 = () => interopDefault(import('..\\pages\\admin\\auth.vue' /* webpackChunkName: "pages/admin/auth" */))
const _f7004226 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-me",
    component: _7fe318d5,
    name: "about-me"
  }, {
    path: "/admin",
    component: _ffcc3350,
    name: "admin"
  }, {
    path: "/admin/auth",
    component: _6b818292,
    name: "admin-auth"
  }, {
    path: "/",
    component: _f7004226,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
