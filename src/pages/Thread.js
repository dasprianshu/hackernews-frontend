import { useParams } from 'react-router-dom';

function Thread() {
    const { postId } = useParams();
    return ( 
        <div style={{position: "absolute", top: "40%", left: "30%"}}>
            <h1> Welcome to the Thread!!! </h1>
            <h2>The comment page is yet to be developed...</h2>
            <h1>PostId: {postId}</h1>
        </div>
    );
}

export default Thread;