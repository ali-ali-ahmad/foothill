
function Button({ buttonValue, className }) {

    return (
        <input
            type="submit"
            value={buttonValue}
            className={className}
        />
    );
}

export default Button;
