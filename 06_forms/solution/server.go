package main

import (
	"fmt"
	"log"
	"net/http"
	"net/mail"
)

func emailAdd(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", "*")
	err := r.ParseForm()
	if err != nil {
		http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
		return
	}
	email := r.PostForm.Get("email")
	_, err = mail.ParseAddress(email)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusCreated)
	fmt.Fprint(w, "Email added")
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("POST /email/add", emailAdd)
	log.Print("Starting server on :4000")
	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}
