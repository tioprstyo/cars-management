import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { brands, brandSelected, cylinders, cylinderSelected, fuelTypes, fuelTypeSelected, transmissions, transmissionSelected } from 'store';
import { UpperCaseFirstLetter } from 'utils';

const FilterCard = () => {
  const Brand = useRecoilValue<string[]>(brands);
  const Cylinder = useRecoilValue<string[]>(cylinders);
  const Transmition = useRecoilValue<string[]>(transmissions);
  const FuelType = useRecoilValue<string[]>(fuelTypes);
  const [brandIsSelect, setBrandIsSelect] = useRecoilState<string>(brandSelected);
  const [cylinderIsSelect, setCylinderIsSelect] = useRecoilState<string>(cylinderSelected);
  const [transmissionIsSelect, setTransmissionIsSelect] = useRecoilState<string>(transmissionSelected);
  const [fuelTypeIsSelect, setFuelTypeIsSelect] = useRecoilState<string>(fuelTypeSelected);

  return (
    <div className='md:col-span-1 shadow-lg p-4 md:h-full md:min-w-[200px]'>
      <h2 className='text-lg font-bold mb-3 text-left'>Filter By</h2>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>Brand</p>
        <form>
        {
          Brand && Brand.map((e: string, index: number) => (
            <div className='mb-1 flex' key={index}>
              <input
                type="radio"
                className='mr-3'
                name={`brand-list-${index}`}
                value={e}
                checked={e === brandIsSelect.toLowerCase()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandIsSelect(e.target.value)} />
              <label htmlFor={e}>{UpperCaseFirstLetter(e)}</label>
            </div>
          ))
          }
        </form>
      </div>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>Fuel Type</p>
        <form>
          {
            FuelType && FuelType.map((e: string, index: number) => (
              <div className='mb-1 flex' key={index}>
                <input
                  type="radio"
                  className='mr-3'
                  name={`brand-list-${index}`}
                  value={e}
                  checked={e === fuelTypeIsSelect.toLowerCase()}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFuelTypeIsSelect(e.target.value)} />
                <label htmlFor={e}>{UpperCaseFirstLetter(e)}</label>
              </div>
            ))
          }
        </form>
      </div>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>Transmission</p>
        <form>
          {
            Transmition && Transmition.map((e: string, index: number) => (
              <div className='mb-1 flex' key={index}>
                <input
                  type="radio"
                  className='mr-3'
                  name={`brand-list-${index}`}
                  value={e}
                  checked={e === transmissionIsSelect.toLowerCase()}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransmissionIsSelect(e.target.value)} />
                <label htmlFor={e}>{UpperCaseFirstLetter(e)}</label>
              </div>
            ))
          }
        </form>
      </div>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>Cylinder</p>
        <form>
        {
          Cylinder && Cylinder.map((e: string, index: number) => (
            <div className='mb-1 flex' key={index}>
              <input
                type="radio"
                className='mr-3'
                name={`brand-list-${index}`}
                value={e}
                checked={e === cylinderIsSelect.toLowerCase()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCylinderIsSelect(e.target.value)} />
              <label htmlFor={e}>{UpperCaseFirstLetter(e)}</label>
            </div>
          ))
          }
        </form>
      </div>
    </div>
  )
}

export default FilterCard;