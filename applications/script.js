var models = [
    {
        name : "Audi",
        image : "img/a8.jpg",
        link :
        "https://www.google.com/search?q=audi++a8+long+2022&tbm=isch&ved=2ahUKEwiJwMftlo36AhVQ_bsIHaHCCqMQ2-cCegQIABAA&oq=audi++a8+long+2022&gs_lcp=CgNpbWcQAzoECCMQJzoGCAAQHhAHOgYIABAeEAg6BAgAEBg6BQgAEIAEOgYIABAeEAU6BggAEAoQGFCACVjjHmD7H2gAcAB4AIAB0gGIAe0IkgEFMC42LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=WQ8eY8mvCND67_UPoYWrmAo&bih=880&biw=1903&hl=en#imgrc=MbI-fGg7I3hFjM"
    },
    {
        name : "Aston Martin",
        image : "img/astonMartin.jpg",
        link :
        "https://www.google.com/search?q=audi+martin+db11&tbm=isch&ved=2ahUKEwi4vv7El436AhXK_aQKHYZ4CyoQ2-cCegQIABAA&oq=audi+martin+db11&gs_lcp=CgNpbWcQAzoECCMQJzoGCAAQHhAIOgQIABAYUOQHWNgWYI0ZaABwAHgAgAGfAYgB3QuSAQQwLjEwmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=EBAeY7j2Hcr7kwWG8a3QAg&bih=937&biw=1903&hl=en#imgrc=3KtFDweKblfxeM&imgdii=oR2fRhsPdfBRpM"
    },
    {
        name : "Camaro",
        image : "img/camaro.jpg",
        link :
        "https://www.google.com/search?q=camaro2022&tbm=isch&ved=2ahUKEwj4p6avjY36AhXCwgIHHSPyALUQ2-cCegQIABAA&oq=camaro2022&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAc6BAgjECc6BggAEB4QCFCyB1i6DGDJDmgAcAB4AIABkgGIAeAHkgEDMC43mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=ZgUeY_jcJ8KFi-gPo-SDqAs&bih=937&biw=1920#imgrc=__9R_9QylUPucM"
    },
    {
        name : "Mustang",
        image : "img/mustang.jpg",
        link :
        "https://www.google.com/search?q=ford+mustang+shelby+gt+500&tbm=isch&ved=2ahUKEwjlu4OZjo36AhVJwaQKHc-iB60Q2-cCegQIABAA&oq=ford+mustang+shelbygt&gs_lcp=CgNpbWcQARgBMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAdQqQtY3A9g9yFoAHAAeACAAakBiAHIB5IBAzAuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=RAYeY-WJF8mCkwXPxZ7oCg&bih=880&biw=1903&hl=en#imgrc=cqL2RyS2EcqwmM"
    },    
    {
        name : "Rolls-Royce",
        image : "img/Rolls-Royce.jpg",
        link :
        "https://www.google.com/search?q=rolls+royce+2022&tbm=isch&ved=2ahUKEwjD6aT2jY36AhVEt6QKHWqWCg8Q2-cCegQIABAA&oq=rolls+2022&gs_lcp=CgNpbWcQARgAMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAc6BAgjECc6BQgAEIAEUOEIWNIQYMAVaABwAHgAgAGXAYgB9weSAQMwLjeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=-wUeY4OAIMTukgXqrKp4&bih=880&biw=1903&hl=en#imgrc=m5eXGgfptgu8bM&imgdii=-ys5TIIP4XagHM"
    },
    
]; 

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration : "2000",
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

function init(settings){

    var prev;

    interval= setInterval (function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev){
            prev = index;
            }
        } else{
            // increasing index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        

        showSlide(index);

    },settings.duration)
    

};

function showSlide(i){
    index = i;

    if(i < 0){
        index = slaytCount - 1;
    }
    if (index >= slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
};


