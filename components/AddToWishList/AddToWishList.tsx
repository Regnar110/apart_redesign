import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser, isProductAdded } from '../../redux/slices/userSlice'
import { RootState } from '../../redux/store';
import { addOrRemoveFromWish } from '../../utils/addOrRemoveFromWish';

interface Props {
    wishProductId: string;
    isUserLogged: boolean
    notifyAction(toastNotofication:string, httpStatusCode:number):void
}

const AddToWishList = ({wishProductId, isUserLogged, notifyAction}:Props) => {
    const dispatch = useDispatch()
    const isProductInWishList = useSelector((state:RootState) => isProductAdded(state, wishProductId))
    const user = useSelector((state:RootState) => getLoggedUser(state))


  return  isProductInWishList && isUserLogged ? 
            <div className='fav-icon bottom-6 right-6 text-red-500' onClick={() => addOrRemoveFromWish(wishProductId, user.user_email, "REMOVE", dispatch, notifyAction)}>
                <FavoriteIcon fontSize='medium'/>                            
            </div>
            :
            <div className='fav-icon bottom-6 right-6' onClick={() => isUserLogged? addOrRemoveFromWish(wishProductId, user.user_email, "ADD", dispatch, notifyAction) : notifyAction("Zaloguj się żeby dodać produkt do listy życzeń!", 500)}>
                <FavoriteBorderIcon  fontSize='medium'/>                            
            </div>
                
}

export default AddToWishList
