export const getImages = (images) => ({
    type:"GET_IMAGES",
    images: images
})

export const clickImage = (pic) => ({
    type:"CLICK_IMAGE",
    modal_pic: pic
})

export const closeImage = () => ({
    type:"CLOSE_IMAGE"
})