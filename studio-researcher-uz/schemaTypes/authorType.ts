import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Автор',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'ФИО',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'affiliation',
      title: 'Организация',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'orcid',
      title: 'ORCID',
      type: 'string',
    },
    {
      name: 'articles',
      title: 'Статьи',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'affiliation',
    },
  },
})
