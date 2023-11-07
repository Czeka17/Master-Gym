import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Title from "../shared/Title";
import styles from "./news.module.scss";
interface post {
	_id: string;
	title: string;
	description: string;
	date: string;
}
function News() {
	const [posts, setPosts] = useState<post[]>([]);
	useEffect(() => {
		async function getPosts() {
			try {
				const response = await fetch("http://localhost:5000/api/blog");
				if (response.ok) {
					const data = await response.json();
					setPosts(data.posts);
				} else {
					console.error(
						"Failed to fetch data:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		}
		getPosts();
	});
	return (
		<section className={styles.news}>
			<Title title='aktualności'>
				<div className={styles.grid}>
					{posts.map((post) => (
						<NewsItem
							key={post._id}
							Post={post}
						/>
					))}
				</div>
			</Title>
		</section>
	);
}
export default News;
