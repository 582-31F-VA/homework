async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.querySelector("input");
    const address = input.value;
    try {
        const res = await sendEmail(address, "address");
        appendMessage(await res.text(), form);
    } catch (err) {
        appendMessage("Server error. Try again later.");
        console.error(err);
    }
}

function appendMessage(msg, container) {
    const p = document.createElement("p");
    p.textContent = msg;
    container.appendChild(p);
}

class ServerError extends Error {}

async function sendEmail(emailAddress, url) {
    const formData = new URLSearchParams();
    formData.append("email", emailAddress);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
    };
    const req = new Request(url, options);
    const res = await fetch(req);
    if (!res.ok) throw new ServerError(`Response status: ${res.status}`);
    return res;
}

function main() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}

main();
