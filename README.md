# StealthEngine
A Chrome extension to cheat on online tests, quizzes, exams etc.
Those are very new versions, so issues may happen with their reliability.

# Reliablility
Those cheats are extremely reliable. Some websites update their APIs and protection measures very often and we take action almost daily to re-counter those.

# Main features
This extension can overall do:
  - Do not allow a page to see if you are focusing on it's tab or not
  - Freeze any kinds of timers (note: some of those are serverside and we can't do anything about that).
  - Allow other cheats to work without them having to have any kind of hiding methods.
  - Implement self-defense measures to prevent platform code modifying native functions.
  
# Is this detectable?
All of the code made here is designed to be very stealthy, making the page finding you're using cheats near impossible.
Not only this code is near damn impossible to detect, any other lesson cheating script you're running with it should work.

# In practice
The extension was put into a lot of tests. Each technology of preventing cheating is tested and determined if it works and is it detected, as well as the examination date.
A result of "working" is assumed as fully allowing you to either exit the tab, auto answer, show answers, freeze the time etc.
A result of "suboptimal" is assumed as partially working.
| Anti-cheat measure / limiters      |      Result      |  Detected  |     Date     |
|------------------------------------|:----------------:|:----------:|:------------:|
| Testportal "Honest respondent"     |     Working      |     No     |  24-11-2020  |       
| Testportal timer for each question |     Working      |     No     |  24-11-2020  |
| Testportal timer for entire test   |  Suboptimal[[1](#testportal-notices)]   |     No     |  24-11-2020  |
| Quizizz auto-answer bot            |   Not working[[2](#quizizz-notices)]    |    N/A     |  24-11-2020  |
| Brainly bypass daily homeworks     |     Working      |     No     |  24-11-2020  |
| Kahoot auto-answer bot             |   Nonexistent    |    N/A     |  24-11-2020  |
| Microsoft Forms tests helper       |   Nonexistent    |    N/A     |  24-11-2020  |

# Testportal notices
[1] The result was taken as partially working due to the timer freeze actually being reliable on the last question. However, it works just fine on timers set for each question (NOT when the timer is set for the whole test).

# Quizizz notices
[2] The bot doesn't work due to recent API changes.

# Important Note
All source files are kept private and are distributed only in a heavy-obfuscated form to make it harder for online exam/test/quiz platform developers to reverse engineer the working of the inner guts. All source scripts in their original form will never be distributed, even to people we can trust in. This very effectively makes it near impossible for those platform developers to get hands on our source code.

# Suggestions and ideas
If you have any suggestions or an idea, please create a pull request for that or forward it by creating an issue!
