import React, { useEffect, useState, useCallback } from 'react'
import { useClient } from 'sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { players as staticPlayers } from '../../app/pubgmobile/players/data'

// Components
import { SearchIcon, BellIcon, MessageIcon } from './components/Icons'
import { Sidebar } from './components/Sidebar'
import { OverviewTab } from './tabs/OverviewTab'
import { PlayersTab } from './tabs/PlayersTab'
import { TournamentsTab } from './tabs/TournamentsTab'
import { SettingsTab } from './tabs/SettingsTab'

// Image URL builder for Sanity images
const imageBuilder = createImageUrlBuilder({
  projectId: '3pl6o27u',
  dataset: 'production',
})
const urlFor = (source: any) => imageBuilder?.image(source).auto('format').fit('max').width(100).url()

// Types
export interface PlayerData {
  _id: string
  ign: string
  name: string
  team: string
  country: string
  role: string
  image: any
  teamLogo: any
  staticImage?: string
  staticTeamLogo?: string
}

// Map static players to match PlayerData interface
const mappedStaticPlayers: PlayerData[] = staticPlayers.map((p, i) => ({
  _id: `static-${i}`,
  ign: p.nick,
  name: p.name,
  team: p.teamName,
  country: p.nationality,
  role: '', // static players don't have roles
  image: null,
  teamLogo: null,
  staticImage: p.image,
  staticTeamLogo: p.teamLogo,
}))

export function DashboardTool() {
  const client = useClient({ apiVersion: '2024-06-11' })
  const [activeTab, setActiveTab] = useState('Overview')
  const [searchTerm, setSearchTerm] = useState('')

  const [playerCount, setPlayerCount] = useState<number>(0)
  const [tournamentCount, setTournamentCount] = useState<number>(0)
  const [topPlayers, setTopPlayers] = useState<PlayerData[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  const fetchData = useCallback(async () => {
    try {
      const [pCount, tCount, players] = await Promise.all([
        client.fetch<number>(`count(*[_type == "player"])`),
        client.fetch<number>(`count(*[_type == "tournament"])`),
        client.fetch<PlayerData[]>(`*[_type == "player"] | order(_createdAt desc) {
          _id, ign, name, team, country, role, image, teamLogo
        }`),
      ])

      const totalPlayers = pCount + mappedStaticPlayers.length
      setPlayerCount(totalPlayers)

      setTournamentCount(tCount)

      // Combine sanity players with hardcoded players
      const combinedPlayers = [...players, ...mappedStaticPlayers]
      setTopPlayers(combinedPlayers)

      setLastUpdated(new Date().toLocaleTimeString())
      setLoading(false)
    } catch (err) {
      console.error('Dashboard fetch error:', err)
      setPlayerCount(mappedStaticPlayers.length)
      setTopPlayers(mappedStaticPlayers)
      setLoading(false)
    }
  }, [client])

  useEffect(() => {
    fetchData()

    // Real-time listeners
    const playerSub = client.listen('*[_type == "player"]').subscribe(() => fetchData())
    const tournamentSub = client.listen('*[_type == "tournament"]').subscribe(() => fetchData())

    return () => {
      playerSub.unsubscribe()
      tournamentSub.unsubscribe()
    }
  }, [client, fetchData])

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div style={{
      display: 'flex', height: '100vh', backgroundColor: '#020305',
      color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
    }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

        {/* Top Header */}
        <div style={{
          height: '72px', borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 32px', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{activeTab}</h1>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              backgroundColor: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)',
              padding: '2px 10px', borderRadius: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#00FF88', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
              <span style={{ color: '#00FF88', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Live</span>
            </div>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>{today}</span>
            {lastUpdated && (
              <span style={{ color: '#4b5563', fontSize: '11px' }}>Updated: {lastUpdated}</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}><SearchIcon /></div>
              <input
                type="text"
                placeholder="Search players, teams, tournaments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backgroundColor: '#0a0b0f', border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '6px', paddingLeft: '40px', paddingRight: '60px',
                  paddingTop: '8px', paddingBottom: '8px', width: '288px', fontSize: '14px',
                  color: 'white', outline: 'none',
                }}
              />
              <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '4px' }}>
                <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.1)' }}>⌘</span>
                <span style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.1)' }}>K</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#9ca3af' }}>

              <img src="/favicon.png" alt="Saliq" style={{
                width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover',
                border: '1px solid rgba(0,255,136,0.3)',
              }} />
            </div>
          </div>
        </div>

        {/* Scrollable Dashboard Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
          {activeTab === 'Overview' && (
            <>
              <OverviewTab playerCount={playerCount} tournamentCount={tournamentCount} loading={loading} />
              <div style={{ marginBottom: '24px' }}>
                <PlayersTab
                  players={topPlayers}
                  loading={loading}
                  searchTerm={searchTerm}
                  urlFor={urlFor}
                  fetchData={fetchData}
                  showTitle={false}
                />
              </div>
            </>
          )}

          {activeTab === 'Players' && (
            <PlayersTab
              players={topPlayers}
              loading={loading}
              searchTerm={searchTerm}
              urlFor={urlFor}
              fetchData={fetchData}
              showTitle={true}
            />
          )}

          {activeTab === 'Tournaments' && <TournamentsTab />}
          {activeTab === 'Settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  )
}
