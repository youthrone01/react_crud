export const getAuthors = (authors) => ({
    type:"GET_AUTHORS",
    authors: authors
})

export const delAuthors = (authors) => ({
    type:"CLICK_IMAGE",
    authors: authors
})

export const closeImage = () => ({
    type:"CLOSE_IMAGE"
})

export const sortAuthor = (authors) => {
    authors.sort((a,b)=>{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })
    const new_authors = authors.slice()
    return {
        type:"SORT_AUTHOR",
        authors: new_authors
    }
}