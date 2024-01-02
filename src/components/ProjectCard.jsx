import { memo } from "react"
import '../static/css/project-card.css'


function ProjectCard({image_path, title, description}) {
    return (
        <article className="project-card">
            <div className="project-head">
                <img src={image_path}></img>
                <p className="project-title">{title}</p>
            </div>
            <p className="project-desctiption">{description}</p>
        </article>
    )
}

export default memo(ProjectCard);