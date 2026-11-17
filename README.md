# UW Food Pantry Recipe Finder

A simple website for the University of Washington Food Pantry that helps visitors
find recipes based on the foods they picked up from the pantry.

## What it does

- A **search bar** where you type the ingredients you got from the pantry
  (e.g. `beans, rice, eggs`).
- Recipes are **ranked** by how many of your ingredients they use, and the
  matching ingredients are **highlighted** on each recipe card.
- Quick **suggestion chips** for common pantry staples.
- Each recipe card shows prep time, cooking method, a nutrition highlight, the
  full ingredient list, and step-by-step directions.

## Running it

This is a static site with no build step. Open `index.html` in a browser, or
serve the folder with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page structure (header, search, results, footer) |
| `styles.css` | UW-branded styling (Husky Purple `#4b2e83`, Husky Gold `#b7a57a`) |
| `recipes.js` | Recipe data |
| `app.js` | Search and rendering logic |

## Adding recipes

Recipes live in `recipes.js`. Each entry has a readable `ingredients` list
(shown on the card) and a lowercase `keywords` list used for searching, so a
visitor can type `beans` and match "black beans," "red beans," and
"green beans." Copy an existing entry as a template.

## Credits

Recipes from "Recipe Cards" by Chris Jaehne. Built for the University of
Washington Food Pantry.
