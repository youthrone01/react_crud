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

export const sortAuthorA = (authors) => {
    authors.sort((a,b)=>{
        let namea = a.name.toLowerCase();
        let nameb = b.name.toLowerCase();
        if(namea < nameb) return -1;
        if(namea > nameb) return 1;
        return 0;
    })
    const new_authors = authors.slice()
    return {
        type:"SORT_AUTHOR_ASC",
        authors: new_authors
    }
}

export const sortAuthorD = (authors) => {
    authors.sort((a,b)=>{
        let namea = a.name.toLowerCase();
        let nameb = b.name.toLowerCase();
        if(namea < nameb) return 1;
        if(namea > nameb) return -1;
        return 0;
    })
    const new_authors = authors.slice()
    return {
        type:"SORT_AUTHOR_DES",
        authors: new_authors
    }
}

export const search_authors = (keyword, authors) => {
    const new_authors = authors.filter((a)=>{
        keyword = keyword.toLowerCase();
        const word = a.name.toLowerCase();
        return word.indexOf(keyword) != -1;
    })
    return {
        type:"SEARCH_AUTHORS",
        authors: new_authors
    }
}


