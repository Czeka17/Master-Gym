import Post from "@/components/blog/post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    const {id} = router.query;
    useEffect(() => {
       async function getPostById(){
        try{
            const response = await fetch(`https://master-gym-backend-production.up.railway.app/api/blog/${id}`)
            if (response.ok) {
                const data = await response.json();
                setPost(data.post);
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
       }
       getPostById()
    },[id])

    return <>
    {post && <Post post={post}/>}
    </>
}
export default PostPage;