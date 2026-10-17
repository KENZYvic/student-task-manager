# Student Task Manager

A simple web app that helps students keep track of their schoolwork. 
JavaScript assignment (MetroBlue Tech Systems Ltd).

## Features

- Add a task
- Mark a task as done (the text gets crossed out). Click again to undo.
- Delete a task
- See total, completed and pending task counts
- Message shown when there are no tasks
- Works on laptops and phones

## JavaScript concepts used

| `addEventListener()` | `main.js` (form and task list) |
| Event object / `event.target` | `main.js` click handler |
| `event.preventDefault()` | `main.js` form submit |
| Event delegation | One click listener on `#task-list` |
| Template literals | `render()` in `main.js` |
| Destructuring | `render()` in `main.js` |
| Spread operator | `addTask()` and `toggleTask()` in `tasks.js` |
| Rest parameters | `addUp(...numbers)` in `tasks.js` |
| ES Modules | `tasks.js` exports, `main.js` imports |

## How to run

ES Modules do not work if you just double-click index.html. Use a small local server instead:

- *VS Code:* install the "Live Server" extension, right-click index.html, then choose "Open with Live Server".
- *Or in the terminal*, inside the project folder: python -m http.server 8000, then open http://localhost:8000
    
## Files

 `index.html` - page structure
 `style.css` - colours, layout and mobile styling
 `main.js` - events and updating the page
 `tasks.js` - reusable task functions
