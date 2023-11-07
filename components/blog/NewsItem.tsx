import Link from 'next/link';
import Image from "next/image";
import styles from './newsItem.module.scss'
import image from '../..//public/images/IMG_5926.jpg'
interface post{
    _id: string;
    title: string;
    description:string;
    date:string;
}
interface NewsItemProps {
    Post: post;
  }
  const NewsItem: React.FC<NewsItemProps> = ({ Post }) => {
    return <Link href={`/blog/${Post._id}`} className={styles.newsitem}>
        <div >
            <Image src={image} alt="trener" className={styles.newsitem__image} />
        </div>
    <div className={styles.newsitem__title}>
        <h3>{Post.title}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto accusamus modi dolorum adipisci voluptatum quos quo veniam non vero quam?</p>
    </div>
    </Link>
}
export default NewsItem;