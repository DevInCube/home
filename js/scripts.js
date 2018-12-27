const mylinks = [
    new Link(`YouTube канал "Ruslan Hadyniak Music"`,
        `https://www.youtube.com/channel/UCqX2l62Dx7umhLVJOMs7OpA`, `https://www.logolynx.com/images/logolynx/fa/fa7697f0fd6d7c436bd368177a0ac563.png`,
        `Записую і публікую відео з акустичними каверами на пісні. Співаю, граю на гітарі та укулеле`),
    new Link(`Проект "RA/Books"`,
        `https://devincube.github.io/books`, `https://devincube.github.io/books/images/icon.png`,
        `Книги, які я маю і можу позичити почитати`),
    new Link(`Goodreads`,
        `https://www.goodreads.com/user/show/51764433-ruslan-hadyniak`, `https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/93/54/ba/9354ba66-7544-1fa6-fbc8-100802925895/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/230x0w.jpg`,
        `Книги, які я прочитав чи збираюсь прочитати`),
    new Link(`Instagram`,
        `https://instagram.com/rhadyniak`, `https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png`,
        `Мої фото та історії`),
    new Link(`SoundCloud`,
        `https://soundcloud.com/rhadyniak`, `http://mfml.org/wp-content/uploads/2018/04/soundcloud-icon.png`,
        `Слухаю хорошу музику`),
    new Link(`LinkedIn`,
        `https://www.linkedin.com/in/ruslan-hadyniak-9b585479/`, `https://i1.wp.com/www.adcolony.com/wp-content/uploads/2017/09/linked-in-logo@2x-1.png?fit=588%2C588&ssl=1`,
        `Що я вмію робити`)
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
        profile: {
            fullname: `Руслан Гадиняк`,
            image: `https://en.gravatar.com/userimage/42398823/28e100ead8b0b87eaf68ca6c5865a68d.jpeg`,
            description: `Це домашня сторінка з посиланнями на мої соцмережі та проекти`,
        },
        links: mylinks,
    },
});