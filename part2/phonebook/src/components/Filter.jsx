const Filter = ({ filter, handleChangeFilter }) => {
	return (
		<input
			type="text"
			value={filter}
			onChange={handleChangeFilter}
		/>
	);
};

export default Filter;
