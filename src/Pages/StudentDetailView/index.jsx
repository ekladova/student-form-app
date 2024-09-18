import React from "react";
import { Link, useParams } from "react-router-dom";
import studentData from "../../Utilities/studentData.json";
import image from "../../Utilities/images/studentIcon.svg";
import tickTrue from "../../Utilities/images/tick_TRUE.svg";
import tickFalse from "../../Utilities/images/tick_FALSE.svg";
import backButton from "../../Utilities/images/back.svg";
import "./style.scss";

const StudentDetailView = () => {
	const { id } = useParams();
	const student = studentData.find((student) => student.id === id);

	if (!student) {
		return <div>Student not found</div>;
	}
	return (
		<>
			<div className="detail-view_wrapper">
				<div className="back-button_wrapper">
					<Link to={`/`}>
						<button>
							<img src={backButton} alt="back" />
						</button>
					</Link>
				</div>
				<div className="detail-view">
					<div className="student-image">
						<img src={image} alt="student image" />
					</div>
					<div className="student-info">
						<h1 className="student-info_name">
							{student.forename} {student.surname}
						</h1>
						<h5 className="student-info_id">ID: {student.id}</h5>
						<div className="student-info_form">Form: {student.form}</div>
						<div className="student-info_isSEND">SEND: {student.isSEND ? <img src={tickTrue} /> : <img src={tickFalse} />}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentDetailView;
