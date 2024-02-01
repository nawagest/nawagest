import React from 'react';
import Project from './Project'
import styles from './Projects.module.css';
import blogappimg from '../../../imgs/blogapp.png';
import brainbotimg from '../../../imgs/brainbot.png';
import chastyappimg from '../../../imgs/chastyapp.png';
import chatappimg from '../../../imgs/chatapp.png';
import weatherappimg from '../../../imgs/weatherapp.png';
import amharicappimg from '../../../imgs/amharicapp.png';
import quotesreactappimg from '../../../imgs/quotesreactapp.png';
import { faCss3Alt, faDiscord, faHtml5, faNodeJs, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ isDark }) => {
    const projects = [
        {
            img: quotesreactappimg,
            name: 'Quotes App',
            description: 'This app was made using React. I\'m going to be honest here and say that it is not good at all. The main reason I did it was to practice my React skill as well as using some new hooks I\'ve learned about.',
            style: 'right',
            tags: [
                faHtml5,
                faCss3Alt,
                faReact,
            ],
            link: 'https://reactquotes.vercel.app/',
            repo: 'https://github.com/nawagest/'
        },
        {
            img: amharicappimg,
            name: 'Amharic App',
            description: 'I built this app for the purpose of teaching kids how to speak Amharic, the most pouplar language in Ethiopia, but also because I wanted to practice and enhance my CSS skills. It\'s very simple and easy to use, with options for customization. You can learn about the letters and practice words. I used HTML, CSS, and JavaScript to build this app.',
            style: 'left',
            tags: [
                faHtml5,
                faCss3Alt,
                faSquareJs,
            ],
            link: 'https://amharic-app.vercel.app/',
            repo: 'https://github.com/nawagest/amharic-app'
        },
        {
            img: blogappimg,
            name: 'Blog App',
            description: 'I originally created this app for the purpose of using MongoDB Atlas and Mongoose.js. It then turned out to be a nicely functioning blog app that I actually used to tell some of my stories. I don\'t use it much anymore but it was great practice for me to use all my skill to build such an app.',
            style: 'right',
            tags: [
                faHtml5,
                faCss3Alt,
                faSquareJs,
                faDatabase,
                faNodeJs,
            ],
            link: 'https://d2sw3f-3000.csb.app/',
            repo: 'https://github.com/nawagest/blog-app'
        },
        {
            img: brainbotimg,
            name: 'Brain Bot',
            description: 'This project was my first ever Discord bot. I one day had the idea of creating a discord bot integrating the features of ChatGPT-3 AI. Using Open AI\'s API, and Discord\'s bot API, I was able to build a functioning AI chat bot with additionally features as well!',
            style: 'left',
            tags: [
                faNodeJs,
                faBrain,
                faDiscord,
            ],
            link: 'https://xpwlns-3001.csb.app/',
            repo: 'https://github.com/nawagest/brain-bot'
        },
        {
            img: weatherappimg,
            name: 'Weather App',
            description: 'This was the first app that I made using Node.js. It uses OpenWeatherMap\'s API to fetch current weather data! It also uses JavaScript\'s built in Geolocation API so that when enabled, you can easily view the weather in your area with just a click of a button.',
            style: 'right',
            tags: [
                faHtml5,
                faCss3Alt,
                faSquareJs,
                faNodeJs,
            ],
            link: 'https://3kf3fm-3000.csb.app/',
            repo: 'https://github.com/nawagest/weather-app'
        },
        {
            img: chastyappimg,
            name: 'Chasty App',
            description: 'I created this App for the Cheesgle Byte One Hackathon. The app was supposed to be a recipe app that featured food recipes that had to specifically include cheese. To do this I made my own API for the project using MongoDB Atlas and Mongoose.js so that other people could create recipes and that can be fetched through the API and displayed on the screen. The Hackathon was hosted on Replit and I came in third place winning Replit\'s hacker plan for a month. Unfortunately the project is no longer up and working.',
            style: 'left',
            tags: [
                faHtml5,
                faCss3Alt,
                faSquareJs,
                faNodeJs,
                faDatabase,
            ],
            link: '#',
            repo: 'https://github.com/nawagest/one-byte-api'
        },
        {
            img: chatappimg,
            name: 'Chat App',
            description: 'In this app you can chat in real-time with users from all over the internet. Me, @dragonprogammer, and @techpandapro, made this using Socket.io to connect users, MongoDB Atlas and Mongoose.js to save messages, Replit Auth so that users can sign in to the chat, and reCaptcha to prevent it being attack by bots. Unfortunately it is no longer up because the service we used to host it no longer allows us to host for free 😢',
            style: 'right',
            tags: [
                faHtml5,
                faCss3Alt,
                faSquareJs,
                faDatabase,
                faNodeJs,
            ],
            link: 'https://chat.nawagest.repl.co/',
            repo: 'https://github.com/nawagest/'
        }
    ]

    return (
        <div className={styles.content}>
            {projects.map((project, i) => {
                return <Project isDark={isDark} details={project} key={i} />
            })}
        </div>
    )
}

export default Projects;