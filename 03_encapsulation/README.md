# Homework 3: Encapsulation

Design a class for objects of type `User`. When creating a new user, an
email as well as a password must be provided. The password must be at
least 6 characters long, and contain an uppercase letter. You cannot use
regular expressions to validate the password. The email, however, must
match the following [regular expression][]:

```regex
(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)
```

[regular expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

You can use the `test` method on an object of type `RegExp` to verify
whether a given string matches a regular expression.

The methods used for validation should be private. One must also be able
to update a user's email and password by assigning a new value to those
properties directly, in which case the new values must also be
validated.

Finally, a `User` should have a public `save` method, which adds the
user to a static property where users are stored. Once saved, each user
should a have a unique numeral identifier, which is returned by the
`save` method.

Don't forget to document public methods using JSDoc.
