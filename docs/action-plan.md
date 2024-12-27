# Action Plan: Perplexity Chat Downloader

## DOM Analysis Phase

The **Analysis Phase** is broken down into three steps:

- **Step 1** focuses on the Perplexity DOM as a whole in order to identify the **Chat** element to be extracted and generate named constants for the selector paths.
- **Step 2** analyzes the **Chat** element identified in **Step 1** in detail by generating css selectors for increasingly complex **Chats**. These css files can be viewed in the `chatCss/` directory.
- **Step 3** generates named constants containing the selector path for each of the **Chat** components.

Here's a checklist to track progress through the first **Analysis Phase** of the project:

- [x] **Step 1:** Identify the **Chat** element to extract:

  - [x] Capture HTML structure of the Perplexity DOM
  - [x] Break down the HTML into logical sections
  - [x] Generate named constants containing top-level selector paths
  - [x] Generate named constant containing the path to the **Chat** selector

- [ ] **Step 2:** Analyze the **Chat** element:

  - [x] Icons and 'Related questions' section [[->]](../chatCss/c1_base-icons-relatedQuestions.css)

- [ ] **Step 3:** Generate named constants for **Chat** components:
  - [ ] icons
  - [ ] Related questions
  - [ ]
  - [ ]
  - [ ]
  - [ ]
  - [ ]
  - [ ]
  - [ ]

## Development Phase

- [ ] Create bookmarklet scaffold
  - [ ] Basic JavaScript function wrapper
  - [ ] Error handling structure
  - [ ] Console logging for development
- [ ] Implement thread content extraction
  - [ ] Select main conversation container
  - [ ] Extract Q&A pairs
  - [ ] Parse html/formatting
  - [ ] Handle code blocks
- [ ] Add download functionality
  - [ ] Format content for download
  - [ ] Generate filename with timestamp
  - [ ] Create download trigger
  - [ ] Handle different browsers

## Testing Phase

- [ ] Test on different thread types
  - [ ] Single Q&A threads
  - [ ] Multi-turn conversations
  - [ ] Threads with code blocks
  - [ ] Threads with images/links
- [ ] Cross-browser testing
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

## Documentation Phase

- [ ] Write installation instructions
- [ ] Add usage documentation
- [ ] Document known limitations
- [ ] Create troubleshooting guide

### Distribution Phase

- [ ] Minify bookmarklet code
- [ ] Create installation page
- [ ] Write announcement post
- [ ] Gather initial feedback
