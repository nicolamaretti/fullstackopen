const Form = ({
	handleAddButtonClicked,
	newName,
	handleChangeName,
	newNumber,
	handleChangeNumber,
}) => {
	return (
		<form onSubmit={handleAddButtonClicked}>
			<div>
				name:{" "}
				<input
					value={newName}
					onChange={handleChangeName}
				/>
			</div>
			<div>
				number:{" "}
				<input
					value={newNumber}
					onChange={handleChangeNumber}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default Form;
