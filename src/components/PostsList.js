import React from 'react';

import posts from '../constants/posts';
import { AuthConsumer } from '../authContext';
import Can from './Can';


const PostsList = () => (
  <AuthConsumer>
    {({ user }) => (
      <div>
        <h2>Posts List</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.title}
              <Can
                role={user.role}
                perform='posts:edit'
                data={{
                  userId: user.id,
                  postOwnerId: post.ownerId
                }}
                yes={() => (
                  <button>Edit Post</button>
                )}
              />
              <Can
                role={user.role}
                perform='posts:delete'
                yes={() => (
                  <button>Delete Post</button>
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    )}
  </AuthConsumer>
)

export default PostsList;
