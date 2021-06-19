class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.style = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.style = 'magazin';
    }

}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.style = 'book';
    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.style = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.style = 'detective';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.style = 'novel';
    }
}

class Library {

    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < library.books.length; i++) {
            let parametr = library.books[i];
            for (let i = 0; i < parametr.length; i++) {
                if (parametr[i] === value) {
                    console.log(parametr.name);
                    return this.name;
                } else {
                    return 'null';
                }
            }
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i < library.books.length; i++) {
            let parametr = library.books[i];
            if (parametr.name === bookName) {
                delete parametr;
                return parametr;
            } else {
                return 'null';
            }
        }
    }
}