import React from 'react'

interface ElectricalTableProps {
 electricalChar: {
  item: string
  symbol: string
  condition: string
  min: string
  type: string
  max: string
  unit: string
}[]
}

const ElectricalTable: React.FC<ElectricalTableProps> = ({ electricalChar }) => {

  const tableHeader = [ 'Item', 'Symbol', 'Condition', 'Min', 'Type', 'Max', 'Unit']

  return (
    <div className="overflow-x-auto w-full">
      <table className="text-left text-rd-darkGray table-auto w-full" >
        <thead className="">
          <tr>
            {tableHeader.map(header => <th key={header} className="font-normal p-2 bg-rd-lightGray">{header}</th>)}
          </tr>
        </thead>
        <tbody className="">
          {electricalChar.map((item, i) => (
            <tr key={i} className="text-center">
              <th className="font-normal text-left table-cell">{item.item}</th>
              <td className="font-light text-left table-cell">{item.symbol}</td>
              <td className="font-light text-left table-cell">{item.condition}</td>
              <td className="font-light table-cell">{item.min}</td>
              <td className="font-light table-cell">{item.type}</td>
              <td className="font-light table-cell">{item.max}</td>
              <td className="font-light table-cell">{item.unit}</td>
            </tr>
              
              
            //{/* {Object.values(item).map((data, i) => <td key={i} className="p-2 text-left">{data}</td>)} */}

          ))}             
        </tbody>

      </table>
    </div>
  )
}
export default ElectricalTable