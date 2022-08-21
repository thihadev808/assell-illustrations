import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "gallery",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: "gallery",
		"fields.slug": params.slug,
	});

	return {
		props: {
			illustration: items[0],
		},
	};
}

export default function IllustrationDetails({ illustration }) {
	const { featuredImage, title, time, tools, content } = illustration.fields;

	return (
		<div className='details'>
			<div className='detailsImage'>
				<Image
					src={`https:${featuredImage.fields.file.url}`}
					width={featuredImage.fields.file.details.image.width}
					height={featuredImage.fields.file.details.image.height}
				/>
			</div>
			<div className='detailsData'>
				<h2 className='title'>{title}</h2>
				<p className='time'>Drawing Time : {time} hours</p>
				<div className='tools'>
					<h3>Used Tools</h3>
					<ul>
						{tools.map((tool, index) => (
							<li key={index}>{tool}</li>
						))}
					</ul>
				</div>
				<div className='content'>
					<h3>About Illustration</h3>
					<div>{documentToReactComponents(content)}</div>
				</div>
				<div className='goback'>
					<Link href={`/`}>
						<a href=''>go back</a>
					</Link>
				</div>
			</div>

			<style jsx>{`
				.details {
					margin-top: 100px;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-gap: 30px 60px;
					@media only screen and (max-width: 749px) {
						grid-template-columns: 1fr;
					}
					.detailsImage {
					}
					.detailsData {
						.title {
							font-size: 40px;
						}
						.time {
							font-size: 32px;
						}
						.tools {
							margin-top: 30px;
							h3 {
								font-size: 32px;
							}
							ul {
								li {
									padding: 0;
									list-style-position: inside;
									font-size: 22px;
								}
							}
						}
						.content {
							margin-top: 30px;
							h3 {
								font-size: 32px;
							}
						}
						.goback {
							margin-top: 30px;
							a {
								color: #fff;
								transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
								&:hover {
									opacity: 0.7;
								}
							}
						}
					}
				}
			`}</style>
		</div>
	);
}
