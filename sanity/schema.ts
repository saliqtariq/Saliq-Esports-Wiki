import { type SchemaTypeDefinition } from 'sanity'
import { player } from './schemas/player'
import { tournament } from './schemas/tournament'
import { siteSettings } from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [player, tournament, siteSettings],
}
