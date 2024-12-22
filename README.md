# Save Chat

## Project goal

Create a bookmarklet that will let the user download the active thread at Perplexity AI: [[^]](https://www.perplexity.ai/)

## Action Plan: Perplexity Chat Downloader

### Analysis Phase

- [ ] Capture HTML structure of Perplexity threads
- [ ] Break down HTML into logical sections
- [ ] Identify key elements containing thread content
- [ ] Create a `UI` constant for use in the Development Phase

### Development Phase

- [ ] Create bookmarklet scaffold
  - [ ] Basic JavaScript function wrapper
  - [ ] Error handling structure
  - [ ] Console logging for development
- [ ] Implement thread content extraction
  - [ ] Select main conversation container
  - [ ] Extract Q&A pairs
  - [ ] Parse markdown/formatting
  - [ ] Handle code blocks
- [ ] Add download functionality
  - [ ] Format content for download
  - [ ] Generate filename with timestamp
  - [ ] Create download trigger
  - [ ] Handle different browsers

### Testing Phase

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

### Documentation Phase

- [ ] Write installation instructions
- [ ] Add usage documentation
- [ ] Document known limitations
- [ ] Create troubleshooting guide

### Distribution Phase

- [ ] Minify bookmarklet code
- [ ] Create installation page
- [ ] Write announcement post
- [ ] Gather initial feedback
