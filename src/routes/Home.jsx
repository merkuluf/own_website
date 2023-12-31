import React from 'react'

import Button from '../components/Button'

import '../static/css/home.css'

import js_png from '../static/images/js.png'
import python_png from '../static/images/python.png'
import go_png from '../static/images/go.png'
import my_photo_png from '../static/images/my_photo.png'



function Home() {
	return (
		<main className='grid-item'>
			<Hero />
			<Stack />
		</main>
	)
}

export default Home



// HERO BLOCK
function Hero() {
	return (
		<div className='hero'>
			<h1 className='title'>MAKSIM MERKULOV</h1>
			<h4 className='sub-title'>FULL STACK DEVELOPER</h4>
			<div className='buttons'>
				<Button text='JavaScript' image_path={js_png} />
				<Button text='Python' image_path={python_png} />
				<Button text='Golang' image_path={go_png} />
			</div>
		</div>
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
		<div className='stack'>
			<div className='stack-main'>
				<img className='photo' src={my_photo_png}></img>
				<div className='text-bar'>
					<p className='title'>Stack</p>
					<StackList stack_item={stack_info} />
				</div>
			</div>
			<p>Programming since 2022</p>
		</div>
	)
}

function StackList({ stack_item }) {
	return stack_item.map((item, index) => {
		return (
			<div  key={index} className='stack-item'>
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



// PROJECTS BLOCK
function Projects() {
	return (
		<div className='projects'>
			projects
		</div>
	)
}



