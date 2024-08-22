# Homework 4: Promises

## Part 1: Delay

The built-in function `setTimeout` uses callbacks. Create a
promise-based alternative named `delay` that returns a promise which
resolves after a given duration ins milliseconds.

## Part 2: Sorting

Deno's [`readTextFile`][read] method reads the file at a given path, and
returns a promise that resolves to the file's content as a string. The
[`writeTextFile`][write] method works similarly, but writes the given
string to a file at a given path.

[read]: https://docs.deno.com/api/deno/~/Deno.readTextFile
[write]: https://docs.deno.com/api/deno/~/Deno.writeTextFile

The included `countries.json` file contains information about countries.
Write a program that reads the file, sort countries in descending order
of their population, and writes the result in JSON in a new file named
`sorted-countries.json`. You can use the built-in [`JSON.parse`][parse]
method the parse a JSON string, and [`JSON.stringify`][stringify] to
convert a JavaScript value to a JSON string.

[parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
