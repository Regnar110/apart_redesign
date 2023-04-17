import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SortProducts } from '../../../utils/CategoryPageFilters/SortProductsUtils/SortProducts';

interface Props {
    setFilters: React.Dispatch<React.SetStateAction<AppliedFilters>>;
    recent_filters: AppliedFilters
    setAllProducts:  React.Dispatch<React.SetStateAction<Product[] | undefined>>;
    items_to_filter: Product[]
}

const SortProductsFilter = ({setFilters, setAllProducts, items_to_filter, recent_filters}:Props) => {

    const handleChange = (event: SelectChangeEvent) => {
        event.preventDefault()
        const filter_type = event.target.value
        SortProducts({items_to_filter, filter_type})
    };
  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Sortuj wg</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={"LOW"}
    label="Sortuj wg"
    onChange={handleChange}
    >
        <MenuItem value={"LOW"}>Od najniższej ceny</MenuItem>
        <MenuItem value={"HIGH"}>Od najwyższej ceny</MenuItem>
    </Select>
    </FormControl>
  )
}

export default SortProductsFilter
