import { createClient } from "contentful";
import IllustrationCard from "../components/IllustrationCard";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "gallery" });

	return {
		props: {
			illustrations: res.items,
		},
	};
}

export default function Illustrations({ illustrations }) {
	return (
		<>
			<div className='top'>
				<div className='main_title'>
					<span className='block'></span>
					<h1>assell's illustrations</h1>
				</div>
			</div>
			<div className='illus-list'>
				{illustrations.map((recipe) => (
					<IllustrationCard key={recipe.sys.id} recipe={recipe} />
				))}

				<style jsx>
					{`
						.illus-list {
							display: grid;
							grid-template-columns: repeat(2, 1fr);
							grid-gap: 160px 20px;
							@media only screen and (max-width: 749px) {
								grid-gap: 30px 20px;
							}
						}
					`}
				</style>
			</div>
		</>
	);
}
