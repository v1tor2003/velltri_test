import { playerData } from "./chartsData";
import BarChart from "./charts/BarChart";

export default function Home() {
  const transformedPlayerData = playerData.map(player => ({
    player: player.player,
    gols: player.gols - player.penalties, 
    'gols(p)': player.penalties, 
    assists: player.assists,
  }));

  return (
    <main className="flex h-[640px] flex-col items-center justify-between p-24">
      <h1>Top 5 Marcadores Temporada 23/24</h1>
      <BarChart 
        chartLabel="Top Scorers Goals Stats 23/24 Season"
        data={transformedPlayerData} 
        keys={['gols(p)','gols','assists']} 
      />
    </main>
  );
}
