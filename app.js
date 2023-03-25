function initialize() {
    var status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveTracks();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const tracks = localStorage.getItem("tracks");
            if (tracks) {
                displayTracks(JSON.parse(tracks));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener(
            "online",
            function () {
                document.getElementById("status").innerHTML = "Online";
            },
            false
            );
    document.body.addEventListener(
            "offline",
            function () {
                document.getElementById("status").innerHTML = "Offline";
            },
            false
            );
}

function retrieveTracks() {
    const xhr = new XMLHttpRequest();
    const url = "tracks.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var tracks = JSON.parse(xhr.response).tracks;
            displayTracks(tracks);

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
