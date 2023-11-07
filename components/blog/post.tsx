import Image from 'next/image';
import Title from '../shared/Title';
import styles from './post.module.scss'
import image from '../../public/images/IMG_5926.jpg'
interface post{
    _id: string;
    title: string;
    description:string;
    date:string;
}
interface PostProps{
    post:post
}
function Post({post}:PostProps){


return <section className={styles.post}>
      {post && <Title title={post.title}>
       <div className={styles.post__container}>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non, nam tempore enim eum quam. Omnis sit non alias a iste. Exercitationem, excepturi. Obcaecati autem rerum quis in, est reiciendis.</p>
        </div>
       <div><Image src={image} alt='edgdrg' className={styles.post__image}/></div>
        <div className={styles.post__description} dangerouslySetInnerHTML={{ __html: post.description }} >
        </div>
       </div>
        </Title>}
    </section>
}
export default Post;