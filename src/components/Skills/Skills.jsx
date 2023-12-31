import { Tooltip } from 'react-tooltip'
import data from '../../assets/data.json'
import './Skills.css';
const Skills = () => {
	return (
		<div className="skills">
			<div className="skills-wrap">
				<h1>Skills</h1>
				<div className="skills-categories">
					<h3>Computer Programing</h3>
					<div className="skills-list">
						{data?.skills?.['computer-programming']?.map((skill, index) => (
							<div className="skill" key={index} data-tooltip-id={skill.name} data-tooltip-content={skill.name}>
								<img src={skill.icon} alt={skill.name}/>
								<Tooltip id={skill.name} className="custom-tooltip"/>
							</div>
						))}
					</div>
					<div className="skills-list">
						{data?.skills?.['computer-programming-other']?.map((skill, index) => (
							<div className="skill" key={index} data-tooltip-id={skill.name} data-tooltip-content={skill.name}>
								<img src={skill.icon} alt={skill.name} />
								<Tooltip id={skill.name} className="custom-tooltip"/>
							</div>
						))}
					</div>
				</div>
				<div className="skills-categories">
					<h3>Video Editing and Illustration</h3>
					<div className="skills-list">
						{data?.skills?.['video-editing-illustration']?.map((skill, index) => (
							<div className="skill" key={index} data-tooltip-id={skill.name} data-tooltip-content={skill.name}>
								<img src={skill.icon} alt={skill.name} />
								<Tooltip id={skill.name} className="custom-tooltip"/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
