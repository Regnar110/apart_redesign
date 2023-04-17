import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { categorizedProducts, productsNumber} from '../../../redux/slices/productsSlice';
import ReactPaginate from 'react-paginate';
import PaginationItems from './PaginationItems';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { getCategoryNameWithQuantity } from '../../../redux/slices/categoriesSlice';
import Router from 'next/router';
import PriceFilter from '../Filters/PriceFilter';
import { priceFilter } from '../../../utils/CategoryPageFilters/PriceFiltersUtils/priceFilter';
import SortProductsFilter from '../Filters/SortProductsFilter';

interface Props {
    current_ref:string[] | string
    itemsPerPage:number;
}

const PaginatedItems = ({current_ref, itemsPerPage}:Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false) // Usttawiane na true przy końcu componentDidMount.
  const [itemOffset, setItemOffset] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({}) // służy do definiowania przez komponent użytych filtrów, żeby wyświetlić je w UI
  const [allProductsByCategory, setAllProductsByCategory] = useState<Product[]>();
  const [product_title, productsByCategory]:[string, Product[]] = useSelector((state:RootState) => categorizedProducts(state, current_ref[0])) // pobieramy ze store skategoryzowane produkty w postaci [string, Product[]]
  const categories = useSelector((state:RootState) => getCategoryNameWithQuantity(state)) // pobieramy ze store kategorię oraz liczbę produktów, które się w niej znajdują w postaci [Category, number][]
  const allProductsQuantity = useSelector((state:RootState) => productsNumber(state)) // pobieramy liczbę wszystkich produktów dostępnych w sklepie
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Object.entries(appliedFilters).length ? allProductsByCategory?.slice(itemOffset, endOffset) :  productsByCategory.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((Object.entries(appliedFilters).length ? allProductsByCategory!.length : productsByCategory.length) / itemsPerPage);
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % allProductsByCategory!.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
  const removeSelectedFilter = (e:any, single_filter_name:string, filter_type_to_remove:"PRICE") => {
    const appliedFiltersClone = Object.entries(appliedFilters)
    for(let i=0; i<appliedFiltersClone.length; i++) {
      if(appliedFiltersClone[i][0] === e.target!.id) {
        delete appliedFiltersClone[i][1][single_filter_name]
      }
    }
    // delete appliedFiltersClone[0][1][single_filter_name]
    const changedFilters = Object.fromEntries(appliedFiltersClone)
    setAppliedFilters(changedFilters)
    switch(filter_type_to_remove) {
      case "PRICE":
        const itemsAfterRemoveFilter = priceFilter({from:changedFilters.price_filter?.od, to:changedFilters.price_filter?.do, items_to_filter:productsByCategory})
        setAllProductsByCategory(itemsAfterRemoveFilter)  
        break;
      default:
        break;      
    }

  }

  
  useEffect(() => {
    setAllProductsByCategory(productsByCategory)
    setAppliedFilters({})
    setIsMounted(true)
  },[current_ref])
  return isMounted ?
    <div className='paginated_categorized_items relative flex flex-row-reverse items-center justify-center border-[#969696] min-h-[450px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-4 lg:px-0 py-8'>
        <div className='paginated_items relative  flex flex-col justify-center items-center'>
            <PaginationItems current_items={currentItems as Product[]} title={product_title} />
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
                initialPage={1}
            />
        </div>
        <div className='categories_choices  w-[250px] flex flex-col justify-start h-full px-3'>
        <div className='applied_filters flex gap-3 text-[12px] text-white'>
          {
            Object.entries(appliedFilters).map(([filter, filter_object]) => {
              return Object.entries(filter_object).map(([single_filter_name, filter_value]) => filter_value? <div key={single_filter_name} className='bg-[#AE535A] w-fit p-1 rounded-md flex justify-center items-center gap-2'>{`${single_filter_name}: ${filter_value}`} zł <span onClick={(e) => removeSelectedFilter(e, single_filter_name, "PRICE")} id={filter}>x</span></div> : null)
            })
          }
        </div>

         <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>Produkty</h1>
            <div className='choice flex items-center gap-2 h-fit' onClick={() => Router.push(`/category/all`)}>
              <span className='cursor-pointer text-[15px] text-[#222222be] hover:text-[#d4a82f] transition-all py-1'>Wszystko</span>
              <span className='category_products_quantity text-[10px] text-[#777777]'>({allProductsQuantity})</span>
            </div>
         {
          categories.map(([category, quantity]) => (
            <div key={category._id} className='choice flex items-center gap-2 h-fit' onClick={() => Router.push(`/category/${category!._id}`)}>
              <span className='cursor-pointer text-[15px] text-[#222222be] hover:text-[#d4a82f] transition-all py-1'>{category!.title}</span>
              <span className='category_products_quantity text-[10px] text-[#777777]'>({quantity as number})</span>
            </div>
          ))
         }
         <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>CENA</h1>
         <PriceFilter setFilters={setAppliedFilters} setAllProducts={setAllProductsByCategory} items_to_filter={productsByCategory} recent_filters={appliedFilters}/>
         <h1 className='font-light text-[16px] border-b-[1px] border-[#ccc] h-fit w-full my-2'>SORTUJ</h1>
         <SortProductsFilter setFilters={setAppliedFilters} setAllProducts={setAllProductsByCategory} items_to_filter={Object.entries(appliedFilters).length?allProductsByCategory as Product[]: productsByCategory as Product[]} recent_filters={appliedFilters} />
        </div>
    </div>
    :
    null
}

export default PaginatedItems
