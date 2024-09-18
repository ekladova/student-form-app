import React from "react";
import studentImg from "../../Utilities/images/studentIcon.svg";
import tickTrue from "../../Utilities/images/tick_TRUE.svg";
import tickFalse from "../../Utilities/images/tick_FALSE.svg";
import tooltip from "../../Utilities/images/tooltip.svg";
import "./style.scss";
import { Link } from "react-router-dom";

const ListItem = ({ name, surname, form, id, isSEND }) => {
	function toolTipHover(e) {
		let activeHover = e.target;
		if (activeHover.parentElement.nextSibling.className.includes("hidden")) {
			activeHover.parentElement.nextSibling.className = "student_id_info";
		}
	}
	function toolTipLeave(e) {
		let activeHover = e.target;
		activeHover.parentElement.nextSibling.className = "student_id_info hidden";
	}

	return (
		<>
			<tr key={id} className="student_wrapper">
				<td className="student_info">
					<img src={studentImg} className="student_image"></img>
					<Link to={`/student/${id}`}>
						<span className="student_name">
							{name}
							<span className="student_id">
								<img onMouseLeave={toolTipLeave} onMouseEnter={toolTipHover} src={tooltip} className="student_id_tooltip"></img>
							</span>
							<span className="student_id_info hidden">ID: {id}</span>
						</span>
					</Link>
				</td>

				<td className="student_form">
					<span className="student_form_data">{form}</span>
				</td>

				<td className="student_SEND">
					<img src={isSEND ? tickTrue : tickFalse} />
				</td>
			</tr>
		</>
	);
};

export default ListItem;
