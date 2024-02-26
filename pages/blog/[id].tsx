import Post from "@/components/blog/post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface post{
    _id: string;
    title: string;
    description:string;
    image:string;
    intro:string;
}
function PostPage(){
    const router = useRouter();
    const [post,setPost] =useState<post>()

    useEffect(() => {
        async function fetchPost() {
          try {
            const postId = router.query.id;
            if (typeof postId === 'string' && postId.trim() !== '') {
              const response = await fetch('/api/findOne', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId }),
              });
              if (response.ok) {
                const data = await response.json();
                setPost(data.post);
              } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
              }
            } else {
              console.error('Invalid id:', postId);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
    
        fetchPost();
      }, [router.query.id]);
    

    return <>
    <motion.div
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
						transition: {
							duration: 0.5,
						},
					},
				}}
			>
    {post ? <Post post={post}/> : <div style={{height:'100vh', display:"flex", alignItems:"center", justifyContent:"center"}}><p>Wczytywanie</p></div>}
    </motion.div>
    </>
}
export default PostPage;