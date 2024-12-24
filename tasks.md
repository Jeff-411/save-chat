I'm working on the last item of the Analysis Phase in the [Action Plan](./docs/action-plan.md) and have identified some top level UI constants (see: `app.js`) that will be used in the Development Phase. Before proceeding any further I want to:

- begin scaffolding the project structure by:
  - creating a `modules/` folder in the project's root directory, and
  - adding files and folders to it as required.
- move the UI constants in `app.js` into the `modules/` folder so they can be accessed during the Development Phase,
- generate a module to:
  - verify the UI constants by checking if the first class in their `classList` matches the expected 1st class (as defined by the `// Expected 1st class:` comments in `app.js`), and
  - log the results
- call the verification module from `app.js`
