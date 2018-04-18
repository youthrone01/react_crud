// Thumbnails Reducers

const DefaultState = {
    images: [],
    modal_pic: {}
}

export default (state = DefaultState, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return {
                images: action.images,
                modal_pic: {}
            }
        case 'CLICK_IMAGE':
            return {
                images: state.images,
                modal_pic: action.modal_pic
            }
        case 'CLOSE_IMAGE':
            return {
                images: state.images,
                modal_pic: {}
            }
        default:
            return state
    }
}