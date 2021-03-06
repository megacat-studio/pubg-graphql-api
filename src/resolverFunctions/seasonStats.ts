import { map } from 'lodash';

export default function getSeasonStats(information: SeasonGameInformation): SeasonGameStats {
  console.log('information;');
  console.log(information);

  const gameModeStats = information.data.attributes.gameModeStats
  return map(gameModeStats, pubgGameStats => gameStatsToPlayerStats(pubgGameStats)).reduce(seasonstats)
}

function gameStatsToPlayerStats(gamestats: SeasonPubgApiGameStats): SeasonGameStats {
  return {
    kills: gamestats.kills,
    dBNOs: gamestats.dBNOs,
    roadKills: gamestats.roadKills,
    assists: gamestats.assists,
    deaths: gamestats.losses,
    rounds: gamestats.roundsPlayed,
    wins: gamestats.wins,
    top10s: gamestats.top10s,
    suicides: gamestats.suicides,
    weaponsAcquired: gamestats.weaponsAcquired,
    swimDistance: gamestats.swimDistance,
    headshotKills: gamestats.headshotKills,
    teamKills: gamestats.teamKills,
    kdRatio: 0,
    runningDistance: gamestats.walkDistance,
    drivingDistance: gamestats.rideDistance,
    vehiclesDestroyed: gamestats.vehicleDestroys,
    heals: gamestats.heals,
    boosts: gamestats.boosts,
    revives: gamestats.revives,
    damage: gamestats.damageDealt,
    roundMostKills: gamestats.roundMostKills,
    longestKill: gamestats.longestKill,
    timePlayed: gamestats.timeSurvived,
    longestGame: gamestats.longestTimeSurvived
  };
}

function seasonstats(
  accum: SeasonGameStats,
  {
    assists,
    heals,
    boosts,
    kills,
    dBNOs,
    deaths,
    damage,
    headshotKills,
    longestKill,
    longestGame,
    revives,
    roadKills,
    roundMostKills,
    rounds,
    suicides,
    runningDistance,
    swimDistance,
    drivingDistance,
    teamKills,
    timePlayed,
    top10s,
    vehiclesDestroyed,
    weaponsAcquired,
    wins
  }: SeasonGameStats,
  index: number,
  array: any
): SeasonGameStats {
  return {
    kills: accum.kills ? accum.kills + kills : kills,
    dBNOs: accum.dBNOs ? accum.dBNOs + dBNOs : dBNOs,
    roadKills: accum.roadKills ? accum.roadKills + roadKills : roadKills,

    assists: accum.assists ? accum.assists + assists : assists,
    deaths: accum.deaths ? accum.deaths + deaths : deaths,
    rounds: accum.rounds ? accum.rounds + rounds : rounds,
    wins: accum.wins ? accum.wins + wins : wins,
    top10s: accum.top10s ? accum.top10s + top10s : top10s,
    suicides: accum.suicides ? accum.suicides + suicides : suicides,
    weaponsAcquired: accum.weaponsAcquired
      ? accum.weaponsAcquired + weaponsAcquired
      : weaponsAcquired,
    swimDistance: Math.round(
      accum.swimDistance ? accum.swimDistance + swimDistance : swimDistance
    ),

    headshotKills: accum.headshotKills
      ? accum.headshotKills + headshotKills
      : headshotKills,
    teamKills: accum.teamKills ? accum.teamKills + teamKills : teamKills,
    kdRatio:
      index === array.length - 1
        ? Number(((accum.kills + kills) / (accum.deaths + deaths)).toFixed(2))
        : 0,
    runningDistance: Math.round(
      accum.runningDistance
        ? accum.runningDistance + runningDistance
        : runningDistance
    ),
    drivingDistance: Math.round(
      accum.drivingDistance
        ? accum.drivingDistance + drivingDistance
        : drivingDistance
    ),
    vehiclesDestroyed: accum.vehiclesDestroyed
      ? accum.vehiclesDestroyed + vehiclesDestroyed
      : vehiclesDestroyed,
    heals: accum.heals ? accum.heals + heals + boosts : heals + boosts,
    boosts: accum.boosts ? accum.boosts + boosts : boosts,
    revives: accum.revives ? accum.revives + revives : revives,
    damage: Number((accum.damage ? accum.damage + damage : damage).toFixed(2)),
    roundMostKills: accum.roundMostKills
      ? Math.max(accum.roundMostKills, roundMostKills)
      : roundMostKills,
    longestKill: Number(
      (accum.longestKill
        ? Math.max(accum.longestKill, longestKill)
        : longestKill
      ).toFixed(2)
    ),
    timePlayed: Math.round(
      accum.timePlayed ? accum.timePlayed + timePlayed : timePlayed
    ),
    longestGame: Math.round(
      accum.longestGame ? Math.max(accum.longestGame, longestGame) : longestGame
    )
  };
}
