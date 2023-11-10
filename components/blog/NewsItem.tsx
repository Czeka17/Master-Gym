import Link from 'next/link';
import Image from "next/image";
import styles from './newsItem.module.scss'
import image from '../..//public/images/dumbbells-header.jpg'
interface post{
    _id: string;
    title: string;
    description:string;
    intro:string;
    image:string;
}
interface NewsItemProps {
    Post: post;
  }
  const NewsItem: React.FC<NewsItemProps> = ({ Post }) => {
    return <Link href={`/blog/${Post._id}`} className={styles.newsitem}>
        <div>
            <img src={Post.image} alt={Post.title} className={styles.newsitem__image} width={300} height={300}/>
        </div>
    <div className={styles.newsitem__title}>
        <h3>{Post.title}</h3>
        <p>{Post.intro}</p>
    </div>
    </Link>
}
export default NewsItem;