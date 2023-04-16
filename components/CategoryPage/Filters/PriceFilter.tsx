import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { priceFilter } from '../../../utils/CategoryPageFilters/PriceFiltersUtils/priceFilter';

interface Props {
    setFilters: React.Dispatch<React.SetStateAction<AppliedFilters[]>>;
    setAllProducts:  React.Dispatch<React.SetStateAction<Product[] | undefined>>;
    items_to_filter: Product[]
}

const PriceFilter = ({setFilters, setAllProducts, items_to_filter}:Props) => {
    
  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = async (data:{from_price_filter:number, to_price_filter:number}) => {
    if((data.from_price_filter && !data.to_price_filter && data.from_price_filter> data.to_price_filter) || (data.from_price_filter && data.to_price_filter && data.from_price_filter> data.to_price_filter) ) {
      //JEŻELI Cena od jest większa od ceny DO oraz jeżeli cena OD istnieje a cena DO nie istnieje LUB jeżeli obie ceny istnieją i cena  OD jest większa niż DO
      //Takie zastosowanie filtra jest nie dopuszczalne
      return 
    } else {
      const filteredByPriceItems = priceFilter({from:data.from_price_filter, to:data.to_price_filter, items_to_filter})
      console.log(filteredByPriceItems)
      setAllProducts(filteredByPriceItems)
      for (let key in data) {
        if (data.hasOwnProperty(key) && !data[key]) {
          delete data[key];
        }
      }
      setFilters([data])      
    }
  }
  return (
    <div className='price_filter'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex'>
        <TextField 
            {...register("from_price_filter")} 
            id="outlined-basic" 
            label="Od" 
            variant="outlined" 
            type="number" 
        />
        <TextField 
            {...register("to_price_filter")}
            id="outlined-basic" 
            label="Do" 
            variant="outlined" 
            type="number" 
        />     
        <button type='submit' className='filter_price_icon flex justify-center items-center border-[1px] cursor-pointer bg-[#c7747b] text-white'>
            <FilterAltIcon />
        </button>                   
        </form>
    </div>
  )
}

export default PriceFilter
