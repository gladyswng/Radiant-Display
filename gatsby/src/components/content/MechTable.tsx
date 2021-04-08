import React from 'react'
import { toTitleCase } from '../../util/helperFunctions'

interface MechTableProps {
  mechanicalData: {
  characterSize?: string
  dotPitch: string
  dotSize: string
  outlineDimension: string
  viewingArea: string
  }
}

const MechTable: React.FC<MechTableProps> = ({ mechanicalData }) => {

  return (
    <table className="text-left text-rd-darkGray table-auto w-full" >
      <thead className="">
        <tr>
          <th className="font-normal p-2 bg-rd-lightGray text-left">Item</th>
          <th className="font-normal p-2 bg-rd-lightGray">Dimension</th>
          <th className="font-normal p-2 bg-rd-lightGray">Unit</th>
        </tr>
      </thead>
      <tbody className="">
        {Object.entries(mechanicalData).map(([key, data], i) => !!data &&(
        
          <tr  key={i}>
            <td className="text-left table-cell">{toTitleCase(key) }</td>
            <td className="font-light table-cell">{data}</td>
            <td className="font-light table-cell">mm</td>
          </tr>
        ))}             
      </tbody>
    </table>
  )
}
export default MechTable