"use client"

import Tab from "@/types/Tab";

import games from "../../data/games.json"

import TabsRoot from "@/components/Games/TabsRoot";

export default function Games() {
  const { data } = games;

  const gamesPlayed = data.filter(item => item.played)
  const gamesPurchased = data.filter(item => item.purchased)

  const tabs: Tab[] = [
    { title: "Played", value: "played", data: gamesPlayed },
    { title: "Purchased", value: "purchased", data: gamesPurchased },
  ];
  
  return (
    <main id="main">
      <h1 className="sr-only">Games</h1>
      <TabsRoot tabs={tabs} />
    </main>
  )
}