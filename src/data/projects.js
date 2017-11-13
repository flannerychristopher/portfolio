import aws from '../images/aws.svg';
import babel from '../images/babel.svg';
import bootstrap from '../images/bootstrap.svg';
import css3 from '../images/css3.svg';
import heroku from '../images/heroku.svg';
import html from '../images/html.svg';
import jasmine from '../images/jasmine.svg';
import js from '../images/js.svg';
import jquery from '../images/jquery.svg';
import rails from '../images/rails.svg';
import react from '../images/react.svg';
import rspec from '../images/rspec.png';
import ruby from '../images/ruby.svg';
import sass from '../images/sass.svg';
import selected from '../images/selected.png';
import sinatra from '../images/sinatra.png';
import tutorial from '../images/tutorial.png';
import webpack from '../images/webpack.svg';

const projects = [
  {
    title: 'BLLTN',
    description: 'A social media application that combines groups with one of the latest trend in social media; shared information that expires after a day. I was inspired to create this by my experience checking my email after a few days off from work. More than half the emails were time-sensitive. It’s nothing revolutionary, but combines some popular features of major social networking apps.',
    repo: 'https://github.com/flanthedev/blltn',
    languages: [selected, ruby, rails, heroku, aws, bootstrap],
    hosting: 'https://blltn.herokuapp.com/'
  },
  {
    title: 'Connect Four',
    description: 'This game is written in JavaScript and tested in Jasmine. I am most proud of the method to check for a win or draw in this game. Connect Four is a complex game with millions of possible board combinations. Each time a player completes a turn, the program calculates all the possible winning scenarios that the turn could compete, then checks if the player holds those coordinates.',
    repo: 'I am most proud of the method to check for a win or draw in this game. Connect Four is a complex game with millions of possible board combinations. Each time a player completes a turn, the program calculates all the possible winning scenarios that the turn could compete, then checks if the player holds those coordinates.',
    languages: [selected, js, jasmine],
    hosting: 'https://flanthedev.github.io/connect_four/'
  },
  {
    title: 'Game of Thrones website',
    description: 'In anticipation of the final season of Game of Thrones, I created this site to demonstrate responsive web design with media queries, Flex Box, and SASS styling partials and variables.',
    repo: 'https://github.com/flanthedev/gameofthrones',
    languages: [selected, html, sass, css3],
    hosting: 'https://flanthedev.github.io/gameofthrones/'
  },
  {
    title: 'YouTube Pomodoro Clock',
    description: 'I regularly use a the Pomodoro Technique and decided to combine two popular React projects, creating a timer and and accessing the YouTube API, to create a Pomodoro timer. Set the period of time, search for an artist, and the returned playlist will loop as long as the timer runs.',
    repo: 'https://github.com/flanthedev/youtube_pomodoro',
    languages: [selected, react, babel, webpack, heroku],
    hosting: 'http://youtube-pomodoro.herokuapp.com/'
  },

  // ------- REACT APPS ---------
  {
    title: 'White Noise Machine',
    description: 'A white noise machine to help me rest after all that programming. Select a sound and the app will continually loop the audio.',
    repo: 'A white noise machine to help me rest after all that programming',
    languages: [react, babel, webpack],
    hosting: 'https://flanthedev.github.io/white_noise'

  },
  {
    title: 'A React on Rails App',
    description: 'This project is to create a simple multiple author blog with a React front end over a Rails API with RSPec testing. No gems are used to integrate react with rails. The React app is in the /client directory. The connection is through a proxy in the client/package.json and separate buildpacks.',
    repo: 'https://github.com/flanthedev/react-on-rails-app',
    languages: [react, rails, ruby, rspec, babel, webpack, heroku],
    hosting: 'https://react-on-rails-app.herokuapp.com/'
  },
  {
    title: 'Civic Information',
    description: 'This app uses the ProPublica API to find public data about US Government Represenatives',
    repo: 'https://github.com/flanthedev/civic_information',
    languages: [react, babel, webpack],
    hosting: 'https://flanthedev.github.io/civic_information/'
  },

  // ------------- JAVASCRIPT -------------
  {
    title: 'Minesweeper',
    description: 'Instead of using coordinates and nested arrays to store data, like in my Snake and Connect Four projects, I decided to use a single flat array to store data about the location of mines, clues and if a location has been clicked.',
    repo: 'https://github.com/flanthedev/minesweeper/blob/master/index.js',
    languages: [js, html],
    hosting: 'https://flanthedev.github.io/minesweeper/'
  },
  {
    title: 'Snake',
    description: 'The classic game from your Nokia and calculator in the browser!',
    repo: 'https://github.com/flanthedev/js_snake/blob/master/js/script.js',
    languages: [js, html, css3],
    hosting: 'https://flanthedev.github.io/js_snake/'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'My second project coding this game. Comparing this JS version to my Ruby version from a few months prior shows my growth.',
    repo: 'https://github.com/flanthedev/js_tictactoe/blob/master/js/script.js',
    languages: [js, html],
    hosting: 'https://flanthedev.github.io/js_tictactoe/'
  },

  // RAILS AND SINATRA -----------
  {
    title: 'Invitebrite',
    description: 'Modeled after the website of a similar name, the biggest challenge was modeling the data structure to allow for users, admins, events, and changing states of invitations.',
    repo: 'https://github.com/flanthedev/invitebrite',
    languages: [rails, ruby, bootstrap, heroku],
    hosting: 'https://invitebrite.herokuapp.com/'
  },
  {
    title: 'Hangman',
    description: 'The game is constructed in Sinatra and features some cute messages.',
    repo: 'https://hangman-in-ruby.herokuapp.com/',
    languages: [sinatra, ruby, heroku],
    hosting: 'https://github.com/flanthedev/hangman'
  },
  {
    title: 'Mini App Suite',
    description: 'Mini App Suite – using Sinatra to collect smaller Ruby and JavaScript projects.',
    repo: 'http://mini-app-suite.herokuapp.com/',
    languages: [sinatra, ruby, heroku],
    hosting: 'https://github.com/flanthedev/mini_app_suite'
  },

  // WEB DESIGN ------------
  {
    title: 'recreate the Dribbble.com home page',
    description: 'This is one of my favorite website designs and digging through the styling in order to recreate taught me a lot. I am seriously impressed by how much is accomplished with only CSS. I used JavaScript only to toggle the collapsed navigation on smaller screens.',
    repo: 'https://github.com/flanthedev/recreate-dribbble',
    languages: [css3, sass, html],
    hosting: 'https://flanthedev.github.io/recreate-dribbble/'
  },
  {
    title: 'Graphic Designer Portfolio',
    description: 'This website for graphic designer Dara Nur Rizki uses jQuery and Bootstrap to create a simple and quick single page portfolio.',
    repo: 'https://github.com/flanthedev/daranurrizki',
    languages: [css3, jquery, html, bootstrap],
    hosting: 'https://flanthedev.github.io/daranurrizki/'
  },
  {
    title: 'recreate the YouTube video page',
    description: 'This project mimics the responsive design of the popular website and was completed just before the 2017 redesign.',
    repo: 'https://github.com/flanthedev/recreate-youtube',
    languages: [css3, sass, html],
    hosting: 'https://flanthedev.github.io/recreate-youtube/'
  },
  {
    title: 'recreate the Mint.com sign-up page',
    description: 'This project is an example of responsive design to present a clean HTML form.',
    repo: 'https://github.com/flanthedev/recreate-mint',
    languages: [css3, sass, html],
    hosting: 'https://flanthedev.github.io/recreate-mint/'
  },

  // TUTORIALS ----------
  {
    title: 'The Odin Project',
    description: 'an open-source full-stack development course',
    repo: 'https://github.com/flanthedev/the_odin_project/commits/master',
    languages: [tutorial],
    hosting: ''
  },
  {
    title: 'MIT online coursework (ongoing)',
    description: 'problem sets and assignments',
    repo: 'https://github.com/flanthedev/MIT_online_problem_sets',
    languages: [tutorial],
    hosting: ''
  },
  {
    title: 'Udemy: Modern React with Redux',
    description: 'one of the top-rated courses by Stephen Grider',
    repo: 'https://github.com/flanthedev/ReduxSimpleStarterSection9',
    languages: [tutorial],
    hosting: 'https://www.udemy.com/user/flan-the-dev/'
  },
  {
    title: 'Code Academy coursework',
    description: 'completed: Ruby, Deploy a Website, SASS, jQuery, HTML & CSS, Git, JavaScript, Command Line, and more',
    repo: '',
    languages: [tutorial],
    hosting: 'https://www.codeacademy.com/chrisflan'
  },
  {
    title: 'Beginning Ruby, Peter Cooper',
    description: 'problem sets and assignments',
    repo: 'https://github.com/flanthedev/petercooper_beginningruby',
    languages: [tutorial],
    hosting: ''
  },
  {
    title: 'NodeSchool.io tutorials',
    description: 'my work from a great command-line tutorial',
    repo: 'https://github.com/flanthedev/nodeschool',
    languages: [tutorial],
    hosting: ''
  }

]
// {
//   title: '',
//   description: '',
//   repo: '',
//   languages: [],
//   hosting: ''
// },

const PROJECTS = {
  Selected: projects.filter(project => project.languages.includes(selected)),
  Ruby: projects.filter(project => project.languages.includes(ruby)),
  JavaScript: projects.filter(project => project.languages.includes(js)),
  React: projects.filter(project => project.languages.includes(react)),
  Design: projects.filter(project => project.languages.includes(css3)),
  Tutorials: projects.filter(project => project.languages.includes(tutorial))
}
export default PROJECTS;