import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import {addToWishList, removeFromWishList, isProductAdded} from '../../redux/slices/userSlice'
import { RootState } from '../../redux/store';

interface Props {
    wishProductId: string;
    isUserLogged: boolean
}

const AddToWishList = ({wishProductId, isUserLogged}:Props) => {
    const dispatch = useDispatch()
    const isProductInWishList = useSelector((state:RootState) => isProductAdded(state, wishProductId))
    const addOrRemoveFromWish = (product_id:string, action:string) => {
        switch(action) {
            case "ADD": 
                dispatch(addToWishList(product_id))
                console.log("dodane")
                break;
            case "REMOVE":
                dispatch(removeFromWishList(product_id))
                console.log("usunięte")
                break;
        }
    }
  return  isProductInWishList && isUserLogged ? 
            <div className='fav-icon absolute bottom-6 right-6 z-50' onClick={() => addOrRemoveFromWish(wishProductId, "REMOVE")}>
                <FavoriteIcon fontSize='large'/>                            
            </div>
            :
            <div className='fav-icon absolute bottom-6 right-6 z-50' onClick={() => addOrRemoveFromWish(wishProductId, "ADD")}>
                <FavoriteBorderIcon fontSize='large'/>                            
            </div>
                
}

export default AddToWishList
