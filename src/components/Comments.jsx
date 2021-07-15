import {useState, useEffect} from 'react';
import { getCommentsByReview } from '../utils/api';
import { useParams } from 'react-router-dom';
import Delete from './Delete';



const Comments = () => {
    const [comments,setComments] = useState([])
    const {review_id} =useParams();

    useEffect(()=>{
        getCommentsByReview(review_id).then((commentsFromAPi)=>{
            console.log(commentsFromAPi)
            setComments(commentsFromAPi)
        })
    },[review_id]) 

    return (
        <main>
            <h2>{comments.length === 0? "no comment": "comments"}</h2>
            
            <ul className="Comments_list">
                {comments.map((comment,idx)=>{
                    return (
                        
                        <li key={idx}>
                            <p>Author : {comment.author}</p>
                            <p>{comment.created_at}</p>
                            <p>{comment.body}</p>
                            <p>Vote :{comment.votes}</p>
                            <Delete  commentId={comment.comment_id}
                                     commentAuthor={comment.author}
                                     setComments={setComments}
                                     comments={comments}
                                    />

                        </li>
                    )
                    
                })}
            </ul>
            
        </main>
    );
};

export default Comments;