import React from 'react'
import { toTitleCase } from '../../util/helperFunctions'

interface MechTableProps {
  mechanicalData: {
  characterSize: string
  dotPitch: string
  dotSize: string
  outlineDimension: string
  viewingArea: string
  }
}

const MechTable: React.FC<MechTableProps> = ({ mechanicalData }) => {

  return (
    <table className="w-10/12 text-left text-rd-darkGray table-auto" >
      <thead className="">
        <tr>
          <th className="font-normal p-2 bg-rd-lightGray text-left">Item</th>
          <th className="font-normal p-2 bg-rd-lightGray">Dimension</th>
          <th className="font-normal p-2 bg-rd-lightGray">Unit</th>
        </tr>
      </thead>
      <tbody className="">
        {Object.entries(mechanicalData).map(([key, data], i) => (
          <tr  key={i}>
            <td className="p-2 text-left">{toTitleCase(key) }</td>
            <td className="font-light p-2">{data}</td>
            <td className="font-light p-2">mm</td>
          </tr>
        ))}             
      </tbody>
    </table>
  )
}
export default MechTable