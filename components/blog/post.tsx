import Image from 'next/image';
import Title from '../shared/Title';
import styles from './post.module.scss'
import image from '../../public/images/dumbbells-header.jpg'
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
        <div className={styles.post__description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat eligendi at corporis ad facere similique asperiores fuga dolore  ducimus, laborum esse explicabo ab maxime nihil neque. <span>Pogrubienie.</span> Perferendis,<em>Italic</em> repellendus voluptatibus. <a href='google.pl'>Link</a></p>
            <hr/>
            
            <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
            </ul>
            <ol>
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ol>
        </div>
       </div>
        </Title>}
    </section>
}
export default Post;