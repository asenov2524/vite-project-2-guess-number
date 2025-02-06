function Button({type, handleOnClick, children}){
	return <button type={type} onClick={handleOnClick}>{children}</button>;
}

export default Button;