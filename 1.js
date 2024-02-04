document.querySelectorAll('.topnav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function dark_mode() {
    document.body.classList.toggle('dark_mode');
}

document.addEventListener("DOMContentLoaded", function () {
    let commentsArray = [];
    const likeCount = document.getElementById("likeCount");
    let currentLikes = parseInt(localStorage.getItem("likeCount")) || 0;
    likeCount.innerHTML = currentLikes;

    function like() {
        currentLikes++;
        likeCount.innerHTML = currentLikes;
        localStorage.setItem("likeCount", currentLikes);
    }

    function dislike() {
        currentLikes--;
        likeCount.innerHTML = currentLikes;
        localStorage.setItem("likeCount", currentLikes);
    }

    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener('click', like);

    const dislikeButton = document.getElementById("dislikeButton");
    dislikeButton.addEventListener('click', dislike);

    
});

