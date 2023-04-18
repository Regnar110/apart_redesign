import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { priceFilter } from '../../../utils/CategoryPageFilters/PriceFiltersUtils/priceFilter';
import { ApplyFiltersOnProducts } from '../../../utils/CategoryPageFilters/ApplyFiltersOnProducts';

interface Props {
    setFilters: React.Dispatch<React.SetStateAction<AppliedFilters>>;
    recent_filters: AppliedFilters
    setAllProducts:  React.Dispatch<React.SetStateAction<Product[] | undefined>>;
    items_to_filter: Product[];
}

const PriceFilter = ({setFilters, setAllProducts, items_to_filter, recent_filters}:Props) => {
    
  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = async (data:{from_price_filter:number, to_price_filter:number}) => {
    if((data.from_price_filter && data.to_price_filter && +data.from_price_filter > +data.to_price_filter )) {
      console.log(`od: ${data.from_price_filter} do: ${data.to_price_filter} wynik: ${data.from_price_filter > data.to_price_filter }`)

      console.log("złe filtry")
    }else {
      
      const filteredByPriceItems = priceFilter({from:data.from_price_filter, to:data.to_price_filter, items_to_filter})
      setAllProducts(filteredByPriceItems)
      for (let key in data) {
        if (data.hasOwnProperty(key) && !data[key]) {
          delete data[key];
        }
      }
      console.log(Object.entries(recent_filters))
      const newFilter = {
        price_filter: {
          od:data.from_price_filter,
          do:data.to_price_filter
        }
      }
      ApplyFiltersOnProducts(items_to_filter, recent_filters, newFilter, "PRICE")
      setFilters({...recent_filters, ...newFilter})  
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
