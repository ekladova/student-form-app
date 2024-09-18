import React, { useEffect, useState } from "react";
import studentData from "../../Utilities/studentData.json";
import { ListItem, Input } from "../../Components";
import sort from "../../Utilities/images/sort.svg";
import "./style.scss";

const StudentFormView = () => {
	const [filteredData, setFilteredData] = useState(studentData);

	const [data, setData] = useState(studentData);
	const [sortSettings, setsortSettings] = useState({
		header: "",
		direction: "ascending",
	});
	const [input, setInput] = useState("");

	const handleInput = (e) => {
		const inputField = e.target.value;
		setInput(inputField);
	};

	useEffect(() => {
		const lowerCaseInput = input.toLowerCase().trim();
		const searchResults = data.filter((student) => {
			const name = student.forename.toLowerCase();
			const surnname = student.surname.toLowerCase();
			const form = student.form.toLocaleLowerCase();
			return name.startsWith(lowerCaseInput) || surnname.startsWith(lowerCaseInput) || form.startsWith(lowerCaseInput);
		});
		setFilteredData(searchResults);
	}, [input, data]);

	const sortColumn = (e, header) => {
		e.stopPropagation();
		let sortedStudents = [...filteredData];
		let sortDirection = "ascending";

		if (sortSettings.header === header && sortSettings.direction === "ascending") {
			sortDirection = "descending";
		}

		if (header === "isSEND") {
			sortedStudents.sort((a, b) => {
				if (sortDirection === "ascending") {
					return a.isSEND === b.isSEND ? 0 : a.isSEND ? -1 : 1;
				} else {
					return a.isSEND === b.isSEND ? 0 : a.isSEND ? 1 : -1;
				}
			});
		} else if (header === "form") {
			sortedStudents.sort((a, b) => {
				if (parseInt(a[header]) < parseInt(b[header])) {
					return sortDirection === "ascending" ? -1 : 1;
				}
				if (parseInt(a[header]) > parseInt(b[header])) {
					return sortDirection === "ascending" ? 1 : -1;
				}
				return 0;
			});
		} else {
			sortedStudents.sort((a, b) => {
				if (a[header] < b[header]) {
					return sortDirection === "ascending" ? -1 : 1;
				}
				if (a[header] > b[header]) {
					return sortDirection === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}

		setFilteredData(sortedStudents);
		setsortSettings({ header, direction: sortDirection });
	};

	return (
		<>
			<div className="search_wraper">
				<Input onChange={handleInput} value={input} />
			</div>

			<table className="student-table">
				<thead>
					<tr>
						<th onClick={(e) => sortColumn(e, "surname")} className="student-table_header">
							Pupil Name <img onClick={(e) => sortColumn(e, "surname")} src={sort} />
						</th>
						<th onClick={(e) => sortColumn(e, "form")} className="student-table_header">
							Form
							<img src={sort} />
						</th>
						<th onClick={(e) => sortColumn(e, "isSEND")} className="student-table_header unsorted">
							SEND
							<img src={sort} />
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.length ? (
						filteredData.map((student) => {
							return <ListItem key={student.id} name={` ${student.surname}, ${student.forename}`} form={student.form} isSEND={student.isSEND} id={student.id} />;
						})
					) : (
						<div className="error-noResults">
							<h3>No results</h3>
						</div>
					)}
				</tbody>
			</table>
		</>
	);
};

export default StudentFormView;
