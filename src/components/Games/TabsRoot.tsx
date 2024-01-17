"use client"

import Tab from "@/types/Tab"
import * as Tabs from "@radix-ui/react-tabs"

interface Props {
  tabs: Tab[]
}

export default function Games({tabs}: Props) {  
  return (
    <Tabs.Root defaultValue={tabs[0].value}>
      <Tabs.List>
        {tabs.map((item, key) => 
          <Tabs.Trigger value={item.value} key={key}>
            {item.title}
          </Tabs.Trigger>
          )}
      </Tabs.List>
      {tabs.map((item, key) => 
        <Tabs.Content value={item.value} key={key}>
          <ul>
            {item.data.map((item, key) =>
              <li key={key}>
                <img src={item.image} alt={item.title} />
              </li>
            )}
          </ul>
        </Tabs.Content>
        )}
    </Tabs.Root>
  )
}