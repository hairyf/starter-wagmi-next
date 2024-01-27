import { useEffect, useRef } from 'react'

export type WatchCallback<T> = (value: T) => any
export function useWatch<T extends any[]>(source: T, callback: WatchCallback<T>): void
export function useWatch(source: any, callback: any) {
  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current)
      firstUpdate.current = false
    else
      callback(source)
  }, source)
}
