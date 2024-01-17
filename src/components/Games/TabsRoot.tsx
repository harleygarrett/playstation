"use client"

import * as Tabs from "@radix-ui/react-tabs"

import Tab from "@/types/Tab"

import styles from "./tabsRoot.module.css"

interface Props {
  tabs: Tab[]
}

export default function Games({tabs}: Props) {  
  return (
    <Tabs.Root defaultValue={tabs[0].value} className={styles.tabsRoot}>
      <Tabs.List className={styles.tabsList}>
        {tabs.map((item, key) => 
          <Tabs.Trigger value={item.value} key={key} className={styles.tabsTrigger}>
            {item.title}
          </Tabs.Trigger>
          )}
      </Tabs.List>
      {tabs.map((item, key) => 
        <Tabs.Content value={item.value} key={key}>
          <ul className={styles.tabpanel}>
            {item.data.map((item, key) =>
              <li key={key} className={styles.listItem}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </li>
            )}
          </ul>
        </Tabs.Content>
        )}
    </Tabs.Root>
  )
}