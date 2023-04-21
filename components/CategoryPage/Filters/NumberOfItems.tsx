import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
    setPageItems: React.Dispatch<React.SetStateAction<number | undefined>>
}

const NumberOfItems = ({setPageItems}:Props) => {

    const handleChange = (target:any) => {
        const {value} = target
        setPageItems(value)

    }
    return (
        <FormControl className='w-[100px]'>
        <InputLabel id="demo-simple-select-label text-[10px]">Pokaż</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Pokaż"
        defaultValue={""}
        onChange={({target}) => handleChange(target)} 
        placeholder=''
        >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={15}>15</MenuItem>
        </Select>
        </FormControl>
      )
}

export default NumberOfItems
