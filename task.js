export function getLongestBookByAuthorName(authors, books, authorName) {

        const author = authors.find(item => item.name === authorName)


            if(!author){
            
                return null;
            }
            
        const bookList = books.filter(b => b.author_id === author.id)

        if (bookList.length === 0){

            return null;
        }
        const longestBook = bookList.reduce((longest, current)=>{
            if(current.pages > longest.pages){
                
    
                return current;
            }
            else if(current.pages === longest.pages && current.title < longest.title){

                return current;
            }

            return longest;
        },bookList[0]);

        return longestBook.title;
    }

    


        

