# Save Chat

## Problem

A variety of browser extensions make it easy to download online AI chats as Markdown files. Markdown, however, is not the preferred file format for many, perhaps most, users chatting with AI bots &ndash; as is evidenced by the "Add file-conversion feature" action items on the roadmaps of existing extensions.

## Project goal

**Save Chat** aims to develop a Bookmarklet to download Perplexity AI [[^]](https://www.perplexity.ai/) chats in pretty much _any_ file format the user might want.

## Project strategy

Extend the range of available file type options by supporting the Bookmarklet with a server running the **Pandoc** universal document converter, which reliably handles the wide variety of file types listed on its Home page. [[^]](https://pandoc.org/).

## Project File structure

At this point, the project's root directory contains:

- an `index.html` file containing the `<main>` element of the Perplexity DOM,
- an `app.js` file (to access `index.html`) for testing purposes,
- an `app-modules/` folder containing the modules used by `app.js`,
- a `docs/` folder containing the project's documentation,
- an `html/` folder containing the outer html of the Perplexity DOM, and
- a server (`server.js` ) along with its associated `package.json` file, for testing purposes.

## Perplexity DOM Analysis

This repo provides a copy of the outerHTML of the Perplexity DOM for analysis and testing purposes. The _Thread_ in this copy contains Q/A Pairs for two questions: "What day is it today" and "How many days are left in 2024".

The files in the `html/` directory analyze the Perplexity DOM into increasingly more specific code blocks. These code blocks are listed in the [HTML index](#html-index) below. The `html/` directory is organized in two main sections:

### Section 1. Overview

The `html/overview/` directory contains subfolders holding the DOM's `<head>` as well as elements in the `<body>`. Subfolders and their files are named alphabetically to indicate increasing levels of specificity and/or sequence within the DOM structure.

### Section 2. Key elements

The `html/key-elements/` directory (TODO) provides a more detailed analysis of the "Q/A pair" section in the active conversation thread that gets downloaded.

## Indexes

### Docs index

- Action Plan [[>]](./docs/action-plan.md)

### HTML index

- [head.html](./html/overview/_head/head.html)
- [body.html](./html/overview/a_body/a_body.html)
- [body-main.html](./html/overview/a_body/b_body-main.html)
- [body-scripts.html](./html/overview/a_body/c_body-scripts.html)
- [body-last-children.html](./html/overview/a_body/d_body-last-children.html)
- [convo-container.html](./html/overview/b_conversation-container/cc1-convo-container.html)
- [thread-container.html](./html/overview/b_conversation-container/cc2_thread-container.html)
- [qa-pair.html](./html/overview/c_question_answer-pair/qa1-pair.html)

## Links

- Perplexity AI [[^]](https://www.perplexity.ai/)
- Pandoc [[^]](https://pandoc.org/)
