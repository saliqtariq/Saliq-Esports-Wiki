import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of the website (used in SEO).',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'The global description of the website (used in SEO).',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Preview Image',
      type: 'image',
      description: 'Image displayed when sharing the website on Discord, Twitter, etc.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'announcementText',
      title: 'Announcement Banner Text',
      type: 'string',
      description: 'Text to show in a global announcement banner at the top of the site.',
    }),
  ],
})
