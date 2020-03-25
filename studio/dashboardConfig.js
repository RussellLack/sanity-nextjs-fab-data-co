export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7ba4431630a9996072a7e6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-fab-data-co-studio',
                  apiId: '232c2c64-3673-4050-a09d-a8e496d6a433'
                },
                {
                  buildHookId: '5e7ba4432f3a7474f80a83b5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-fab-data-co',
                  apiId: '9fa88323-1ca3-4c19-839c-4fd81240dcfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RussellLack/sanity-nextjs-fab-data-co',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-fab-data-co.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
