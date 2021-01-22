const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const person_name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/random" alt="Unsplash">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, molestiae.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    person_name.innerHTML = 'John Doe';
    date.innerHTML = 'October 8th, 2020';

    animated_bg.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bgt => bgt.classList.remove('animated-bg'));
}