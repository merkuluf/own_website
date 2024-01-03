import { memo } from "react"
import '../static/css/project-card.css'
import Button from "./Button";
import images from "../utils/images";

import useRedirect from '../hooks/useRedirect'


function ProjectCard({image_path, title, description, visit_link, github_link}) {

    const redirect = useRedirect()

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
                {visit_link !== null && <Button onClick={() => redirect(visit_link)} text="See" image_path={images.eye_png} />}
                {github_link !== null && <Button onClick={() => redirect(github_link)} text="Code" image_path={images.git_png} />}
            </div>
        </article>
    )
}

export default memo(ProjectCard);