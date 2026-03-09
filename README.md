# Simple Quiz Website

A simple browser-based quiz web app built with HTML, CSS, and JavaScript. Questions are loaded from an external JSON file — no backend required.

## Features

- Loads questions dynamically from a `questions.json` file
- Checkbox-based answer selection (only one answer can be selected at a time)
- Tracks score and displays result at the end
- Restart quiz without reloading the page
- Custom background image support

## Files

| File | Description |
|------|-------------|
| `index.html` | Main HTML structure |
| `style.css` | Styling and layout |
| `script.js` | Quiz logic, loads questions from JSON |
| `questions.json` | Contains all quiz questions |
| `background.jpg` | Background image for the quiz page |

## How to Run

1. Clone or download this repository
2. Open the project folder in **VS Code**
3. Install the **Live Server** extension (by Ritwick Dey)
4. Right-click `index.html` → click **"Open with Live Server"**
5. The quiz will open in your browser at `http://127.0.0.1:5500`

> **Note:** Do not open `index.html` by double-clicking it. The app uses `fetch()` to load the JSON file, which requires a local server to work.

## JSON Format

To add your own questions, edit `questions.json` following this format:

```json
{
  "questions": [
    {
      "number": 1,
      "question": "Your question here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0
    }
  ]
}
```

- `number` — question number (used for display)
- `question` — the question text
- `options` — array of answer choices
- `correct` — index of the correct answer (0 = first option, 1 = second, etc.)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
