import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<header>
				<Link href='/'>
					<a>assell's</a>
				</Link>
			</header>

			<div className='page-content'>{children}</div>

			<footer>
				<p>&copy; 2022 Assell ☺</p>
			</footer>
		</div>
	);
}
