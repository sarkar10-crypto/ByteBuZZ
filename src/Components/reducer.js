const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_STORIES':
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages :action.payload.nbPages,
            };
        
        case 'REMOVE_POST':
            return {
                ...state,
                // Filter out the post where the `objectID` matches `action.payload`
                hits: state.hits.filter(
                    (curElem) => {
                        return curElem.objectID !== action.payload;
                    } 
                ),
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            }
        case "PREV_PAGE":
            let pageNum = state.page;
            if (pageNum <= 0) {
                pageNum = 0;
            }
            else {
                pageNum = pageNum - 1;
            }
            return {
                ...state,
                page : pageNum,
            }
        case "NEXT_PAGE":
            let pageNumInc = state.page;
            if (pageNumInc > state.nbPages) {
                pageNumInc = 0;
            }
            else {
                pageNumInc = pageNumInc + 1;
            }
            
            return {
                ...state,
                page : pageNumInc,
            }
        
     }
    return state;
}

export default reducer;