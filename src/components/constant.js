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
} from '.'

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


export const routes = [
    {
      
      path:'/',
      exact:true,
      is_private:false,
      component: () => <App />
    },
    {
      path:'/create-project',
      exact:false,
      is_private:false,
      component:() => <CreateProject />
    },
    {
      path:'/project/lock/',
      exact:false,
      is_private:false,
      component:() => <LockedStatus />
    },
    { 
      path:'/admin',
      exact:true,
      is_private:false,
      component: () => <LoginPanel />,
    },
    {
      path:'/admin/panel',
      exact:false,
      is_private:false,
      component:() => <AdminPanel />
    },
    {
      
      path:'/finished/:id',
      is_private:true,
      exact:false,
      component:() => <FinishForm />
    },
    {
      
      path:'/project/:id',
      is_private:true,
      exact:false,
      component:() => <ProjectStatus />
    },
    {
      path:'*',
      is_private:false,
      exact:false,
      component:() => <NotFound />
    },
  ]
  
export const NavItems = [
  {
    name:'Home',
    icon:Home,
    activeIcon:ActiveHome,
    link:'/',
  },
  {
    name:'Languages',
    icon:Coding,
    activeIcon:ActiveCoding,
    link:'/#languages',
  },
  {
    name:'About',
    icon:HowTo,
    activeIcon:ActiveHowTo,
    link:'/about',
  },
]

export const Features = [
  {
    name:'Create Project',
    icon:CreateP,
  },
  {
    name:'Make a Deal',
    icon: MDeal,
  },
  {
    name:'Handy Costs',
    icon: PayIcon,
  },
  {
    name:'Project Finished',
    icon:Done,
  },
]

export const Languages = [
  {
    name:'Javascript',
    icon:Js,
  },
  {
    name:'PHP',
    icon:Php,
  }
]

export const AUTH_TOKEN = 'auth-token'