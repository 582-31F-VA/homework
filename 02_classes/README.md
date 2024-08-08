# Homework 2: Library

Create a web page that allows librarians to lease books to people, and
add books to the library's catalogue. Your program should define two
types of objects: 

-   A `Book` represents a book. It has a title, an author, and a date of
    publication. A book can be currently available or not. If it is
    currently unavailable, its `returnDate` should be a `Date` object
    that represents the return date. One should be able to lease a book.
    Books are leased for two weeks.

-   A `Library` represents the library the librarians work for. It has a
    catalogue, which contains all of its books. One should be able to
    add a book to the catalogue.

Objects of type `Book` and `Library` should both have a `render` method,
which returns an `HTMLElement`. In the case of `Book`, that
`HTMLElement` should be an `article` with a [description list][]
containing information about the book, as well as a `button` to lease
the book. In case of `Library`, it should be an unordered list
containing the catalogue.

When a book is added to the catalogue, the list of books should be
automatically updated. When a book is leased, its information should
also be automatically updated.

Classes should be in a separate module, and public functions should be
documented using JSDoc.

[description list]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
