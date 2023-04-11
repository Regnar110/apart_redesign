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
    notifyAction(toastNotofication:string, httpStatusCode:number):void;
    onlyIcon?:boolean
}

const AddToWishList = ({wishProductId, isUserLogged, notifyAction, onlyIcon}:Props) => {
    const dispatch = useDispatch()
    const isProductInWishList = useSelector((state:RootState) => isProductAdded(state, wishProductId))
    const user = useSelector((state:RootState) => getLoggedUser(state))


  return  isProductInWishList && isUserLogged ? 
            <div className='fav-icon flex gap-x-3 bottom-6 right-6 text-red-500' onClick={() => addOrRemoveFromWish(wishProductId, user.user_email, "REMOVE", dispatch, notifyAction)}>
                <FavoriteIcon fontSize='medium'/>
                {
                    !onlyIcon && <span className='text-[14px] transition-all text-black hover:text-[#c7747b]' >Usuń z listy życzeń</span>
                }
                                            
            </div>
            :
            <div className='fav-icon flex gap-x-3 bottom-6 right-6' onClick={() => isUserLogged? addOrRemoveFromWish(wishProductId, user.user_email, "ADD", dispatch, notifyAction) : notifyAction("Zaloguj się żeby dodać produkt do listy życzeń!", 500)}>
                <FavoriteBorderIcon  fontSize='medium'/> 
                {
                    !onlyIcon && <span className='text-[14px] transition-all text-black hover:text-[#c7747b]'>Dodaj do listy życzeń</span>
                }
                                           
            </div>
                
}

export default AddToWishList
