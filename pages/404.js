import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div className='notFound'>
			<h1>404</h1>
			<h2>Ooops! That page does not exist. 😢</h2>
			<p>
				Redirecting to
				<Link href='/'>
					<a> Homepage </a>
				</Link>
				for more illustrations...
			</p>

			<style jsx>{`
				.notFound {
					height: 600px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					a {
						color: #fff;
						transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
						&:hover {
							opacity: 0.7;
						}
					}
				}
			`}</style>
		</div>
	);
}
