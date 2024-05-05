import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";


const Blogs = () => {
const { loading, blogs } = useBlogs();


if (loading) {
    return <div>
        <Appbar /> 
        <div  className="flex justify-center">
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    </div>
}
  return (
    <div>
       <Appbar />
        <div className=" flex justify-center">    
        
        <div className="max-w-xl">
{blogs.map(blog => <BlogCard 
id={blog.id}
        authorName={blog.author.name || ""}
        title={blog.title}
        content={blog.content}
        publishedDate={"2nd feb 2024"}
        />)}

        
         
    </div></div>
       
    </div>
 
  )
}

export default Blogs