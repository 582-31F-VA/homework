import { Book, Library } from "./Library.js";

function createCatalogue(library) {
    const catalogue = library.render();
    document.body.appendChild(catalogue);
    return catalogue;
}

function updateCatalogue(library, catalogue, book) {
    library.addBook(book);
    const updatedCatalogue = library.render();
    catalogue.replaceWith(updatedCatalogue);
    return updatedCatalogue;
}

function main() {
    const library = new Library();
    let catalogue = createCatalogue(library);
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = form.querySelector("input[name=title]").value;
        const author = form.querySelector("input[name=author]").value;
        const year = form.querySelector("input[name=year]").value;
        const book = new Book(title, author, year);
        catalogue = updateCatalogue(library, catalogue, book);
    });
}

main();
