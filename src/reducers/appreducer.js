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
        case 'SORT_AUTHOR':
            return {
                authors: action.authors,
            
            }
        case 'CLOSE_IMAGE':
            return {
                authors: action.authors,
                
            }
        default:
            return state
    }
}