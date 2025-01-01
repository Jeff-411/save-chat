# Save Chat

## Problem

A variety of browser extensions make it easy to download online AI chats as Markdown files. The Markdown file-type, however, is not the preferred file format for many, perhaps most, chatbot users.

## Project goal

**Save Chat** aims to develop a Bookmarklet to download Perplexity AI [[^]](https://www.perplexity.ai/) chats in pretty much _any_ file format the user might want.

## Strategy

Extend the range of available file-type options by supporting the Bookmarklet with a server running the **Pandoc** universal document converter, a utility which reliably handles the _very_ wide range of file-types listed on its Home page. [[^]](https://pandoc.org/).

## Structure

The project's root files and directories can be found in the **Project Structure** file [here](./docs/project-structure.md).

## Project status

As indicated in the **Project Development Action Plan** [here](./docs/project-action-plan.md) the project is now on **Step 2** of the **DOM Analysis Phase** which focuses on generating css selectors for increasingly complex **Chat** structures.

### Analysis Phase Workflow

Use the `analyse.html` and `analyse.css` files in the root directory to analyse the Perplexity DOM:

1. Open `analyse.html` with Live Server
2. Paste the content of the file to be analysed into `analyse.html`
3. Open `analyse.css` to begin analysing its DOM
4. Save the result to a new file for use in generating named constants for the css selectors during the final phase of the DOM analysis.

## Usage

After running `npm install` to load the project dependencies:

1. Start the server with `npm run dev appServer.js` or `npx nodemon appServer.js`,
2. Open `http://localhost:3000` in your browser, and
3. Open the **DevTools Console** (ctrl + shift + J) to view your logs and interact with the app.

## Links

- Perplexity AI [[^]](https://www.perplexity.ai/)
- Pandoc [[^]](https://pandoc.org/)
