const head = document.querySelector("h3");
const user = document.querySelector("#user");
const comment = document.querySelector("#comment");
const submitButton = document.querySelector("#submit");

let x = 0;
head.textContent = `Comment ${x}`;
const commentSection = document.querySelector('#commentSection');
const commentsContainer = document.querySelector('#comments');
const userIcon = document.createElement("i");
userIcon.setAttribute("class", "fa-solid fa-user");
commentSection.prepend(userIcon);
// Event listeners to enable/disable submit button
user.addEventListener('input', checkFields);
comment.addEventListener('input', checkFields);

function checkFields() {
    if (user.value.trim() !== "" && comment.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
commentSection.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = commentSection.elements.username.value;
    const comment = commentSection.elements.comment.value;
    addComment(username, comment);
    commentSection.elements.username.value = '';
    commentSection.elements.comment.value = '';
    submitButton.disabled = true;
});

const addComment = (username, comment) => {
    const newComment = document.createElement('li');
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-circle-user");
    const text = document.createElement('div');
    const bTag = document.createElement('b');
    newComment.append(icon);
    bTag.append("@", username);
    text.append(bTag);

    // const brk = document.createElement("br");
    // newComment.append(brk);
    const commentText = document.createElement("p");
    commentText.append(`${comment}`);
    text.append(commentText);
    newComment.append(text);
    commentsContainer.append(newComment);
    x++;
    head.textContent = `Comments ${x}`;
}
