const mylinks = [
    new Link(`RA/Books`, `https://devincube.github.io/books`, null, `Мої книги`),
    new Link(`Goodreads`, `https://www.goodreads.com/user/show/51764433-ruslan-hadyniak`, null, `Мої книги`),
    new Link(`SoundCloud`, `https://devincube.github.io/books`, null, `Мої книги`),
    new Link(`YouTube Music Channel`, `https://devincube.github.io/books`, null, `Мої книги`),
    new Link(`Instagram`, `https://devincube.github.io/books`, null, `Мої книги`),
];

function Link(title, url, image, description) {
    this.title = title;
    this.url = url;
    this.image = image;
    this.description = description;
}

const app = new Vue({
    el: `#app`,
    data: {
        profileImage: `https://en.gravatar.com/userimage/42398823/28e100ead8b0b87eaf68ca6c5865a68d.jpeg`,
        links: mylinks,
    },
});