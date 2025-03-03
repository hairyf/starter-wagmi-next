import process from 'node:process'
import main from '@/main'

export async function withNextDoubleshot() {
  if (process.env.LOCKED || process.argv.includes('build'))
    return
  process.env.LOCKED = 'true'
  main()
}
