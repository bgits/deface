import { CID } from 'multiformats/cid'

export type Part = {
  cid: CID,
  imageURL: string,
  name: string,
  path: string,
  size: number,
  type: string,
  isSelected: boolean
}

export type PartImages = {
  backgrounds: Part[],
  parts: Part[]
}
