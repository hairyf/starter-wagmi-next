import type { ComponentClass, FC, PropsWithChildren } from 'react'
import { useMemo } from 'react'

export interface ComponentMeta {
  component: FC<any> | ComponentClass<any>
  props?: any
}
export interface MountsProviderProps {
  install: (FC<any> | ComponentMeta | ComponentClass<any>)[]
}

export function MountsProvider(props: PropsWithChildren<MountsProviderProps>) {
  const installs: ComponentMeta[] = useMemo(() =>
    props.install.map((c: any) => c.component ? c : { component: c }).reverse(), [props.install])
  return installs.reduce((children, { component: C, props }) => <C {...(props || {})}>{children}</C>, props.children)
}
