import NewsItem from "./NewsItem";
import Title from "./Title";
import styles from './news.module.scss'
function News(){
    return <section className={styles.news}>
        <Title title="aktualności">
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <NewsItem/>
            </div>
        </Title>
    </section>
}
export default News;