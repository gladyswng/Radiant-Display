import React from 'react'
import HomeIcon from '../../svg/home.svg';
import CarIcon from '../../svg/car.svg';
import ElevatorIcon from '../../svg/elevator.svg'
import GasStationIcon from '../../svg/local_gas_station.svg'
import ElectricMeterIcon from '../../svg/electric_meter.svg'
import MedicalIcon from '../../svg/medical.svg'
import ElectronicIcon from '../../svg/electronic.svg'
import WatchIcon from '../../svg/watch.svg'
import SecurityIcon from '../../svg/security.svg'
import IndustrialIcon from '../../svg/industrial.svg'




interface ProductApplicationProps {

}

const ProductApplication: React.FC<ProductApplicationProps> = ({}) => {
  
    return (
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-6 ">
        <div className="flex flex-col justify-start items-center ">

          <HomeIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm" >
            Home Appliance
          </p>
        </div>
        <div className="flex flex-col justify-start  items-center ">
          <GasStationIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm">Fuel Dispenser</p>
        </div>

        <div className="flex flex-col justify-start  items-center ">
          <ElectricMeterIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Electric Meter
          </p>
        </div>
        
        <div className="flex flex-col justify-start items-center ">

        <CarIcon width="40px" height="40px"/>
         <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm">
            Automotive
          </p>
        </div >
        <div className="flex flex-col justify-start  items-center ">
          <ElevatorIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm">Elevator</p>
        </div>
        

        <div className="flex flex-col justify-start  items-center ">
          <MedicalIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Medical
          </p>
        </div>
        
        <div className="flex flex-col justify-start  items-center ">
          <ElectronicIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Electronics
          </p>
        </div>
        <div className="flex flex-col justify-start  items-center ">
          <WatchIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Watches
          </p>
        </div>
        <div className="hidden md:flex flex-col justify-start  items-center ">
          <SecurityIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Security System
          </p>
        </div>
        <div className="flex flex-col justify-start  items-center ">
          <IndustrialIcon width="40px" height="40px"/>
          <p className="text-left ml-3 my-4 text-rd-gray font-light text-center text-sm ">
            Industrial
          </p>
        </div>
        
      </div>
    );
}
export default ProductApplication