import React from 'react'
import { toTitleCase } from '../../util/helperFunctions'

interface PinTableProps {
  pinFunction: {
    pinNumber: string
    symbol: string
    function: string
  }[]
}

const PinTable: React.FC<PinTableProps> = ({ pinFunction }) => {
  return (
    <table className="text-left text-rd-darkGray table-auto w-full" >
      <thead className="">
        <tr>
          <th className="font-normal p-2 bg-rd-lightGray">Pin No.</th>
          <th className="font-normal p-2 bg-rd-lightGray">Symbol</th>
          <th className="font-normal p-2 bg-rd-lightGray">Description</th>
        </tr>
      </thead>
      <tbody className="">
        {pinFunction.map((pin, i) => (
          <tr  key={i}>
            <td className="text-left table-cell">{pin.pinNumber}</td>
            <td className="font-light table-cell">{pin.symbol}</td>
            <td className="font-light table-cell">{pin.function}</td>
          </tr>
        ))}             
      </tbody>
    </table>
  )
}
export default PinTable