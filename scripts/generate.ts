import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { execSync } from 'node:child_process'
import { $ } from 'zx'

process.env.FORCE_COLOR = '1'

const baseAbisPath = path.resolve(process.cwd(), './src/config/interfaces/fragments')
const baseTypePath = path.resolve(process.cwd(), './src/config/interfaces')
const indexPath = path.resolve(process.cwd(), './src/config/interfaces/index.ts')

async function main() {
  const files = await fs.readdir(baseAbisPath)

  for (const fileOrDir of await fs.readdir(baseTypePath)) {
    if (['fragments', 'index.ts'].includes(fileOrDir))
      continue
    await fs.unlink(path.join(baseTypePath, fileOrDir))
  }

  for (const file of files) {
    const jsonPath = path.join(baseAbisPath, file)
    execSync(`abi-types-generator ${jsonPath} --output=${baseTypePath} --provider ethers_v6`)
  }

  const contracts = files.map(file => file.split('.')[0])

  let indexFile = ''
  indexFile += contracts.map(name => `import ${name}Fragments from './fragments/${name}.json'`).join('\n')
  indexFile += '\n\n'
  indexFile += contracts.map(name => `export const ${name}: import('./${name}').${name} = ${name}Fragments as any`).join('\n')

  await fs.writeFile(indexPath, indexFile)
}

main()
