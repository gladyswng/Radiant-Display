import React from 'react'

interface DisplayAddTableProps {
  displayAddress: string[]
}

const DisplayAddTable: React.FC<DisplayAddTableProps> = ({ displayAddress }) => {
  
  return (
    <div className="overflow-x-scroll w-full">

    <table className="w-full text-left text-rd-darkGray table-auto" >
      <thead className="">
        <tr>
          <th className="font-normal p-2 bg-rd-lightGray text-left">Character Address</th>
          {displayAddress[0].split(',').map((count, i) => (
            <th key={i} className="font-medium p-1 bg-rd-lightGray text-center p-2 px-3">{i+1}</th>

          ))}
          
        </tr>
      </thead>
      <tbody className="">
        {displayAddress.map((add, i) => {
          const numberList = add.replace(/\s/g, '').split(',')
          return (
            <tr key={i}>
              <th className="font-normal p-2">DDRAM</th>
              {numberList.map(num => (
                <td key={num} className="font-light text-center py-2 px-2">{num}</td>
              ))}
            </tr>
          )
        })}             
      </tbody>
    </table>
    </div>
  )
}
export default DisplayAddTable