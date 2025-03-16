import {defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Статья',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Автор',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'journal',
      title: 'Журнал',
      type: 'reference',
      to: [{type: 'journalYear'}],
    },
    {
      name: 'year',
      title: 'Год публикации',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'vak',
      title: 'Входит в ВАК',
      type: 'boolean',
    },
    {
      name: 'scienceField',
      title: 'Область наук',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'keywords',
      title: 'Ключевые слова',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'abstract',
      title: 'Аннотация',
      type: 'text',
    },
    {
      name: 'doi',
      title: 'DOI',
      type: 'string',
    },
    {
      name: 'license',
      title: 'Лицензия',
      type: 'string',
    },
    {
      name: 'pdf',
      title: 'Файл PDF',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Обложка',
      type: 'image',
      description: 'Извлекается автоматически из PDF',
      readOnly: true,
    },
  ],
})