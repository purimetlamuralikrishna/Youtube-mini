


var videos = JSON.parse(localStorage.getItem('video'))

showvideos(videos)



function showvideos(videos){
    
   
    // var conatiner = document.querySelector('#container')
    // conatiner.innerHTML= null;

    videos.forEach(({videoId,title}) => {

        var div = document.createElement('div')
        div.setAttribute('id','player')

        var frame = document.createElement('iframe')

        frame.src = `https://www.youtube.com/embed/${videoId}`;
        frame.width = '80%';
        frame.height = '400px'
        frame.allow = "fullscreen";

        let name = document.createElement('h5')
        name.innerText = title

        div.append(frame,name)
        document.querySelector('body').append(div)
        
    });
}