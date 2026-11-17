// UW Food Pantry Recipe Finder — search logic and rendering.
// Depends on the global `recipes` array defined in recipes.js.

(function () {
  "use strict";

  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-btn");
  const recipeList = document.getElementById("recipe-list");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");
  const chips = document.querySelectorAll(".chip");

  // Split the query into individual ingredient terms. People separate
  // ingredients with commas, but also just spaces, so we handle both.
  function parseTerms(query) {
    return query
      .toLowerCase()
      .split(/[,\n]/)
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }

  // A term matches a recipe if it appears in any of the recipe's keywords
  // (substring match, so "bean" matches "black beans"). Returns the list of
  // search terms that found a match, so we can tell the user how good the fit is.
  function matchedTerms(recipe, terms) {
    const haystack = recipe.keywords.join(" | ");
    return terms.filter((term) => haystack.includes(term));
  }

  // Does an ingredient line contain any of the matched search terms?
  // Used to highlight the relevant ingredients on the card.
  function ingredientMatches(ingredient, terms) {
    const lower = ingredient.toLowerCase();
    return terms.some((term) => lower.includes(term));
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderIngredient(ingredient, matchedSearchTerms) {
    const safe = escapeHtml(ingredient);
    if (matchedSearchTerms.length && ingredientMatches(ingredient, matchedSearchTerms)) {
      return `<li><mark>${safe}</mark></li>`;
    }
    return `<li>${safe}</li>`;
  }

  function renderCard(recipe, matchedSearchTerms) {
    const ingredientsHtml = recipe.ingredients
      .map((ing) => renderIngredient(ing, matchedSearchTerms))
      .join("");

    const directionsHtml = recipe.directions
      .map((step) => `<li>${escapeHtml(step)}</li>`)
      .join("");

    const tipsHtml = recipe.tips
      ? `<div class="tips">
           <p class="section-label">Tips</p>
           <ul>${recipe.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
         </div>`
      : "";

    const matchNote =
      matchedSearchTerms.length > 0
        ? `<p class="match-note">Uses ${matchedSearchTerms.length} of your ingredient${
            matchedSearchTerms.length === 1 ? "" : "s"
          }: ${matchedSearchTerms.map(escapeHtml).join(", ")}</p>`
        : "";

    return `
      <article class="recipe-card">
        <div class="card-header">
          <h2 class="card-title">${escapeHtml(recipe.title)}</h2>
          <div class="card-meta">
            <span class="badge">${escapeHtml(recipe.time)}</span>
            <span class="badge">${escapeHtml(recipe.cooking)}</span>
            <span class="badge nutrition">${escapeHtml(recipe.nutrition)}</span>
          </div>
        </div>
        <div class="card-body">
          ${matchNote}
          <div class="ingredients">
            <p class="section-label">Ingredients</p>
            <ul class="ingredient-list">${ingredientsHtml}</ul>
          </div>
          <div class="directions">
            <details>
              <summary>Directions</summary>
              <ol>${directionsHtml}</ol>
            </details>
          </div>
          ${tipsHtml}
        </div>
      </article>
    `;
  }

  function render(query) {
    const terms = parseTerms(query);

    let toShow;
    if (terms.length === 0) {
      // No search: show every recipe, unranked.
      toShow = recipes.map((recipe) => ({ recipe, matched: [] }));
    } else {
      // Rank recipes by how many of the user's ingredients they use.
      toShow = recipes
        .map((recipe) => ({ recipe, matched: matchedTerms(recipe, terms) }))
        .filter((entry) => entry.matched.length > 0)
        .sort((a, b) => b.matched.length - a.matched.length);
    }

    recipeList.innerHTML = toShow
      .map((entry) => renderCard(entry.recipe, entry.matched))
      .join("");

    // Result count + empty state messaging.
    if (terms.length === 0) {
      resultCount.textContent = `Showing all ${recipes.length} recipes.`;
      emptyState.hidden = true;
    } else if (toShow.length === 0) {
      resultCount.textContent = "";
      emptyState.hidden = false;
    } else {
      resultCount.textContent = `Found ${toShow.length} recipe${
        toShow.length === 1 ? "" : "s"
      } for: ${terms.join(", ")}`;
      emptyState.hidden = true;
    }

    clearBtn.hidden = query.length === 0;
  }

  // ---- Events ----
  searchInput.addEventListener("input", (e) => render(e.target.value));

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    render("");
    searchInput.focus();
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      searchInput.value = chip.dataset.term;
      render(searchInput.value);
      searchInput.focus();
    });
  });

  // Initial render: show everything.
  render("");
})();
