import React, { useState, useCallback, useContext, useMemo, useEffect } from "react";
import { IPFS } from 'ipfs';
import useIpfsFactory from '../../hooks/useIpfs';
import { PartImages, part } from '../../types';

const DEFACES_CID = 'QmdQh55dhVRDz4xxawGWdc8LHH9XRiLkZX2bwvZejM3BpM';
export type IPartsContext = {
  partImages: PartImages
}

export const PartsContext = React.createContext<IPartsContext>({} as IPartsContext);
async function getDirectoryInfo(ipfs: IPFS, setState: Function) {
  const cids= [];
  for await (const file of ipfs.ls(DEFACES_CID)) {
    const files = []
    if (file.type == 'dir') {
      for await (const f of ipfs.ls(file.path) as AsyncIterable<part>) {
        f as part
        if (f.type === 'file') {
          try {
            for await (const file of ipfs.cat(f.path)) {
              let blob = new Blob([file], {type: "image/svg+xml"})
              let url = URL.createObjectURL(blob)
              f.imageURL = url
            }
          } catch(e) {
            console.log({e, f})
          }
        }
        files.push(f)
      }
      //@ts-ignore
      file.files = files
    }
    cids.push(file)
  }
  //@ts-ignore
  setState({ backgrounds: cids[0]['files'], parts: cids[1]['files'] })
}

export function PartsProvider({ children }: any) {
  const { ipfs } = useIpfsFactory();
  const [ partImages, setPartImages ] = useState<PartImages>({} as PartImages);

  useEffect(() => {
    if (!ipfs) return
    getDirectoryInfo(ipfs, setPartImages)
  }, [ipfs]);

  const values = { partImages };
  return (
    <PartsContext.Provider value={values}>
      {children}
    </PartsContext.Provider>
  );
}
