const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.response.use(
  (response) => {
    console.log('Response Data:', response.data);
    return response;
  },
  (error) => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
  }
);

// Task 1: Fetch all 100 posts
console.log('Example 1: Fetch all posts');
api.get('/posts?_limit=100');

// Task 2: Fetch posts for a specific userId (e.g., userId=1)
console.log('Example 2: Fetch posts for userId=1');
api.get('/posts', {
  params: {
    userId: 1,
  },
});

// Task 3: Fetch a specific post by its ID (e.g., postId=1)
console.log('Example 3: Fetch a specific post by ID');
api.get('/posts/1');

// Task 4: Create a new post (POST request)
console.log('Example 4: Create a new post (POST request)');
const newPost = {
  userId: 1,
  title: 'New Post Title',
  body: 'This is the body of the new post.',
};
api.get('/posts?_limit=100', newPost)
  .then((response) => {
    console.log('New Post Response:', response.data);
  })
  .catch((error) => {
    console.error('Error creating new post:', error.message);
  });
