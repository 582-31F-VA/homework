export class Library {
    /**
     * Create a Library.
     */
    constructor() {
        this.catalogue = [];
    }

    /**
     * Add the given book to the library's catalogue.
     * @param {Book} b - Book to add to the catalogue.
     */
    addBook(b) {
        this.catalogue.push(b);
    }

    /**
     * Render the library's catalogue.
     * @returns {HTMLElement}
     */
    render() {
        this.node = document.createElement("ul");
        for (const book of this.catalogue) {
            const li = document.createElement("li");
            const bookNode = book.render();
            li.appendChild(bookNode);
            this.node.appendChild(li);
        }
        return this.node;
    }
}

export class Book {
    /**
     * Create a Book.
     * @param {String} title - Title of the book.
     * @param {String} author - Author of the book.
     * @param {Number} year - Year of publication.
     */
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
    }

    /**
     * Lease the book for two weeks.
     */
    lease() {
        const today = new Date();
        this.available = false;
        this.returnDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 14,
        );
    }

    /**
     * Render the book.
     * @returns {HTMLElement}
     */
    render() {
        this.node = document.createElement("article");
        const dl = document.createElement("dl");
        for (
            const key of ["title", "author", "year", "available", "returnDate"]
        ) {
            const dt = document.createElement("dt");
            dt.textContent = key;
            const dd = document.createElement("dd");
            dd.textContent = this[key];
            dl.appendChild(dt);
            dl.appendChild(dd);
        }
        this.node.appendChild(dl);
        const button = document.createElement("button");
        button.textContent = "Lease";
        if (!this.available) button.disabled = true;
        button.addEventListener("click", () => {
            this.lease();
            this.node.replaceWith(this.render());
        });
        this.node.appendChild(button);
        return this.node;
    }
}
