// Fetch API requires a discussion of ..
//Callbacks, Promises, Thenables and Async/Await

//Callbacks

/* function firstFunction(parameters, callback) {
  //dos stuff
  callback();
}

//AKA "callback hell"
firstFunction(para, function () {
  secondFunction(para, function () {
    thirdFunction(para, function () {
      console.log("All functions have finished");
    });
  });
}); */

//Promises

//3 states:Pending,Fulfilled,Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes  it worked!");
  } else {
    reject(Error("It did not work"));
  }
});

/* console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch(err =>{
    console.error(err);
  })
 */

/* const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
}); */

/* const users= fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
 */

// Async / Await

/* const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc(); */

// Workflow function

/* const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  //console.log(userEmailArray);
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails(); */

//2nd parameter of Fetch is  a object

/* const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
};

const jokeObject = {
  id: "UKuXvzAlOuc",
  joke: "I was going to learn how to juggle, but I didn't have the balls.",
};

const postDadJoke = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

postDadJoke(jokeObject); */

const getDataFromForm = () => {
  const requestObj = {
    firstName: "bruce",
    lastName: "wayne",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildReuquestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//Procedural "workflow" function
const processJokerequest = async () => {
  const requestData = getDataFromForm();
  const url = buildReuquestUrl(requestData);
  await requestJoke(url);
  console.log("finsihed!")
};

processJokerequest();
