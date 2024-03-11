//Higher Order functions

//A higher order function is a function does atleast one of the following

//Takes one or more functions as an agrgument (parameter)
//Returns a function as a result

//forEach()

import { posts } from "./posts.js";

posts.forEach((post) => {
  console.log(post);
});

console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 10;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});

console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPosts);