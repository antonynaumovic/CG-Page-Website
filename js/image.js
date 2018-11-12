window.onload = randomImage;

    var imageURLs = new Array(
"/img/VortexRender.png",
"/img/TumblerRender.jpg",
"/img/Starwars2.jpg",
"/img/Starwars1.jpg",
"/img/SpaceStationRender.jpg",
"/img/RobotRender.png",
"/img/MiniaturePlanetsRender.png",
"/img/JupiterRender.jpg",
"/img/GlassRender.png",
"/img/DualPlanetRender.jpg",
"/img/DeloreanRender.png",
"/img/CrownRender.jpg",
"/img/ChessRenderRealisticColourGamut.jpg",
"/img/ChessRenderDarkColourGamut.jpg",
"/img/ChessNewRenderRealisticColourGamut.jpg",
"/img/ChessNewRenderAlternateColourGamut.jpg",
"/img/CastleRender.png",
"/img/CarRender.png",
"/img/BackgroundRender.png"
);

function randomImage(){
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    var img = imageURLs[randomIndex];
    document.getElementById("BGImage").src = img;  
}    
            