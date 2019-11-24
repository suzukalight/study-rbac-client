import React from 'react';

import Can from '../../atoms/Can';
import { useAuth } from '../../contexts/Auth';

import posts from './dummydata';

interface PostParams {
  user: User;
  post: Post;
  index: number;
}

const Post: React.FC<PostParams> = ({ user, post, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>{post.title}</td>
    <td>
      <Can
        role={user.role}
        perform="posts:edit"
        data={{
          userId: user.id,
          postOwnerId: post.ownerId,
        }}
      >
        <button>Edit Post</button>
      </Can>
      <Can role={user.role} perform="posts:delete">
        <button>Delete Post</button>
      </Can>
    </td>
  </tr>
);

const PostsList: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Posts List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <Post key={index} user={user} post={post} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
