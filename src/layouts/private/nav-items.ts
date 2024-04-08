import { USER_ROLES } from '@/types'

export type NavItem = {
  label: string
  path: string
  allowedRoles: USER_ROLES[]
}

const commonNavItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Assistants',
    path: '/assistants',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Conversations',
    path: '/conversations',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Tickets',
    path: '/tickets',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Widgets',
    path: '/widgets',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Billing',
    path: '/billing',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
  {
    label: 'Settings',
    path: '/settings',
    allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.END_USER],
  },
]

const adminNavItems: NavItem[] = [
  {
    label: 'Users',
    path: '/users',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'Subscriptions',
    path: '/subscriptions',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'Crawler',
    path: '/admin/crawler',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'All Tickets',
    path: '/admin/tickets',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'All Assistants',
    path: '/admin/assistants',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'Bot Rules',
    path: '/rules',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'Bot Personality',
    path: '/assistant-personality',
    allowedRoles: [USER_ROLES.ADMIN],
  },
  {
    label: 'Manage Widgets',
    path: '/admin/widgets',
    allowedRoles: [USER_ROLES.ADMIN],
  },
]

export const defaultNavItems: NavItem[] = [
  ...commonNavItems,
  {
    label: 'divider',
    path: '',
    allowedRoles: [],
  },
  ...adminNavItems,
]

export function generateRoleSpecificNavItems(defaultNavItems: NavItem[]) {
  const adminNavItems = defaultNavItems
    .filter((item) => item.allowedRoles.includes(USER_ROLES.ADMIN))
    .map((item) => ({ ...item, allowedRoles: [USER_ROLES.ADMIN] }))

  const endUserNavItems = defaultNavItems
    .filter((item) => item.allowedRoles.includes(USER_ROLES.END_USER))
    .map((item) => ({ ...item, allowedRoles: [USER_ROLES.END_USER] }))

  return {
    adminNavItems,
    endUserNavItems,
  }
}
