# Homework 6: Forms

The included `server.go` file contains a small server that accepts POST
requests with the `/email/add` URL. The server validates the form data
it receives, and sends back an error response if the value of the
`email` field is not a valid address. An error message is included in
the body of the response in plain text format.

Make a web page that allows users to submit their email address to the
Go server. The web page should work properly without JavaScript. If
JavaScript is available, the address should instead be sent using
`fetch`. If the address is invalid, display the error message above the
input to let the user know what the issue is. If the address is valid,
replace the form with a success message.

Make sure to use a `try`/`catch` block to properly handle possible
errors thrown by `fetch`.
