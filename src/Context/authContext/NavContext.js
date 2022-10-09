
import { createContext, useReducer } from "react";
import navReducer from './NavReducer'

const NavContext = createContext();

export const NavProvider = ({children}) => {
    const initialState = {
        openModal : false,
        signedIn : false,
        //I Have kept the below Auth Loading true Initially to avoid the homepage shoing first without checking for signing
        //Eventhough the Navigator is changing the State, the State change is slow.
        authLoading : true,
        modalChooser : "login",
        firstTimeUser:null,
        runTour:false,
        username : null,
        profilePic : null,
        userWalletEmpty : true,
        newUser :false,
        toastMessage:null,
        adminMessages:[],
        adminMessagesClosed:false,
        logginInShown:false,
        walletsEmptyShown:false,
        magicLinkLogin:false,
    }
    
      const [state, dispatchNav] = useReducer(navReducer, initialState);


      
    
    return (
        <NavContext.Provider
        value = {{
            ...state,
            dispatchNav,
        }}
        >
            {children}
        </NavContext.Provider>
    )
}

export default NavContext