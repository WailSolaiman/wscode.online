function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='container'>
				<p>© {currentYear} WS Code-Online — wscode.online</p>
			</div>
		</footer>
	)
}

export default Footer
