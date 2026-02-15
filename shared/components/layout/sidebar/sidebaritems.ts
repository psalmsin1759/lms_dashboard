import { uniqueId } from 'lodash'
import type { MenuItem } from '@/shared/types'

const SidebarContent: MenuItem[] = [
  // =========================
  // DASHBOARD
  // =========================
  {
    heading: 'Dashboard',
    children: [
      {
        id: uniqueId(),
        name: 'Overview',
        icon: 'solar:widget-2-linear',
        url: '/dashboard',
      },
      {
        id: uniqueId(),
        name: 'Analytics',
        icon: 'solar:chart-linear',
        url: '/dashboard/analytics',
      },
    ],
  },

  // =========================
  // COURSE MANAGEMENT
  // =========================
  {
    heading: 'Course Management',
    children: [
      {
        id: uniqueId(),
        name: 'All Courses',
        icon: 'solar:book-2-linear',
        url: '/courses',
      },
      {
        id: uniqueId(),
        name: 'Create Course',
        icon: 'solar:add-circle-linear',
        url: '/courses/create',
      },
      {
        id: uniqueId(),
        name: 'Categories',
        icon: 'solar:layers-linear',
        url: '/courses/categories',
      },
    ],
  },

  // =========================
  // LEARNING CONTENT
  // =========================
  {
    heading: 'Learning Content',
    children: [
      {
        id: uniqueId(),
        name: 'Modules',
        icon: 'solar:library-linear',
        url: '/modules',
      },
      {
        id: uniqueId(),
        name: 'Lessons',
        icon: 'solar:video-library-linear',
        url: '/lessons',
      },
      {
        id: uniqueId(),
        name: 'Quizzes',
        icon: 'solar:question-circle-linear',
        url: '/quizzes',
      },
      {
        id: uniqueId(),
        name: 'Assignments',
        icon: 'solar:document-text-linear',
        url: '/assignments',
      },
    ],
  },

  // =========================
  // STUDENTS
  // =========================
  {
    heading: 'Students',
    children: [
      {
        id: uniqueId(),
        name: 'All Students',
        icon: 'solar:users-group-rounded-linear',
        url: '/students',
      },
      {
        id: uniqueId(),
        name: 'Enrollments',
        icon: 'solar:user-check-linear',
        url: '/enrollments',
      },
      {
        id: uniqueId(),
        name: 'Progress Tracking',
        icon: 'solar:graph-up-linear',
        url: '/students/progress',
      },
    ],
  },

  // =========================
  // INSTRUCTORS
  // =========================
  {
    heading: 'Instructors',
    children: [
      {
        id: uniqueId(),
        name: 'All Instructors',
        icon: 'solar:user-id-linear',
        url: '/instructors',
      },
      {
        id: uniqueId(),
        name: 'Payouts',
        icon: 'solar:wallet-linear',
        url: '/instructors/payouts',
      },
    ],
  },

  // =========================
  // ASSESSMENT & GRADING
  // =========================
  {
    heading: 'Assessment',
    children: [
      {
        id: uniqueId(),
        name: 'Submissions',
        icon: 'solar:clipboard-text-linear',
        url: '/submissions',
      },
      {
        id: uniqueId(),
        name: 'Grades',
        icon: 'solar:medal-ribbon-linear',
        url: '/grades',
      },
      {
        id: uniqueId(),
        name: 'Certificates',
        icon: 'solar:diploma-linear',
        url: '/certificates',
      },
    ],
  },

  // =========================
  // COMMUNICATION
  // =========================
  {
    heading: 'Communication',
    children: [
      {
        id: uniqueId(),
        name: 'Announcements',
        icon: 'solar:notification-unread-linear',
        url: '/announcements',
      },
      {
        id: uniqueId(),
        name: 'Messages',
        icon: 'solar:chat-dots-linear',
        url: '/messages',
      },
      {
        id: uniqueId(),
        name: 'Discussion Forum',
        icon: 'solar:chat-round-linear',
        url: '/forum',
      },
    ],
  },

  // =========================
  // PAYMENTS (If SaaS LMS)
  // =========================
  {
    heading: 'Finance',
    children: [
      {
        id: uniqueId(),
        name: 'Transactions',
        icon: 'solar:card-linear',
        url: '/finance/transactions',
      },
      {
        id: uniqueId(),
        name: 'Plans & Pricing',
        icon: 'solar:tag-price-linear',
        url: '/finance/plans',
      },
      {
        id: uniqueId(),
        name: 'Coupons',
        icon: 'solar:ticket-linear',
        url: '/finance/coupons',
      },
    ],
  },

  // =========================
  // SYSTEM SETTINGS
  // =========================
  {
    heading: 'Administration',
    children: [
      {
        id: uniqueId(),
        name: 'Users & Roles',
        icon: 'solar:shield-user-linear',
        url: '/admin/users',
      },
      {
        id: uniqueId(),
        name: 'Permissions',
        icon: 'solar:key-linear',
        url: '/admin/permissions',
      },
      {
        id: uniqueId(),
        name: 'Settings',
        icon: 'solar:settings-linear',
        url: '/admin/settings',
      },
    ],
  },
]

export default SidebarContent
