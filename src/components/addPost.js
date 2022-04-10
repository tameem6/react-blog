import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postAction";

const AddPostComponent = (props) => {
    const [post, setPost] = useState({title: '', desc: ''})
    const handleChange = e => {
        e.preventDefault();
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        props.addPost(post)
        setPost({title: '', desc: ''})
    }
    return (
        <div>
            <input type="text" name="title" value={post.title} onChange={handleChange} />
            <input type="text" name="desc" value={post.desc} onChange={handleChange} placeholder="Body" />
            <p>{post.title}</p>
            <p>{post.desc}</p>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: post => {
            dispatch(addPost(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPostComponent);