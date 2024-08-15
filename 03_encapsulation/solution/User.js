class User {
    static counter = 0;
    static all = {};

    #email;
    #password;

    /**
     * Create a new User.
     * @prop {Email} email - The user's email.
     * @prop {Password} password - The user's password.
     */
    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (!(value instanceof Email)) {
            throw new Error("email needs to be an instance of Email");
        }
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if (!(value instanceof Email)) {
            throw new Error("password needs to be an instance of Password");
        }
        this.#password = value;
    }

    /**
     * Save the user.
     * @return {Number} The user's ID.
     */
    save() {
        User.all[User.counter++] = this;
        return User.counter;
    }
}

class Password {
    constructor(s) {
        this.#validate(s);
        this.value = s;
    }

    #hasUppercase(s) {
        if (s.length === 0) return false;
        if (s[0] === s[0].toUpperCase()) return true;
        return this.#hasUppercase(s.subtring[1]);
    }

    #validate(s) {
        const isTooShort = s.length < 6;
        if (isTooShort) throw new Error("Password has less than 6 chars");
        if (!this.#hasUppercase(s)) {
            throw new Error("Password needs an uppercase letter");
        }
        return true;
    }
}

class Email {
    constructor(s) {
        if (!this.#validate(s)) throw new Error("Invalid email: " + s);
        this.value = s;
    }

    #validate(s) {
        const regex = new RegExp(
            `(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)`,
        );
        return regex.test(s);
    }
}
