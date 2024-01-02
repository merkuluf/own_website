import React from 'react'

import Button from '../components/Button'

import '../static/css/home.css'

import js_png from '../static/images/js.png'
import react_png from '../static/images/react.png'
import python_png from '../static/images/python.png'
import go_png from '../static/images/go.png'
import my_photo_png from '../static/images/my_photo.png'

import currency_bot_jpeg from '../static/images/currency_bot.jpeg'
import bitrage_bot_jpeg from '../static/images/bitrage_bot.jpeg'

import ProjectCard from '../components/ProjectCard'


function Home() {
	return (
		<main className='grid-item-whole grid'>
			<Hero />
			<Stack />
			<Projects />
		</main>
	)
}

export default Home



// HERO BLOCK
function Hero() {
	return (
		<section className='hero grid-item'>
			<h1 className='title'>MAKSIM MERKULOV</h1>
			<h4 className='sub-title'>FULL STACK DEVELOPER</h4>
			<div className='buttons'>
				<Button text='JavaScript' image_path={js_png} />
				<Button text='Python' image_path={python_png} />
				<Button text='Golang' image_path={go_png} />
			</div>
		</section>
	)
}



// STACK BLOCK
const stack_info = [
	{ title: 'Front End', stack: ['React.js', 'Redux', 'CSS3', 'HTML5', 'Figma', 'Bootsrap'] },
	{ title: 'Back End', stack: ['Flask', 'Aiogram', 'Express.js', 'TronWeb', 'Prisma ORM', 'SQLAlchemy', 'PostgreSQL', 'MongoDB', 'SQLite'] },
	{ title: 'Deployment', stack: ['NGINX', 'Gunicorn', 'UWSGI', 'Linux', 'Bash', 'GIT', 'AWS (EC2, RDS)', 'Heroku', 'Yandex.Cloud'] },
]
function Stack() {
	return (
		<section className='stack grid-item'>
			<div className='stack-main'>
				<img className='photo' src={my_photo_png}></img>
				<div className='text-bar'>
					<p className='title'>Stack</p>
					<br />
					<StackList stack_item={stack_info} />
				</div>
			</div>
		</section>
	)
}

function StackList({ stack_item }) {
	return stack_item.map((item, index) => {
		return (
			<div key={index} className='stack-item'>
				<p className='sub-title'>• {item.title}</p>
				<div className='list'>
					{item.stack.map((item, index) => {
						return <p key={index} className='stack-text'>{item}</p>
					})}
				</div>
			</div>
		)
	})
}

const projects_list = [
	{
		title: 'Cash Converter Bot',
		description: 'Telegram bot that allows you to count how much money do you have, that distributed in different currencies.',
		image_path: currency_bot_jpeg
	},
	{
		title: 'Bit Rage VPN Bot',
		description: 'Telegram bot that allows you to buy subscription to private VPN server.',
		image_path: bitrage_bot_jpeg
	},
	{
		title: 'Express/React Example',
		description: 'This project contains server and client. Showcase of fullstack application.',
		image_path: 'none'
	},
	{
		title: 'Express/PReact Chat',
		description: 'This project contains server and client. Showcase of fullstack application that uses websockets.',
		image_path: 'none'
	},
	{
		title: 'React Native Job Application',
		description: 'Showcase of React Native application. Built following YouTube tutortial.',
		image_path: 'none'
	},
	{
		title: 'This website',
		description: 'Showcase of React Native application. Built following YouTube tutortial.',
		image_path: 'none'
	},
]

// PROJECTS BLOCK
function Projects() {
	return (
		<section className='projects grid-item-whole'>
			<p className='title'>My Projects</p>
			<div className='scrollable'>
				{projects_list.map((project) => (
					<ProjectCard
						title={project.title}
						description={project.description}
						image_path={project.image_path}
					/>
				))}
			</div>
		</section>
	)
}



