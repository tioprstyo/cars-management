import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newDesks, typeOfMaterial, newDesksSelected, materialSelected } from 'store';

const FilterCard = () => {
  const newsDeskList = useRecoilValue<string[]>(newDesks);
  const typeOfMaterialList = useRecoilValue<string[]>(typeOfMaterial);
  const [newsDeskSelect, setNewsDeskSelect] = useRecoilState<string[]>(newDesksSelected);
  const [materialSelect, setMaterialSelect] = useRecoilState<string[]>(materialSelected);

  const onFilterByNewsDesk = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filterByNewsDesk = [...newsDeskSelect];
    if (e.target.checked) {
      filterByNewsDesk.push(e.target.value);
    } else {
      filterByNewsDesk = newsDeskSelect.filter(filter => filter !== e.target.value);
    }
    setNewsDeskSelect(filterByNewsDesk);
  }

  const onFilterByMaterial = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filterByMaterial = [...materialSelect];
    if (e.target.checked) {
      filterByMaterial.push(e.target.value);
    } else {
      filterByMaterial = materialSelect.filter(filter => filter !== e.target.value);
    }
    console.log(filterByMaterial)
    setMaterialSelect(filterByMaterial);
  }

  return (
    <div className='md:col-span-1 shadow-lg p-4 md:min-h-screen md:min-w-[200px]'>
      <h2 className='text-lg font-bold mb-3 text-left'>Filter By</h2>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>News Desk</p>
        {
          newsDeskList && newsDeskList.map((e: string, index: number) => (
            <div className='mb-1 flex' key={index + 2}>
              <input type="checkbox" id={`category-${index + 2}`} name={`category-${index + 2}`} className='self-center mr-2' value={e} onChange={onFilterByNewsDesk}></input>
              <p>{e.charAt(0).toUpperCase() + e.slice(1)}</p>
            </div>
          ))
        }
      </div>
      <div className='mt-5'>
        <p className='mb-2 text-left font-semibold'>Material</p>
        {
          typeOfMaterialList && typeOfMaterialList.map((e: string, index: number) => (
            <div className='mb-1 flex' key={index + 2}>
              <input type="checkbox" id={`category-${index + 2}`} name={`category-${index + 2}`} className='self-center mr-2' value={e} onChange={onFilterByMaterial}></input>
              <p>{e.charAt(0).toUpperCase() + e.slice(1)}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FilterCard;