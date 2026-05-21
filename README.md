## How to Add Content

### Add a new function definition
Open `js/definition.js` and add a new entry to the `fonctions` object:
```javascript
"FunctionName": {
    description: "What the function does.",
    input: ["(type) param — description"],
    output: "(type) — description"
}
```
Then add the function name to the relevant category in `js/liste-fonctions.js`.

### Add a new example
1. Open `js/examples.js` and add a new entry to the `exemples` object
2. Add the example key to the `listeExemples` array in `js/examples-list.js`
3. Place any screenshot in `assets/` and any downloadable file in `assets/downloads/`

### Add a FAQ block on the homepage
Open `js/WikiSonifcell_bloc.js` and call `creerBlocRouge()` or `creerBlocVert()`:
```javascript
let monBloc = creerBlocRouge("Your question", "Your answer");
colonneRouge.appendChild(monBloc);
```

### Add a tip to the guide
Open `js/guide.js` and call `creerAstuce()`:
```javascript
let astuce = creerAstuce("Tip title", "Tip description", "optional-image.png");
container.appendChild(astuce);
```

