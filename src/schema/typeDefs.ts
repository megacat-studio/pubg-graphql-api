import { gql } from 'apollo-server-express';

export default gql`
type Query {
    playerMatch(region: String!, playerName: String!): [PlayerMatch]
    matchInfo(region: String!, matchId: [String!]!, playerId: String!): MatchesInfo
    matchesInfo(region: String!, matchesId: [String!]!, playerId: String!): [MatchesInfo]
    playerId(region: String!, playerName: String!): ID!
    leaderboards(gameMode: String!, season: String!, count: Int!): [Players!]!
    telemetry(url: String!, users: [String!], scale: Int): Telemetry
    getSeasons(region: String!): [Season]
    getSeasonStats(region: String!, playerId: String!, season: String!): SeasonStats
    getLifetimeStats(region: String!, playerId: String!, gameMode: String!): LifetimeStats
    weaponMastery(region: String!, playerId: String!): [weaponMastery]
}
  
type PlayerMatch {
    id: String
    type: String
}

type MatchesInfo {
  playersInfo: [PlayerInfo]
  generalInfo: GeneralInfo
}

type GeneralInfo {
  gameMode: String
  time: String
  date: String
  isCustomMatch: String
  seasonState: String
  matchDuration: Int
  mapName: String
  teams: Int
  participants: Int
  userRank: Int
  telemetryUrl: String
  team: [String]
  matchId: String
}

type PlayerInfo {
  downedButNotKilled: Int
  assists: Int
  boosts: Int
  damage: Float
  deathType: String
  headshotKills: Int
  heals: Int
  killPlace: Int
  killStreaks: Int
  kills: Int
  longestkill: Float
  name: String
  playerId: String
  revives: Int
  rideDistance: Float
  roadKills: Int
  swimDistance: Float
  teamKills: Int
  timeSurvived: Float
  vehiclesDestroyed: Int
  walkDistance: Float
  weaponsAcquired: Int
  rank: Int
  team: [String]
}

type Season {
  type: String
  id: String
  isCurrentSeason: Boolean
  isOffseason: Boolean
}

type SeasonStats {
  assists: Int
  heals: Int
  kills: Int
  dBNOs: Int
  deaths: Int
  damage: Float
  headshotKills: Int
  longestKill: Float
  longestGame: Int
  revives: Int
  roadKills: Int
  roundMostKills: Int
  rounds: Int
  suicides: Int
  runningDistance: Int
  swimDistance: Int
  drivingDistance: Int
  teamKills: Int
  timePlayed: Int
  top10s: Int
  vehiclesDestroyed: Int
  weaponsAcquired: Int
  wins: Int
  kdRatio: Float
}

type LifetimeStats {
  assists: Int
  boosts: Int
  downedButNotKilled: Int
  dailyKills: Int
  damageDealt: Float
  days: Int
  dailyWins: Int
  headshotKills: Int
  heals: Int
  kills: Int
  longestKill: Float
  longestTimeSurvived: Float
  deaths: Int
  maxKillStreaks: Int
  mostSurvivalTime: Float
  rankPoints: Int
  rankPointsTitle: String
  revives: Int
  drivingDistance: Float
  roadKills: Int
  roundMostKills: Int
  roundsPlayed: Int
  suicides: Int
  swimDistance: Float
  teamKills: Int
  timeSurvived: Float
  top10s: Int
  vehiclesDestroyed: Int
  runningDistance: Float
  weaponsAcquired: Int
  weeklyKills: Int
  weeklyWins: Int
  wins: Int
  kdRatio: Float
}

type Players {
  name: String
  rank: Int
  id: ID!
  stats: Stats
}

type Stats {
  rankPoints: Int
  wins: Int
  games: Int
  winRatio: Float
  averageDamage: Int
  kills: Int
  killDeathRatio: Float
  averageRank: Float
}

type Telemetry {
  playerCoordinates: [Coordinates]
  safetyZoneCoordinates: [ZoneCoordinates]
  redZoneCoordinates: [ZoneCoordinates]
}

type Coordinates {
  id: String
  coordinates: [Coordinate]
}

type Coordinate {
  x: Float
  y: Float
  z: Float
}

type ZoneCoordinates {
  x: Float
  y: Float
  radius: Float
}

type weaponStats {
  kills: Int
  defeats: Int
  roundMostKills: Int
  roundMostDamage: Float
  damage: Float
  headshots: Int
  roundMostHeadshots: Int
  severlyHurts: Int
  roundMostSeverlyHurts: Int
  longRangeKills: Int
  longestKill: Float
  roundMostDefeats: Int
  xpTotal: Int
  levelCurrent: Int
  tierCurrent: Int
}

type weaponMedals {
  MedalId: String
  Count: Int
}

type weaponMastery {
  name: String
  stats: weaponStats
  medals: [weaponMedals]
}`;
