"use-strict";

function fetchData() {
  showSkeletonLoader();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(function () {
        hideSkeletonLoader();
        // Display data
        displayData(data);
      }, 1000);
    })
    .catch((error) => {
      console.error("Error:", error);
      hideSkeletonLoader();
    });
}

// Function to display the fetched data
function displayData(data) {
  const postsContainer = document.getElementById("posts-container");

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    postElement.classList.add("post");
    postsContainer.appendChild(postElement);
  });
}

// Skeleton loader
function showSkeletonLoader() {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    const skeletonLoader = document.createElement("div");
    skeletonLoader.classList.add("skeleton-loader");
    postsContainer.appendChild(skeletonLoader);
  }
}

function hideSkeletonLoader() {
  const skeletonLoaders = document.querySelectorAll(".skeleton-loader");
  skeletonLoaders.forEach((loader) => loader.remove());
}

fetchData();
