export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    patients: {
      path: '',
      getHref: () => '/app',
    },
    patient: {
      path: 'patients/:patientId',
      getHref: (id: string) => `/app/patients/${id}`,
    },
  },
} as const;
