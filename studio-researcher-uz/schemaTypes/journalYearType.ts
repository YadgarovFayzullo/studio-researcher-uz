import {defineType} from 'sanity'

export default defineType({
  name: 'journalYear',
  title: 'Выпуск журнала',
  type: 'document',
  fields: [
    {
      name: 'journal',
      title: 'Журнал',
      type: 'reference',
      to: [{type: 'journal'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Год',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'volume',
      title: 'Том',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Номер',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Обложка выпуска',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Описание выпуска',
      type: 'text',
    },
    {
      name: 'articles',
      title: 'Статьи в выпуске',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }]
    }
  ],
  preview: {
    select: {
      journalTitle: 'journal.title',
      year: 'year',
      number: 'number'
    },
    prepare({journalTitle, year, number}) {
      return {
        title: `${journalTitle || 'Журнал'} (${year || ''}${number ? ', №'+number : ''})`
      }
    }
  }
})