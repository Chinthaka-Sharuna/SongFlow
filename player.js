let song=new Audio("songs/Batanala.mp3")

//controls of Play button and Paused button
function playPauseSong(){
    if (play_button.classList.contains('play-button')){
        song.play();
        play_button.classList.remove('play-button');
        play_button.classList.add('pause-button');
    }
    else {
        song.pause();
        play_button.classList.remove('pause-button');
        play_button.classList.add('play-button');
    }
}

//Change the content of a div
function relordDiv(NewContent,divid){
    let div=document.getElementById(divid);
    div.innerHTML=NewContent;
}
function relordplaylist(){
    let content=`
    <div class="playlist-view">
                <div class="playlist-view-banner">
                    <div class="playlist-thumnail">
                        <img src="playlist-icons/Liked.png">
                    </div>
                    <div class="playlist-details">
                        <p class="playlist-title">Liked Songs</p>
                        <p class="playlist-sub-title">chinthaka sharuna &#183; 462 songs</p>
                    </div>
                </div>
            </div>
            <div class="playlist-songs-grid">
                <div style="background-color: red;">#</div>
                <div style="background-color: rgb(119, 0, 255);">Name</div>
                <div style="background-color: rgb(0, 217, 255);">Artist</div>
                <div style="background-color: rgb(38, 0, 255);">Time</div>
                <div style="background-color: rgb(0, 255, 55);">Date Added</div>
                <div style="background-color: rgb(225, 0, 255);">&#183; &#183; &#183;</div>
            </div>
        </div>`
    relordDiv(content,'content');
}