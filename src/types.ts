import { CID } from 'multiformats/cid'

export type part = {
  cid: CID,
  imageURL: string,
  name: string,
  path: string,
  size: number,
  type: string
}

export type PartImages = {
  backgrounds: part[],
  parts: part[]
}
