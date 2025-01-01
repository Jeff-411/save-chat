# Action Plan: Perplexity Thread Downloader

## DOM Analysis Phase

The **Analysis Phase** is broken down into three steps:

- **Step 1** focuses on the Perplexity DOM as a whole in order to identify the **Thread** element to be extracted and save its path as a named constant.
- **Step 2** analyses the **Thread** element identified in **Step 1** in detail by generating css selectors for increasingly complex **Threads**.
- **Step 3** generates named constants containing the selector path for each of the **Thread** components.

Here's a checklist to track progress through the first **Analysis Phase** of the project:

- [x] **Step 1:** Identify the **Thread** element to extract:

  - [x] Capture HTML structure of the Perplexity DOM
  - [x] Break down the HTML into logical sections
  - [x] Generate named constants containing top-level selector paths
  - [x] Generate named constant containing the path to the **Thread** selector

- [ ] **Step 2:** Analyse the **Thread** element.

- [ ] **Step 3:** Generate named constants for **Thread** components.

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
