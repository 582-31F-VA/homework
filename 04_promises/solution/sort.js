const inputJson = await Deno.readTextFile("countries.json");
const countries = JSON.parse(inputJson).countries;
const sortedCountries = countries.sort((a, b) => {
    if (a.population > b.population) return -1;
    if (b.population > a.population) return 1;
});
const outputJson = JSON.stringify(sortedCountries);
Deno.writeTextFile("sorted-countries.json", outputJson);
