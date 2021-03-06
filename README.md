# Typing Test

### [Project Proposal](https://github.com/CIS3296SoftwareDesignF21/feedback-on-proposals-section-001-m-w-11-am/issues/14)
### [Change Log](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/blob/main/CHANGELOG.md)
### [Trello Board](https://trello.com/b/ZA8xvBef/typing-test)
### [Week 1 Trello](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/tree/main/Progress/Week1.md)
### [Week 2 Trello](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/tree/main/Progress/Week2.md)
### [Week 3 Trello](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/tree/main/Progress/Week3.md)
### [Week 4 Trello](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/tree/main/Progress/Week4.md)

## Project Description

The goal of the Typing Test project is to test the user and challenge their typing skills. 
The team will be making a typing application, which will give the user a trial containing a set of words they must type out.
If the user types in the wrong word prompt, the program will not allow the user to progress until the user has correctly typed the given word.
The program will also keep track of all the errors made by the user, and present stats of how well they did at the end of the test.

We are also looking at the option of a different mode, which displays the speed in which a user can type out a set of words.
In this mode, errors made by the user wont force them to finish the word, instead, they will move on try to complete the test as fast as they can.
At the end of the speed mode, the program will present stats on the users WPM(Words per minute) and error percentage.
If we get far enough, we are hoping to display stats and records accross other players as well,
potentially having users enter their initials to display in a leaderboard.

Our vision for this project is to achieve a feature-rich program with an elegant user interface. 
Because this project is a typing test, the team arranged what we thought were the best aspects from other online typing tests into the ultimate typing test program.
By using React, we will make use of modern web UX design principles and deploy it as a desktop application with the help of [Electron.](https://www.electronjs.org)
To manage the database, we plan to take advantage of AWS AmazonRDS to host MySQL.

## Why Use?

For any user who would like to improve their typing skills. (Typing Test) is a typing simulator that allows users to learn pratical typing skills, improve their words per minute, and gain good typing habits, all while having fun. Unlike TypeRacer, our product achieves a feature-rich program with an elegant user interface that is utilized as an executable desktop application. 

## Client Install

- [Download Latest Release](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/releases/download/v0.3.0-pre-release/typing-test-win32-x64.zip)
- Extract .zip file 
- Run typing-test.exe

## Developer Install

- Install Node JS 16.13.0 LTS ([External Site](https://nodejs.org/en/))
- Download Dependencies ([More Details](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/network/dependencies))
```
npm install -g electron
npm install electron-squirrel-startup --save
npm install react react-dom --save
npm install react-scripts --save
npm install -g node@10.9.0
npm install react-spring
npm install mysql
npm install web-vitals
npm install styled-components
npm install react-icons
npm install material-design-icons
npm i -D electron-devtools-installer && npm i -D concurrently@5.2.0 wait-on@5.1.0 && npm i electron-is-dev@1.2.0
npm i postman-request
npm install random-words
npm install --save request-promise
npm install react-loader-spinner --save
```
- Clone Repo
```
git clone https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest
```
## Open & Run 
- Recommemded IDE: [Visual Studio Code](https://code.visualstudio.com/download)
### Open Source Code
- Navigate to Cloned Repository Direcctory
- Utilize VS Code 
```
cd prj-01-typingtest/typing-test
code .
```
### Run
-Run .bat file to connect to server and open electron app
```
cd prj-01-typingtest/typing-test
./Open.bat
```

## [UML](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/blob/Revise-ReadMe/UML/UML.md)

## [User Personas](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/blob/Revise-ReadMe/UserPersonas/UserPersonas.md)



## Releases
- [0.1.0-pre-release](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/releases/download/v0.1.0/typing-test-win32-x64.rar)

- [0.2.0-pre-release](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/releases/download/v0.2.0-pre-release/typing-test-win32-x64.zip)

- [0.3.0-pre-release](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/releases/download/v0.3.0-pre-release/typing-test-win32-x64.zip)

- [1.0.0-release](https://github.com/CIS3296SoftwareDesignF21/prj-01-typingtest/releases/tag/v1.0.0)

