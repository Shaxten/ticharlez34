<template>
<div class="container profilContainer">
        <div class="profilText">
            <h2>1,2,3 moi c'est Charles. <br /> Venez me voir streamer sur Twitch avec ce lien! <br /> <a target="_blank" href="https://www.twitch.tv/ticharlez34">https://www.twitch.tv/ticharlez34</a></h2>
        </div>
        <div class="profil">
            <img src="/src/assets/img/profil.png" />
        </div>
    </div>

    <div class="iframe mt-8">
        <h2 class="center">Stream</h2>
        <div id="stream" class="center">
            <iframe class="set" src="https://player.twitch.tv/?channel=ticharlez34&parent=shaxten.github.io"
            frameborder="0"
            allowfullscreen
            height="478"
            width="820">
            </iframe>            
        </div>
    </div>

    <div class="container mt-8 mb-8">
        <div><h2 class="center">Here some main games I play</h2></div>
        <div id="games" class="games">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="/src/assets/img/csgologo.png" alt="Avatar">
                    </div>
                    <div class="flip-card-back color1">
                        <h3>CS GO</h3>  
                        <p>Most stream game for now. I do mostly short matches. <br />My rank is between gold nova 4 and mg2.</p>   
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="/src/assets/img/rotmg_logo.png" alt="Avatar">
                    </div>
                    <div class="flip-card-back color1">
                        <h3>ROTMG</h3>  
                        <p>Chill games when i want to take a break from FPS. Been playing for 2 months</p>   
                    </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="/src/assets/img/LoL.png" alt="Avatar">
                    </div>
                    <div class="flip-card-back color1">
                        <h3>League of Legend</h3>  
                        <p>When I need to lost all my mental sanity this is the perfect games for that.<br /> My current rank is Gold</p>   
                    </div>
                </div>
            </div>     
        </div>
    </div>

    <div style="background-color: #af5191;color:white;font-weight: 500;padding:0.5rem;">
        <p class="center">Tous les droits réservé à Shaxto the potato 2023</p>
    </div>
</template>