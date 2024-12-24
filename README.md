# Save Chat

## Problem

A variety of browser extensions make it easy to download online AI chats as Markdown files. Markdown, however, is not the preferred file format for many, perhaps most, users chatting with AI bots &ndash; as is evidenced by the "Add file-conversion feature" action items on the roadmaps of existing extensions.

## Project goal

**Save Chat** aims to develop a Bookmarklet to download Perplexity AI [[^]](https://www.perplexity.ai/) chats in pretty much _any_ file format the user might want.

## Project strategy

Extend the range of available file type options by supporting the Bookmarklet with a server running the **Pandoc** universal document converter, which reliably handles the wide variety of file types listed on its Home page. [[^]](https://pandoc.org/).

## Project structure

- `index.html` contains the `<main>` element in the Perplexity DOM and links to `app.js` with `<script src="/app.js" type="module"></script>`.
- `app.js` is the entry point for Bookmarklet development.
- `appSever.js` creates a local development server at `http://localhost:3000`.
- The `docs/` directory contains files and folders to document and support the development process.

## Project status

You can view the project action plan and current status [here](./docs/action-plan.md).

## Usage

After installing the project dependencies:

- Start the server with `npm run dev appServer.js` or `npx nodemon appServer.js`,
- Open `http://localhost:3000` in your browser, and
- Open the DevTools Console (ctrl + shift + J) to view your logs and interact with the app.

## Links

- Perplexity AI [[^]](https://www.perplexity.ai/)
- Pandoc [[^]](https://pandoc.org/)
