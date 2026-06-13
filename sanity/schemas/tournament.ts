import { defineField, defineType } from 'sanity'

export const tournament = defineType({
  name: 'tournament',
  title: 'Tournament',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tournament Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Tournament Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'prizePool',
      title: 'Prize Pool',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
    }),
    defineField({
      name: 'winner',
      title: 'Winning Team Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'prizePool',
      media: 'logo',
    },
  },
})
