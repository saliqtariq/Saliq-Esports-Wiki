/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineField, defineType } from 'sanity'

export const player = defineType({
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'ign',
      title: 'In-Game Name (IGN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'ign',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Player Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Fragger', value: 'fragger' },
          { title: 'IGL (In-Game Leader)', value: 'igl' },
          { title: 'Support', value: 'support' },
          { title: 'Sniper', value: 'sniper' },
        ],
      },
    }),
    defineField({
      name: 'team',
      title: 'Current Team Name',
      type: 'string',
    }),
    defineField({
      name: 'teamLogo',
      title: 'Current Team Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'born',
      title: 'Date of Birth (e.g. January 1, 2006 (age 20))',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'Active' },
          { title: 'Not Active', value: 'Not-Active' },
          { title: 'Free Agent', value: 'Free Agent' },
        ],
      },
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', title: 'Date (e.g. 2026-04-19)', type: 'string' },
            { name: 'place', title: 'Placement (e.g. 1st, 2nd, Finals)', type: 'string' },
            { name: 'tier', title: 'Tier (e.g. A-Tier, B-Tier)', type: 'string' },
            { name: 'tourney', title: 'Tournament Name', type: 'string' },
            { name: 'team', title: 'Team Name', type: 'string' },
          ],
          preview: {
            select: {
              title: 'tourney',
              subtitle: 'place',
            },
            prepare(selection: any) {
              const { title, subtitle } = selection;
              return {
                title: title || 'Untitled Tournament',
                subtitle: subtitle ? `Placement: ${subtitle}` : '',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'history',
      title: 'Team History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'join', title: 'Join Date', type: 'string' },
            { name: 'leave', title: 'Leave Date', type: 'string' },
            { name: 'team', title: 'Team Name', type: 'string' },
          ],
          preview: {
            select: {
              title: 'team',
              join: 'join',
              leave: 'leave',
            },
            prepare(selection: any) {
              const { title, join, leave } = selection;
              return {
                title: title || 'Unknown Team',
                subtitle: `${join || '?'} - ${leave || '?'}`,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'staffHistory',
      title: 'Staff History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'join', title: 'Join Date', type: 'string' },
            { name: 'leave', title: 'Leave Date', type: 'string' },
            { name: 'team', title: 'Team Name', type: 'string' },
            { name: 'role', title: 'Role (e.g. Coach, Analyst)', type: 'string' },
          ],
          preview: {
            select: {
              title: 'team',
              role: 'role',
            },
            prepare(selection: any) {
              const { title, role } = selection;
              return {
                title: title || 'Unknown Team',
                subtitle: role || 'Staff',
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'ign',
      subtitle: 'name',
      media: 'image',
    },
  },
})
