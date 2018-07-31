import React from 'react'
import {
  App,
  CreateProject,
  FinishForm,
  LockedStatus,
  NotFound,
  ProjectStatus,
  LoginPanel,
  AdminPanel,
  AlreadyLogged
} from '.'
import Auth from '../auth'
import Home from '../imgs/h-i.svg'
import HowTo from '../imgs/i-i.svg'
import ActiveHowTo from '../imgs/i-i-a.svg'
import ActiveHome from '../imgs/h-i-a.svg'
import Coding from '../imgs/c-i.svg'
import ActiveCoding from '../imgs/c-i-a.svg'
import CreateP from '../imgs/cr-i.svg'
import MDeal from '../imgs/d-i.svg'
import PayIcon from '../imgs/p-i.svg'
import Done from '../imgs/do-i.svg'
import Js from '../imgs/js-i.svg'
import Php from '../imgs/php-i.svg'

// declaring id , isLogged 
const id = Auth.getProjectId();
const isLogged = Auth.isUserAuthenticated();

export const routes = [
  {
    path: '/',
    exact: true,
    is_private: false,
    component: () => isLogged ? <AlreadyLogged link={id} /> : <App />
  },
  {
    path: '/create-project',
    exact: false,
    is_private: false,
    component: () => isLogged ? <AlreadyLogged link={id} /> : <CreateProject />
  },
  {
    path: '/project/lock/',
    exact: false,
    is_private: false,
    component: () => isLogged ? <AlreadyLogged link={id} /> : <LockedStatus />
  },
  {
    path: '/admin',
    exact: true,
    is_private: true,
    component: () => <LoginPanel />,
  },
  {
    path: '/admin/panel',
    exact: true,
    is_private: true,
    component: () => <AdminPanel />
  },
  {
    path: '/admin/panel/orders',
    exact: true,
    is_private: true,
    component: () => <AdminPanel />
  },
  {
    path: '/admin/panel/vistors',
    exact: true,
    is_private: true,
    component: () => <AdminPanel />
  },
  {
    path: '/finished/:id',
    exact: true,
    is_private: true,
    component: () => <FinishForm />
  },
  {
    path: '/project/:id',
    exact: false,
    is_private: true,
    component: () => <ProjectStatus />
  },
  {
    path: '*',
    exact: false,
    is_private: false,
    component: () => <NotFound />
  },
]

export const NavItems = [
  {
    name: 'Home',
    icon: Home,
    activeIcon: ActiveHome,
    link: '/',
  },
  {
    name: 'Languages',
    icon: Coding,
    activeIcon: ActiveCoding,
    link: '/#languages',
  },
  {
    name: 'About',
    icon: HowTo,
    activeIcon: ActiveHowTo,
    link: '/about',
  },
]

export const Features = [
  {
    name: 'Create Project',
    icon: CreateP,
  },
  {
    name: 'Make a Deal',
    icon: MDeal,
  },
  {
    name: 'Handy Costs',
    icon: PayIcon,
  },
  {
    name: 'Project Finished',
    icon: Done,
  },
]

export const Languages = [
  {
    name: 'Javascript',
    icon: Js,
  },
  {
    name: 'PHP',
    icon: Php,
  }
]

export const AUTH_TOKEN = 'auth-token'