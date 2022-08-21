import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../hooks/fadein";
import { useEffect } from "react";

export default function IllustrationCard({ recipe }) {
	const { title, slug, time, thumbnail } = recipe.fields;
	useEffect(() => {
		const fadeIn = new FadeIn();
		fadeIn.init();
	});

	return (
		<Link href={`/illustrations/${slug}`}>
			<a className='card js-fadeIn'>
				<div className='featured'>
					<Image
						src={`https:${thumbnail.fields.file.url}`}
						width={thumbnail.fields.file.details.image.width}
						height={thumbnail.fields.file.details.image.height}
					/>
				</div>
				<div className='content'>
					<div className='info'>
						<h4>{title}</h4>
						<p>Drawing Time : {time} hours</p>
					</div>
					<div className='actions'>
						<p>take a peek</p>
					</div>
				</div>

				<style jsx>{`
					.card {
						cursor: pointer;
						color: #fff;
						margin: 0 auto;
						max-width: 360px;
						position: relative;
						display: inline-block;
						&:hover {
							.featured {
								&::before {
									opacity: 1;
								}
							}
							.content {
								opacity: 1;
							}
						}
						.featured {
							position: relative;
							div {
								position: relative;
								z-index: 1;
							}
							&::before {
								content: "";
								position: absolute;
								z-index: 2;
								left: 0;
								top: 0;
								right: 0;
								bottom: 0;
								width: 100%;
								height: calc(100% - 6px);
								background: rgba(#000, 0.8);
								opacity: 0;
								transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
							}
						}
						.content {
							position: absolute;
							z-index: 3;
							left: 20px;
							right: 20px;
							top: 50%;
							transform: translateY(-50%);
							opacity: 0;
							transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
							.info {
								h4 {
									text-align: center;
									font-size: 26px;
								}
								p {
									margin-top: 4px;
									text-align: center;
									font-size: 20px;
								}
							}

							.actions {
								p {
									margin-top: 20px;
									text-align: center;
									font-size: 18px;
									color: #26a784;
									text-decoration: underline;
								}
							}
						}
					}
				`}</style>
			</a>
		</Link>
	);
}
