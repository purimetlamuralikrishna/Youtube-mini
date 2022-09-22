

var homeurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&order=viewCount&q=top%20videos%20in%20india&key=AIzaSyBddLrpxl3Es66_TfZItAp7KqRandFR-do`


var homepage = async(homeurl)=>{
    try{
       var x = await fetch(homeurl)
       let searchdata = await x.json()
       console.log(searchdata.items)
       showvideos(searchdata.items)
    }
    catch(err){
        console.log(err)
    }
}

homepage(homeurl)






var searchvideos = async() =>{

var q = document.querySelector('#search').value
var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=rating&q=${q}&key=AIzaSyBddLrpxl3Es66_TfZItAp7KqRandFR-do`
   
    try{
        var data = await fetch(url)
        var searchdata = await data.json();
        showvideos(searchdata.items)
    }
    catch(err){
        console.log(err)
    }
}

var showvideos = (videos) =>{

    var conatiner = document.querySelector('#container')
    conatiner.innerHTML= null;

    videos.forEach(({id:{videoId},snippet:{title}}) => {

        var div = document.createElement('div')

        var frame = document.createElement('iframe')

        frame.src = `https://www.youtube.com/embed/${videoId}`;
        frame.width = '100%';
        frame.allow = "fullscreen";

        let name = document.createElement('h5')
        name.innerText = title

        var obj = {
            title,
            videoId,
        }

        div.onclick = () =>{
            playvideo(obj)
        }

        div.append(frame,name)
        conatiner.append(div)
        
    });
}

var playvideo = (obj) => {
    arr = []
    window.location.href = './html/playvideo.html'
    arr.push(obj)
    localStorage.setItem('video',JSON.stringify(arr))
}

