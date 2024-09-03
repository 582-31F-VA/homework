async function fetchAuthor(mimeType) {
    const options = { headers: { "Accept": mimeType } };
    const req = new Request("https://eloquentjavascript.net/author", options);
    const res = await fetch(req);
    return res;
}

const textRes = await fetchAuthor("text/plain");
const htmlRes = await fetchAuthor("text/html");
const jsonRes = await fetchAuthor("application/json");
const unicornRes = await fetchAuthor("application/rainbows+unicorns");
