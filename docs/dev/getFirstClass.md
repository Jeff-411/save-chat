Jeff-411: js: get the first class in an element's classList

GitHub Copilot: Let's break this down:

1. Need a function to access an element's classList property
2. Return the first item (index 0) if it exists
3. Handle cases where classList is empty

Here's the code:

```javascript
function getFirstClass(element) {
  if (element && element.classList && element.classList.length > 0) {
    return element.classList[0]
  }
  return null
}

// Example usage:
const element = document.querySelector('.my-class')
const firstClass = getFirstClass(element)
```

Alternative using Array.from():

```javascript
function getFirstClass(element) {
  return Array.from(element?.classList || [])[0] || null
}
```

Both versions:

- Handle null/undefined elements
- Return null if no classes exist
- Access the first class name if present
