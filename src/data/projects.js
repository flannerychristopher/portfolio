import {HEROKU, GITHUB } from '../constants/constants';

const projects = [
  {
    title: 'BLLTN',
    description: 'A social media application that combines groups with one of the latest trend in social media; shared information that expires after a day. I was inspired to create this by my experience checking my email after a few days off from work. More than half the emails were time-sensitive. It’s nothing revolutionary, but combines some popular features of major social networking apps.',
    repo: 'https://github.com/flanthedev/blltn',
    hosting: {
      host: GITHUB,
      url: 'https://github.com/flanthedev/blltn'
    }
  },
  {
    title: 'Connect Four',
    description: 'This game is written in JavaScript and tested in Jasmine. I am most proud of the method to check for a win or draw in this game. Connect Four is a complex game with millions of possible board combinations. Each time a player completes a turn, the program calculates all the possible winning scenarios that the turn could compete, then checks if the player holds those coordinates.',
    repo: 'I am most proud of the method to check for a win or draw in this game. Connect Four is a complex game with millions of possible board combinations. Each time a player completes a turn, the program calculates all the possible winning scenarios that the turn could compete, then checks if the player holds those coordinates.',
    hosting: {
      host: GITHUB,
      url: 'https://flanthedev.github.io/connect_four/'
    }
  },
  {
    title: 'Game of Thrones website',
    description: 'In anticipation of the final season of Game of Thrones, I created this site to demonstrate responsive web design with media queries, Flex Box, and SASS styling partials and variables.',
    repo: 'https://github.com/flanthedev/gameofthrones',
    hosting: {
      host: GITHUB,
      url: 'https://flanthedev.github.io/gameofthrones/'
    }
  },
  {
    title: 'YouTube Pomdoro Clock',
    description: 'I regularly use a the Pomodoro Technique and decided to combine two popular React projects, creating a timer and and accessing the YouTube API, to create a Pomodoro timer. Set the period of time, search for an artist, and the returned playlist will loop as long as the timer runs.',
    repo: 'https://github.com/flanthedev/youtube_pomodoro',
    hosting: {
      host: HEROKU,
      url: 'http://youtube-pomodoro.herokuapp.com/'
    }
  }
]

export default projects;