function initiate() {
    document.getElementById("District_en").onchange = function() {retrieveTracks()};
}

function retrieveTracks() {
    const xhr = new XMLHttpRequest();
    const url = "tracks.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            
            if (document.getElementsByClassName("district").value == "Southern"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Southern");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Central and Western"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Central and Western");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Wan Chai"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Wan Chai");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Eastern"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Eastern");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Sham Shui Po"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Sham Shui Po");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Yau Tsim Mong"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Yau Tsim Mong");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Wong Tai Sin"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Wong Tai Sin");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Kwun Tong"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Kwun Tong");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Kowloon City"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Kowloon City");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Tai Po"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Tai Po");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Sai Kung"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Sai Kung");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Sha Tin Distict"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Sha Tin Distict");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Tuen Mun"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Tuen Mun");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Yuen Long"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Yuen Long");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "North"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="North");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Tsuen Wan"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Tsuen Wan");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Kwai Tsing"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Kwai Tsing");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "Islands"){
                var tracks = JSON.parse(xhr.response).tracks.filter( element => element.District_en =="Islands");
                displayTracks(tracks);
            } else if (document.getElementsByClassName("district").value == "All"){
                var tracks = JSON.parse(xhr.response).tracks;
                displayTracks(tracks);
            }
            

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("tracks", JSON.stringify(tracks));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayTracks(tracks) {
    tracks.forEach(addRow);
}

function addRow(track) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();

    var tnEngCell = row.insertCell();
    tnEngCell.setAttribute('data-label', "Track Name(English)");
    tnEngCell.innerHTML = track.Title_en;

    var tnTchCell = row.insertCell();
    tnTchCell.setAttribute('data-label', "Track Name(Traditional Chinese)");
    tnTchCell.innerHTML = track.Title_tc;

    var tnSchCell = row.insertCell();
    tnSchCell.setAttribute('data-label', "Track Name(Simplified Chinese)");
    tnSchCell.innerHTML = track.Title_sc;

    var disEng = row.insertCell();
    disEng.setAttribute('data-label', "Locational District(English)");
    disEng.innerHTML = track.District_en;

    var disTch = row.insertCell();
    disTch.setAttribute('data-label', "Location District(Traditional Chinese)");
    disTch.innerHTML = track.District_tc;

    var disSch = row.insertCell();
    disSch.setAttribute('data-label', "Location District(Simplified Chinese)");
    disSch.innerHTML = track.District_sc;

    var rouEng = row.insertCell();
    rouEng.setAttribute('data-label', "Route details(English)");
    rouEng.innerHTML = track.Route_en;

    var rouTch = row.insertCell();
    rouTch.setAttribute('data-label', "Route details(Traditional Chinese)");
    rouTch.innerHTML = track.Route_tc;

    var rouSch = row.insertCell();
    rouSch.setAttribute('data-label', "Route details(Simplified Chinese)");
    rouSch.innerHTML = track.Route_sc;

    var traEng = row.insertCell();
    traEng.setAttribute('data-label', "Traffic(English)");
    traEng.innerHTML = track.HowToAccess_en;

    var traTch = row.insertCell();
    traTch.setAttribute('data-label', "Traffic(Traditional Chinese)");
    traTch.innerHTML = track.HowToAccess_tc;

    var traSch = row.insertCell();
    traSch.setAttribute('data-label', "Traffic(Simplified Chinese)");
    traSch.innerHTML = track.HowToAccess_sc;

    var mapEng = row.insertCell();
    mapEng.setAttribute('data-label', "Map URL(English)");
    mapEng.innerHTML = track.MapURL_en;

    var mapTch = row.insertCell();
    mapTch.setAttribute('data-label', "Map URL(Traditional Chinese)");
    mapTch.innerHTML = track.MapURL_tc;

    var mapSch = row.insertCell();
    mapSch.setAttribute('data-label', "Map URL(Simplified Chinese)");
    mapSch.innerHTML = track.MapURL_sc;

    var latCell = row.insertCell();
    latCell.setAttribute('data-label', "Latitude");
    latCell.innerHTML = track.Latitude;

    var longCell = row.insertCell();
    longCell.setAttribute('data-label', "Longitude");
    longCell.innerHTML = track.Longitude;
}
