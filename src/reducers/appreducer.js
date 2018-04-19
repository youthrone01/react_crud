// Thumbnails Reducers

const DefaultState = {
    authors: [],
}

export default (state = DefaultState, action) => {
    switch (action.type) {
        case 'GET_AUTHORS':
            return {
                authors: action.authors,
                
            }
        case 'SORT_AUTHOR_ASC':
            return {
                authors: action.authors,
            
            }
        case 'SORT_AUTHOR_DES':
            return {
                authors: action.authors,
                
            }
        case 'SEARCH_AUTHORS':
            return {
                authors: action.authors,
                
            }
        default:
            return state
    }
}