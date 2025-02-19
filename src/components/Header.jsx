import LogoImg from '../assets/logoplaceholder.png'
import './header.css'

export function Header () {
	return (
		<nav id='header'>
			<img src={LogoImg} alt="" id='logoimg' />
			<h1 id='title'>E-commerce CD</h1>
		</nav>
	)
}
