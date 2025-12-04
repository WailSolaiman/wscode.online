import { useState } from 'react'

function Contact({ email }) {
	const [copied, setCopied] = useState(false)

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy:', err)
		}
	}

	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<h2 className='section-title'>Contact</h2>
				<div className='contact-card'>
					<div className='contact-email'>{email}</div>
					<div className='contact-label'>
						Get in touch with us
					</div>
					<div className='contact-buttons'>
						<button onClick={copyEmail} className='btn btn-primary'>
							Copy Email
						</button>
						<a
							href={`mailto:${email}`}
							className='btn btn-secondary'>
							Open Email
						</a>
					</div>
					<div className='contact-icons'>
						<a
							href='https://klardesk.de'
							target='_blank'
							rel='noopener noreferrer'
							className='icon-link'>
							🌐 KlarDesk
						</a>
					</div>
				</div>
				{copied && <div className='toast'>Copied!</div>}
			</div>
		</section>
	)
}

export default Contact
