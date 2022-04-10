import { connect } from 'react-redux';

const PostsComponent = (props) => {
    const { posts } = props;
    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                    <div className='title'>
                        {post.title}
                    </div>
                    <div>{post.desc}</div>
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

export default connect(mapStateToProps)(PostsComponent)