# Selector Paths Table

| Structure                      | Selector Path                                                |
| ------------------------------ | ------------------------------------------------------------ |
| THREAD_OUTER_CONTAINER         | `.pb-\[144px\]`                                              |
| THREAD_PARENT                  | `${THREAD_OUTER_CONTAINER} > .relative`                      |
| THREAD                         | `${THREAD_PARENT} > div`                                     |
| QA_PAIR                        | `${THREAD} > .pb-lg`                                         |
| QA_PAIR_CHAT                   | `${QA_PAIR} > div> .col-span-8`                              |
| QA_PAIR_CHAT_Q                 | `${QA_PAIR_CHAT} > .my-md`                                   |
| Q_QUESTION                     | `${QA_PAIR_CHAT} .group\/query`                              |
| Q_QUESTION_THREAD_TITLE        | `${QA_PAIR_CHAT} h1.group\/query`                            |
| Q_QUESTION_ICON_CONTAINER      | `${Q_QUESTION} + div`                                        |
| QA_PAIR_CHAT_A                 | `${QA_PAIR_CHAT} > :not(.my-md):not([class=''])`             |
| A_SOURCES                      | `${QA_PAIR_CHAT_A} > .mb-lg`                                 |
| A_ANSWER                       | `${QA_PAIR_CHAT_A} > :not(.mb-lg)`                           |
| A_ANSWER_HEADER                | `${A_ANSWER} > .flex [color="super"]`                        |
| A_ANSWER_HEADER_ICON_CONTAINER | `${A_ANSWER_HEADER} > :first-child`                          |
| A_ANSWER_HEADER_TITLE          | `${A_ANSWER_HEADER} > :last-child`                           |
| A_ANSWER_CONTENT               | `${QA_PAIR_CHAT_A} > div > .mb-md`                           |
| A_ANSWER_ICONS_CONTAINER       | `${QA_PAIR_CHAT_A} .mt-sm.flex.items-center.justify-between` |
| QA_PAIR_OPTIONS                | `${QA_PAIR} > div> .col-span-4`                              |
| ASK_FOLLOW_UP                  | `${THREAD} > .pointer-events-none`                           |
