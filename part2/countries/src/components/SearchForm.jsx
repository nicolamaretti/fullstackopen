const SearchForm = ({ handleSubmit, value, handleValueChange }) => {
	return (
		<form onSubmit={handleSubmit}>
			<span>find countries</span>
			<input
				value={value}
				onChange={handleValueChange}
			/>
		</form>
	);
};

export default SearchForm;
