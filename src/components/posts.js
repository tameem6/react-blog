import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';

const PostsComponent = (props) => {
    const { posts } = props;
    const handleClick = (id) => {
        props.deletePost(id)
    }
    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                    <div className='title'>
                        {post.title}
                    </div>
                    <div>{post.desc}</div>
                    <button onClick={() => handleClick(post.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent)