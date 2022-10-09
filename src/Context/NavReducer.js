const navReducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return {
          ...state,
          openModal : true,
        };
        case 'CLOSE_MODAL':
            return {
              ...state,
              openModal : false,
            };
        case 'SET_AUTH_LOADING':
        return {
          ...state,
          authLoading : true,
        };
        case 'SET_WALLET_EMPTY':
        return {
          ...state,
          userWalletEmpty : true
        };
        case 'SET_WALLET_LOADED':
        return {
          ...state,
          userWalletEmpty : false
        };
        case 'SET_ADMIN_MESSAGES':
        return {
          ...state,
          adminMessages : action.payload,
        };
        case 'CLOSE_ADMIN_MESSAGES':
        return {
          ...state,
          adminMessages : [],
          adminMessagesClosed:true,
        };
        case 'LOGGIN_IN_SHOWN':
        return {
          ...state,
          logginInShown:true,
          
        };
        case 'WALLETS_EMPTY_SHOWN':
        return {
          ...state,
          
          walletsEmptyShown:true,
        };
        case 'SET_TOAST' :
          var _messageFrom = "dummy"
          if(action.messageFrom){
            _messageFrom = "signup"
          }
        return {
          ...state,
              toastMessage : {type:action.messageType,message:action.message,messageFrom:_messageFrom}
        };
        case 'REMOVE_TOAST' :
          
        return {
          ...state,
          toastMessage : null
        };
        case 'SET_NEW_USER':
        return {
          ...state,
          newUser : true
        };
        case 'REMOVE_NEW_USER':
        return {
          ...state,
          newUser : false
        };
        
        case 'STOP_AUTH_LOADING':
            return {
              ...state,
              authLoading : false,
            };
        case 'SET_MODAL_CHOOSER' :
        return {
          ...state,
          modalChooser : action.payload  
          };
        case 'SIGNED_IN' :
        return {
          ...state,
          signedIn : true,
          
          
        };
        case 'UPDATE_USERNAME' :
          // console.log("updateusername")
        return {
          ...state,
          username : action.payload,
          
        };
        case 'SIGNED_OUT' :
        return {
          ...state,
          signedIn : false,
          username : null,
          userWalletEmpty : true,
          profilePic : null,
          newUser :false,
          authLoading : false
        }
        case 'START_TOUR' :
          
          return {
            ...state,
            runTour : true,
          };

          case 'END_TOUR' :
          
          return {
            ...state,
            runTour : false,
          };
        case 'FIRST_TIME_USER_TRUE' :
          
        return {
          ...state,
          firstTimeUser : true,
        };
        case 'FIRST_TIME_USER_FALSE' :
          
        return {
          ...state,
          firstTimeUser : false,
        };
        case 'SET_USER_PIC' :
          return {
            ...state,
            profilePic : action.payload,
          }
        case 'MAGIC_LINK_LOGIN' :
          return {
            ...state,
            magicLinkLogin : true,
          }
        case 'STATE_REFRESH' :
          return {
            ...state,
            openModal : false,
        signedIn : false,
        authLoading : false,
        modalChooser : "login",
        username : null,
        profilePic : null,
        userWalletEmpty : true,
        newUser :false,
        toastMessage:null,
        adminMessages:[],
        adminMessagesClosed:false,
        logginInShown:false,
        walletsEmptyShown:false,
          }
      default:
        return state;
    }
  };
  
  export default navReducer;
  