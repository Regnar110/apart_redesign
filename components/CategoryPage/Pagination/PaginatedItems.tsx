import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { categorizedProducts, productsNumber} from '../../../redux/slices/productsSlice';
import ReactPaginate from 'react-paginate';
import PaginationItems from './PaginationItems';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { getCategoryNameWithQuantity } from '../../../redux/slices/categoriesSlice';
import PriceFilter from '../Filters/PriceFilter';
import SortProductsFilter from '../Filters/SortProductsFilter';
import { ApplyFiltersOnProducts } from '../../../utils/CategoryPageFilters/ApplyFiltersOnProducts';
import NumberOfItems from '../Filters/NumberOfItems';
import AppliedFilters from '../ProductsCategoriesChoice/AppliedFilters/AppliedFilters';
import ProductsCategoriesChoice from '../ProductsCategoriesChoice/ProductsCategoriesChoice';
import MediaQuery from 'react-responsive'

interface Props {
    current_ref:string[] | string
    defaultItemsPerPage:number;
}

const PaginatedItems = ({current_ref, defaultItemsPerPage}:Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false) // Usttawiane na true przy końcu componentDidMount.
  const [itemOffset, setItemOffset] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({}) // służy do definiowania przez komponent użytych filtrów, żeby wyświetlić je w UI
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>();
  const [selectedPage, setSelectedPage] = useState<number>(1) // służy do wskazania instancjom ReactPaginate jaką strone mają aktualnie renderować. Użyteczne przy dwóch iunstancjach
  const [itemsPerOnePage, setItemPerOnePage] = useState<number>()


  const [product_title, productsByCategory]:[string, Product[]] = useSelector((state:RootState) => categorizedProducts(state, current_ref[0])) // pobieramy ze store skategoryzowane produkty w postaci [string, Product[]]
  const categories = useSelector((state:RootState) => getCategoryNameWithQuantity(state)) // pobieramy ze store kategorię oraz liczbę produktów, które się w niej znajdują w postaci [Category, number][]
  const allProductsQuantity = useSelector((state:RootState) => productsNumber(state)) // pobieramy liczbę wszystkich produktów dostępnych w sklepie
  
  
  const endOffset = itemOffset + (itemsPerOnePage? itemsPerOnePage: defaultItemsPerPage);
  const currentItems = displayedProducts?.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(displayedProducts? displayedProducts!.length / (itemsPerOnePage? itemsPerOnePage: defaultItemsPerPage):0);

  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * (itemsPerOnePage? itemsPerOnePage: defaultItemsPerPage)) % displayedProducts!.length;
    setItemOffset(newOffset);
    setSelectedPage(event.selected)
  };
  const removeSelectedFilter = (e:any, single_filter_name:string, filter_type_to_remove:string) => {
    const appliedFiltersClone = Object.entries(appliedFilters)
    for(let i=0; i<appliedFiltersClone.length; i++) {
      if(appliedFiltersClone[i][0] === e.target!.id) {
        delete appliedFiltersClone[i][1][single_filter_name]
      }
    }
    const changedFilters = Object.fromEntries(appliedFiltersClone)
    const newSortResult = ApplyFiltersOnProducts(productsByCategory, appliedFilters, changedFilters, filter_type_to_remove) // tu zmienić!
    setDisplayedProducts(newSortResult.filteredProducts)
    setAppliedFilters({...newSortResult.appliedFilters})
  }

  
  useEffect(() => {
    setItemOffset(0) // usuwa problem w którym po wybraniu np 7 strony w kategorii wszystkie przy przechodzeniu do innej kategori dalej pokzywało 7 stronę mimo że nowo wybrana kategoria miała tylko 1 stronę
    // przez co nie są wyświetlane produkty
    setDisplayedProducts(productsByCategory) // poczatkowo wysiwtlanymi produktami są bazowe produkty pobrane ze store.
    //JEst tak dlatego, że displayed products są to produkty po użyciu np filtrów.
    setItemPerOnePage(defaultItemsPerPage)
    setIsMounted(true)
    setAppliedFilters({}) // przy zmianie kategorii resetujemy filtry
  },[current_ref])
  return isMounted ?
    <div className='paginated_categorized_items relative flex flex-col lg:flex-row-reverse items-start justify-center border-[#969696] min-h-[450px] w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] px-5 lg:px-0 py-8'>
        <MediaQuery maxWidth={1023}>
          <AppliedFilters appliedFilters={appliedFilters} removeSelectedFilter={removeSelectedFilter}/>
          <ProductsCategoriesChoice categories={categories} allProductsQuantity={allProductsQuantity} mobileWithDropdown={true}>
            <PriceFilter setFilters={setAppliedFilters} setAllProducts={setDisplayedProducts} items_to_filter={productsByCategory as Product[]} recent_filters={appliedFilters}/>
            <SortProductsFilter setFilters={setAppliedFilters} setAllProducts={setDisplayedProducts} items_to_filter={productsByCategory as Product[]} recent_filters={appliedFilters} />
          </ProductsCategoriesChoice>
        </MediaQuery>
        <div className='paginated_items relative  flex flex-col justify-center items-center w-full'>
          <div className='items_header flex w-full justify-between items-center'>
            <h1 className=' text-[18px] md:text-[28px] font-light'>{product_title}</h1> 
            <NumberOfItems setPageItems={setItemPerOnePage}/>          
          </div>
          <ReactPaginate
            forcePage={selectedPage}
            breakLabel="..."
            nextLabel={<NavigateNextIcon/>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<NavigateBeforeIcon/>}
            renderOnZeroPageCount={null}
            containerClassName='flex justify-center items-center w-fit my-10'
            pageClassName='border-[1px] border-[#969696] w-[30px] h-[30px] cursor-pointer hover:bg-[#F1F1F1]'
            pageLinkClassName="w-full h-full flex justify-center items-center"
            activeClassName='bg-[#F4C1C5] text-[#ae535a] hover:text-white hover:bg-[#F4C1C5] cursor-default'
          />
          <PaginationItems current_items={currentItems as Product[]}/>
          <ReactPaginate
            forcePage={selectedPage}
            breakLabel="..."
            nextLabel={<NavigateNextIcon/>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<NavigateBeforeIcon/>}
            renderOnZeroPageCount={null}
            containerClassName='flex justify-center items-center w-fit my-10'
            pageClassName='border-[1px] border-[#969696] w-[30px] h-[30px] cursor-pointer hover:bg-[#F1F1F1]'
            pageLinkClassName="w-full h-full flex justify-center items-center"
            activeClassName='bg-[#F4C1C5] text-[#ae535a] hover:text-white hover:bg-[#F4C1C5] cursor-default'
          />
        </div>
        <MediaQuery minWidth={1024}>
          <ProductsCategoriesChoice categories={categories} allProductsQuantity={allProductsQuantity} mobileWithDropdown={false}>
            <AppliedFilters appliedFilters={appliedFilters} removeSelectedFilter={removeSelectedFilter}/>
            <PriceFilter setFilters={setAppliedFilters} setAllProducts={setDisplayedProducts} items_to_filter={productsByCategory as Product[]} recent_filters={appliedFilters}/>
            <SortProductsFilter setFilters={setAppliedFilters} setAllProducts={setDisplayedProducts} items_to_filter={productsByCategory as Product[]} recent_filters={appliedFilters} />
          </ProductsCategoriesChoice>
        </MediaQuery>
    </div>
    :
    null
}

export default PaginatedItems
