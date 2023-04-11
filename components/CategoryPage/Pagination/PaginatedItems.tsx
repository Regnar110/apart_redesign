import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { categorizedProducts } from '../../../redux/slices/productsSlice';
import ReactPaginate from 'react-paginate';
import PaginationItems from './PaginationItems';

interface Props {
    current_ref:string[] | string;
    itemsPerPage:number;
}

const PaginatedItems = ({current_ref, itemsPerPage}:Props) => {
    
    const [[title, productsByCategory]]  = useSelector((state:RootState) => categorizedProducts(state, current_ref[0]))
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productsByCategory.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsByCategory.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % productsByCategory.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='paginated_categorized_items flex flex-row-reverse items-center'>
        <div className='paginated_items min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4 lg:px-0 py-8'>
            <PaginationItems current_items={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
        <div className='categories_choices w-[200px]'>
s
        </div>
    </div>

  );
}

export default PaginatedItems
