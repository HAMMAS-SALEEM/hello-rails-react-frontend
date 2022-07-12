import React from 'react';

const Post = () => {
  const sendToAPI = (/** @type {FormData} */ data) => {
    fetch('http://localhost:4000/posts', {
      body: data,
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('post[title]', e.target.title.value);
    data.append('post[image]', e.target.image.files[0]);
    sendToAPI(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="file" name="image" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Post;
