//* 1).context creation
// * 2).provider
// * 3).useContext hook
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

// provider function

// default api ko set karna hai

const initialstate = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page:0,
    hits :[],
}

const AppContext = React.createContext();

const Appprovider = ({ children }) => {

    // initial state ko access karna hai using useReducer()

    const [state, dispatch] = useReducer(reducer, initialstate);
    // reducer ko define karna hai uske liye saperate reducer.js banana padega

    const fetchApiData = async (url) => {


         // ab kisi state ka data change karna hai toh reducer ke pass jana padega , reducer ko use karna hai toh dispatch ka use karna padega
    dispatch({
        type : "SET_LOADING",
    })

        try {
            const res = await fetch(url);
            const data = await res.json();
            // api call ke bad Dispatch ke use se payload ke through dynamically data ko contant created variable main set kardenge

            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages : data.nbPages,
                }
            })
            // dispatch directly trigger karta hai reducer ke action params ko
            
            
        } catch (error) {
            console.log("error");
            
        }
    }
    
    // remove post

    const removePost = (post_ID) => {
        dispatch({
            type: "REMOVE_POST",
            payload: post_ID,
        });
    }

    // search post
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        })
    }

    const getPrevPage = () => {
        dispatch({
            type : "PREV_PAGE",
        })
    }

    const getNextPage = () => {
        dispatch({
            type : "NEXT_PAGE",
        })
    }

   
 

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page])


    return (
        <AppContext.Provider value={{...state, removePost, searchPost,getPrevPage,getNextPage }}>{children}</AppContext.Provider>
    )
};

//* custom hook creation :

const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, Appprovider, useGlobalContext };