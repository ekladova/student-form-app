import React from "react";
import "./style.scss";
import search from "../../Utilities/images/search.svg";

const Input = ({ onChange }) => {
	return (
		<>
			<input onChange={onChange} id="searchInput" className="search_input" placeholder="search for any pupil by name or form"></input>
			<img className="search_icon" src={search} />
		</>
	);
};

export default Input;
