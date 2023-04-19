import React from 'react'
interface Props {
    appliedFilters:AppliedFilters
    removeSelectedFilter: (e: any, single_filter_name: string, filter_type_to_remove: string) => void
}

const AppliedFilters = ({appliedFilters, removeSelectedFilter}:Props) => {
  return (
    <div className='applied_filters flex flex-wrap gap-3 text-[12px] text-white'>
    {
      Object.entries(appliedFilters).map(([filter, filter_object]) => {
        return Object.entries(filter_object).map(([single_filter_name, filter_value]) => 
            filter_value ? 
                <div key={single_filter_name} 
                    className='bg-[#AE535A] w-fit p-1 rounded-md flex justify-center items-center gap-2'>
                    {`${single_filter_name}: ${filter_value}`} zł 
                    <span className='cursor-pointer' onClick={(e) => removeSelectedFilter(e, single_filter_name, "HIGH")} id={filter}>x</span>
                </div> 
                : 
                null
            )
      })
    }
  </div>
  )
}

export default AppliedFilters
