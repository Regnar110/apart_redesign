import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ApplyFiltersOnProducts } from '../../../utils/CategoryPageFilters/ApplyFiltersOnProducts';

interface Props {
    setFilters: React.Dispatch<React.SetStateAction<AppliedFilters>>;
    recent_filters: AppliedFilters
    setAllProducts:  React.Dispatch<React.SetStateAction<Product[] | undefined>>;
    items_to_filter: Product[];
}

const SortProductsFilter = ({setFilters, setAllProducts, items_to_filter, recent_filters}:Props) => {
    const handleChange = (event: SelectChangeEvent) => {
      const filter_type = event.target.value
      const newFilter = {sort_filter:{cena: event.target.value === "LOW"? "od najniższej": "od najwyższej"}}
      const {appliedFilters, filteredProducts} = ApplyFiltersOnProducts(items_to_filter, recent_filters, newFilter, filter_type)
      console.log(filteredProducts)
      setAllProducts(filteredProducts)
      setFilters({...recent_filters, ...appliedFilters}) 
    };


  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Sortuj wg</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Sortuj wg"
    defaultValue={""}
    onChange={handleChange}
    >
        <MenuItem value={"LOW"}>Od najniższej ceny</MenuItem>
        <MenuItem value={"HIGH"}>Od najwyższej ceny</MenuItem>
    </Select>
    </FormControl>
  )
}

export default SortProductsFilter
