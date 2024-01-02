import { memo } from "react"
import '../static/css/project-card.css'
import Button from "./Button";
import images from "../utils/images";



function ProjectCard({image_path, title, description, visit_link, github_link}) {

    return (
        <article className="project-card">
            <div className="project-top">
                <div className="project-head">
                    <img className="project-image" src={image_path}></img>
                    <p className="project-title">{title}</p>
                </div>
                <p className="project-description">{description}</p>
            </div>
            <div className="project-buttons">
                {visit_link !== null && <Button text="See" image_path={images.share_png} />}
                {github_link !== null && <Button text="Code" image_path={images.git_png} />}
            </div>
        </article>
    )
}

export default memo(ProjectCard);