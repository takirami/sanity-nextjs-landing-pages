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
                  buildHookId: '6007e5b1aedad9915a568721',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7gsrck81',
                  apiId: 'dfa6cf4e-de1a-41f5-bd79-e74f10c1fff4'
                },
                {
                  buildHookId: '6007e5b1be5b229e4b3458e3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-avuvmtig',
                  apiId: '30256828-4dd7-47f3-a9ed-ddd750bd0d9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/takirami/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-avuvmtig.netlify.app', category: 'apps'}
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
