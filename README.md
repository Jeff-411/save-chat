# Save Chat

## Project goal

**Save Chat** aims to develop a bookmarklet to download Perplexity AI [[^]](https://www.perplexity.ai/) chats and save them in a **wide** variety of formats, including Markdown, Word, HTML, etc.

## Project File structure

At this point, the project's root directory contains:

- an `index.html` file containing the `<main>` element of the Perplexity DOM,
- an `app.js` file (to access `index.html`) for testing purposes,
- an `app-modules/` folder containing the modules used by `app.js`,
- a `docs/` folder containing the project's documentation,
- an `html/` folder containing the outer html of the Perplexity DOM, and
- a server (`server.js` ) along with its associated `package.json` file, for testing purposes.

## The Perplexity DOM

The files in the `html/` directory analyze the Perplexity DOM into increasingly more specific code blocks. This directory is organized in two main sections.

The `html/overview/` directory contains subfolders holding the DOM's `<head>` as well as elements in the `<body>`. Subfolders and their files are named alphabetically to indicate increasing levels of specificity and/or sequence within the DOM structure.

The `html/key-elements/` directory (TODO) provides a more detailed analysis of the Q/A pairs in the active conversation thread that gets downloaded.

**Note:** See the [HTML index](#html-index) below for a list of the files in the `html/` directory.

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
