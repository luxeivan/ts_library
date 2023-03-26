interface BookInt {
    id: string
    title: string
    description: string
    authors: [string]
    favorite: string
    fileCover: string
    fileName: string
}

abstract class BooksRepository {
    books: [BookInt]
    createBook(book: BookInt) {
        this.books.push(book)
    };
    getBook(id: string): BookInt {
        return this.books.find(item => item.id === id)
    };
    getBooks() {
        return this.books
    };
    updateBook(id: string, book: BookInt) {
        const index = this.books.findIndex(item => item.id === id)
        this.books[index] = book
    };
    deleteBook(id: string) {
        const index = this.books.findIndex(item => item.id === id)
        this.books.splice(index, 1)
    };
}

export { BooksRepository }