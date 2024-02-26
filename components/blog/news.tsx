import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Title from "../shared/Title";
import styles from "./news.module.scss";
interface post {
	_id: string;
	title: string;
	description: string;
	intro:string;
	image:string;
}
function News() {
	const [posts, setPosts] = useState<post[]>([]);
	const [isLoading,setIsLoading] = useState(false)
	useEffect(() => {
		async function getPosts() {
			setIsLoading(true)
			try {
				const response = await fetch(`/api/posts`);
				if (response.ok) {
					const data = await response.json();
					setPosts(data.posts);
					setIsLoading(false)
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
	},[]);
	return (
		<section className={styles.news}>
			<Title title='aktualności'>
				{!isLoading && <div className={styles.grid}>
					{posts.map((post) => (
						<NewsItem
							key={post._id}
							Post={post}
						/>
					))}
				</div>}
				{isLoading && <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><p>Wczytywanie...</p></div>}
			</Title>
		</section>
	);
}
export default News;
