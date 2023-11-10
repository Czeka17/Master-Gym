import Image from 'next/image';
import Title from '../shared/Title';
import styles from './post.module.scss'
interface post{
    _id: string;
    title: string;
    description:string;
    intro:string;
    image:string;
}
interface PostProps{
    post:post
}
function Post({post}:PostProps){


return <section className={styles.post}>
      {post && <Title title={post.title}>
       <div className={styles.post__container}>
        <div>
            <p>{post.intro}</p>
        </div>
       <div><img src={post.image} alt={post.title} className={styles.post__image}/></div>
        <div className={styles.post__description} dangerouslySetInnerHTML={{__html: post.description}}>
        </div>
       </div>
        </Title>}
    </section>
}
export default Post;