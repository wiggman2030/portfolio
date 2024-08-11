const projectLink1 = document.getElementById('project-item1');
const projectLink2 = document.getElementById('project-item2');
const projectLink3 = document.getElementById('project-item3');
const preview = document.getElementById('preview');
const htmlLogo = document.getElementById('html');
const cssLogo = document.getElementById('css');
const jsLogo = document.getElementById('js');
const test = document.getElementById('test');

projectLink1.onmouseover = function () {
    preview.style.backgroundImage = "url('./images/soundboard.jpg')";
    htmlLogo.style.display = "block";
    cssLogo.style.display = "block";
    jsLogo.style.display = "block";
};

projectLink2.onmouseover = function () {
    preview.style.backgroundImage = "url('./images/family.jpg')";
    htmlLogo.style.display = "block";
    cssLogo.style.display = "block";
    jsLogo.style.display = "none";
};

projectLink3.onmouseover = function () {
    preview.style.backgroundImage = "url('')";
    htmlLogo.style.display = "none";
    cssLogo.style.display = "none";
    jsLogo.style.display = "block";
};

projectLink1.onmouseleave = function () {
    preview.style.backgroundImage = "url('')";
    hideLogo();
}

projectLink2.onmouseleave = function () {
    preview.style.backgroundImage = "url('')";
    hideLogo();
}

projectLink3.onmouseleave = function () {
    preview.style.backgroundImage = "url('')";
    hideLogo();
}

/*
const showLogo = () => {
    if (projectLink1.innerHTML === "Soundboard"){
        htmlLogo.style.display = "block";
    } else if (projectLink.innerHTML === "Project2") {
        cssLogo.style.display = "block";
    } else if(projectLink.innerHTML === "Project3") {
        jsLogo.style.display = "block";
    }
}
*/

const hideLogo = () => {
        htmlLogo.style.display = "none";
        cssLogo.style.display = "none";
        jsLogo.style.display = "none";
}

