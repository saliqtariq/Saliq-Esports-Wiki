import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schema'
import { dataset, projectId } from './sanity/env'
import { myTheme } from './sanity/theme'
import { Logo } from './sanity/Logo'
import { StudioNavbar } from './sanity/StudioNavbar'
import { customStructure } from './sanity/customStructure'
import { DashboardTool } from './sanity/DashboardTool'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: customStructure
    }),
  ],
  tools: (prev) => [
    {
      name: 'dashboard',
      title: 'Dashboard',
      component: DashboardTool,
    },
    ...prev
  ],
  theme: myTheme,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  }
})
