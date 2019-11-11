import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList, fetchUserList } from "../actions";

class PostList extends  Component {

    constructor(props) {
        super(props);

        this.findUsername = this.findUsername.bind(this);
    }

    componentDidMount() {
        this.props.fetchPostList();
        this.props.fetchUserList();
    }

    findUsername (userId) {
        const { userList } = this.props;
        if  (userList.length > 0 ) {
            return userList.find(user => user.id === userId).name;
        } else {
            return '';
        }
    }

    renderItem(post) {
        return (
            <div className="item" key={post.id}>
                <i className="right triangle icon"></i>
                <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">{post.body}</div>
                    <div className="description">{this.findUsername(post.userId)}</div>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="ui list">
                {this.props.postList.map(post => this.renderItem(post))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.postList);
    //console.log(state.userList);
return {
    postList: state.postList,
    userList: state.userList
   }
}

export default connect(mapStateToProps, {fetchPostList, fetchUserList})(PostList);

