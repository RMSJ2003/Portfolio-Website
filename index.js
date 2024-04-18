import express from "express";
import bodyParser from "body-parser";
import { portfolios, skills, identity, socials, fullName, experiences, contacts } from "./websiteContent.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //Middleware that makes the public directory static

app.get("/", (req, res) => {
    // Retrieve the search results from the query parameters
    const searchResult = req.query.searchResult ? JSON.parse(req.query.searchResult) : null;
    
    res.render("index.ejs", {
        skills: skills,
        portfolios: portfolios,
        searchResult: searchResult,
        req: req, // Pass the req object to the template
        identity: identity,
        socials: socials,
        fullName: fullName,
        experiences: experiences,
        contacts: contacts,
    });
});

app.post("/search", (req, res) => {
    const searchResult = [];

    portfolios.forEach(portfolio => {
        if (portfolio.name.toLowerCase().includes(req.body.searchItem.trim().toLowerCase())) {
            // If it includes any
            searchResult.push(portfolio);
        }
    });

    // Redirect to the root route ("/") with search results as query parameters
    if (searchResult.length > 0) {
        res.redirect(`/?searchResult=${encodeURIComponent(JSON.stringify(searchResult))}`);
    } else {
        // No results found, redirect with a flag
        res.redirect("/?noResult=true");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});