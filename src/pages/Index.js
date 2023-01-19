import { useLoaderData, Form } from "react-router-dom";
import "../index.css";


function Index(props) {
    const bookmarks = useLoaderData();

    return (
    <div>
        <h2>Create a New Bookmark</h2>
        <Form className= 'form' action="/create" method="post">
            <input className= 'search' type="input" name="title" placeholder="Name" />
            <input className= 'search' type="input" name="url" placeholder="http://" />
            <input className= 'search' type="submit" value="Create" />
        </Form>

        <h2>Bookmarks</h2>
        
            {bookmarks.map((bookmark) => (
                <div className="bookmarkEntry" key={bookmark._id}>
            
           <h2>Update <a href={bookmark.url} alt={bookmark.title}>{bookmark.title} </a></h2>
        <Form action={`/update/${bookmark._id}`} method="post">
            <input type="input" name="title" defaultValue={bookmark.title}/>
            <input type="input" name="url" defaultValue={bookmark.url}/>
            <input type="submit" value={`update ${bookmark.title}`}/>
        </Form>  
        <Form action={`/delete/${bookmark._id}`} method="post">
            <input type="submit" value={`delete ${bookmark.title}`}/>
        </Form>
                </div>
            ))}
    </div>
    )
}

export default Index;













