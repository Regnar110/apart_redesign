import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { categorizedProducts, selectedCategoryProductsQuantity } from '../../../redux/slices/productsSlice';
import ReactPaginate from 'react-paginate';
import PaginationItems from './PaginationItems';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { getCategories } from '../../../redux/slices/categoriesSlice';
import Router from 'next/router';

interface Props {
    current_ref:string[] | string;
    itemsPerPage:number;
}

const PaginatedItems = ({current_ref, itemsPerPage}:Props) => {
    
    const [[product_title, productsByCategory]]  = useSelector((state:RootState) => categorizedProducts(state, current_ref[0]))
    
    const categories = useSelector((state:RootState) => getCategories(state))
    const categoryQuantity = useSelector((state:RootState) => selectedCategoryProductsQuantity(state, current_ref[0]))
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
    <div className='paginated_categorized_items flex flex-row-reverse items-center justify-center border-[#969696] min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4 lg:px-0 py-8'>
        <div className='paginated_items relative  flex flex-col justify-center items-center'>
            <PaginationItems current_items={currentItems} title={product_title} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={<NavigateNextIcon/>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<NavigateBeforeIcon/>}
                renderOnZeroPageCount={null}
                containerClassName='flex justify-center items-center w-fit my-10'
                pageClassName='border-[1px] border-[#969696] w-[40px] h-[40px] cursor-pointer hover:bg-[#F1F1F1]'
                pageLinkClassName="w-full h-full flex justify-center items-center"
                activeClassName='bg-[#F4C1C5] text-[#ae535a] hover:text-white hover:bg-[#F4C1C5] cursor-default'
            />
        </div>
        <div className='categories_choices w-[250px] flex flex-col justify-start h-full px-3'>
         <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>Produkty</h1>
         {
          categories.map(el => (
            <div className='choice flex items-center gap-2 h-fit' onClick={() => Router.push(`/category/${el?._id}`)}>
              <span className='cursor-pointer text-[15px] text-[#222222be] hover:text-[#d4a82f] transition-all py-1'>{el?.title}</span>
              <span className='category_products_quantity text-[10px] text-[#777777]'>({categoryQuantity})</span>
            </div>
          ))
         }
         <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>CENA</h1>
        </div>
    </div>

  );
}

export default PaginatedItems
