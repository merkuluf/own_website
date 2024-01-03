import React from 'react'

import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'

import '../static/css/home.css'
import images from '../utils/images'

import projects_content from '../utils/projects_content'
import stack_info from '../utils/stack_info'


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
				<Button text='JavaScript' image_path={images.js_png} />
				<Button text='Python' image_path={images.python_png} />
				<Button text='Golang' image_path={images.go_png} />
			</div>
		</section>
	)
}



// STACK BLOCK

function Stack() {
	return (
		<section className='stack grid-item'>
			<div className='stack-main'>
				<img className='photo' src={images.my_photo_png}></img>
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


// PROJECTS BLOCK
function Projects() {
	return (
		<section className='projects grid-item-whole'>
			<p className='title'>My Projects</p>
			<div className='scrollable'>
				<div className='blank'></div>
				{projects_content.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						image_path={project.image_path}
						visit_link={project.visit_link}
						github_link={project.github_link}
					/>
				))}
				<div className='blank'></div>
			</div>
		</section>
	)
}



