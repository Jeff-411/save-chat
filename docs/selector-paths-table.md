# Selector Paths Table

| Structure                                                                                              | Selector Path                                                  |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| THREAD                                                                                                 | `main .isolate:nth-of-type(2) .pb-\[144px\] > .relative > div` |
| &nbsp;&nbsp;QA_PAIR                                                                                    | `${THREAD} > .pb-lg`                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;QA_PAIR_CHAT                                                                   | `${QA_PAIR} > div> .col-span-8`                                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QA_PAIR_CHAT_Q                                                     | `${QA_PAIR_CHAT} > .my-md`                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q_QUESTION                                             | `${QA_PAIR_CHAT} .group\/query`                                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q_QUESTION_THREAD_TITLE                    | `${QA_PAIR_CHAT} h1.group\/query`                              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q_QUESTION_ICON_CONTAINER                              | `${Q_QUESTION} + div`                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QA_PAIR_CHAT_A                                                     | `${QA_PAIR_CHAT} > :not(.my-md):not([class=''])`               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_SOURCES                                              | `${QA_PAIR_CHAT_A} > .mb-lg`                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER                                               | `${QA_PAIR_CHAT_A} > :not(.mb-lg)`                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER_HEADER                            | `${A_ANSWER} > .flex [color="super"]`                          |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER_HEADER_ICON_CONTAINER | `${A_ANSWER_HEADER} > :first-child`                            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER_HEADER_TITLE          | `${A_ANSWER_HEADER} > :last-child`                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER_CONTENT                           | `${QA_PAIR_CHAT_A} > div > .mb-md`                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_ANSWER_ICONS_CONTAINER                   | `${QA_PAIR_CHAT_A} .mt-sm.flex.items-center.justify-between`   |
| &nbsp;&nbsp;&nbsp;&nbsp;QA_PAIR_SEARCH                                                                 | `${QA_PAIR} > div> .col-span-4`                                |
| &nbsp;&nbsp;ASK_FOLLOW_UP                                                                              | `${THREAD} > .pointer-events-none`                             |
