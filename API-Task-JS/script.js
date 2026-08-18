const URL = "https://jsonplaceholder.typicode.com/posts";

const form = document.getElementById("postForm");
const posts = document.getElementById("posts");

function getPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText);
        posts.innerHTML = "";
        data.slice(0, 10).forEach(post => {
            posts.innerHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button onclick="updatePost(${post.id})">
                        Update
                    </button>
                    <button onclick="deletePost(${post.id})">
                        Delete
                    </button>
                </div>
            `;
        });
    };
    xhr.send();
}


form.onsubmit = function (omar) {

    omar.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open("POST", URL);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.onload = function () {

        alert("Post Added");

        form.reset();

        getPosts();
    };

    xhr.send(JSON.stringify({
        title: title.value,
        body: body.value,
        userId: 1
    }));
};
function updatePost(id) {

    const xhr = new XMLHttpRequest();

    xhr.open("PUT", `${URL}/${id}`);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.onload = function () {

        alert("Post Updated");

        getPosts();
    };

    xhr.send(JSON.stringify({
        title: "Updated Title",
        body: "Updated Body",
        userId: 1
    }));
}

function deletePost(id) {

    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", `${URL}/${id}`);

    xhr.onload = function () {

        alert("Post Deleted");

        getPosts();
    };

    xhr.send();
}

getPosts();