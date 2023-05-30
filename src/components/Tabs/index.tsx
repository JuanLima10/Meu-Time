'use client'
import * as Tabs from '@radix-ui/react-tabs'

import { TabsProps } from '@/@types/Tabs'

import Style from './styles.module.scss'

export function MenuTabs(props: TabsProps) {
  return (
    <Tabs.Root 
      className={Style.root} 
      defaultValue={props.id_about ? "about" : "stats"}
    >
      <Tabs.List className={Style.list} aria-label="Menu">
        {props.id_about !== null &&
          <Tabs.Trigger className={Style.trigger} value="about">
            Sobre
          </Tabs.Trigger>
        }
        {props.id_stats !== null &&
          <Tabs.Trigger className={Style.trigger} value="stats">
            Estatísticas
          </Tabs.Trigger>
        }
      </Tabs.List>
      <hr />
      {props.children}
    </Tabs.Root>

  )
}