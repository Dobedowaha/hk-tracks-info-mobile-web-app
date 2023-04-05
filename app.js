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

    var EngNameCell = row.insertCell();
    EngNameCell.setAttribute('data-label', "Title_en");
    EngNameCell.innerHTML = track.Title_en;

    var TchNameCell = row.insertCell();
    TchNameCell.setAttribute('data-label', "Title_tc");
    TchNameCell.innerHTML = track.Title_tc;

    var EngDisCell = row.insertCell();
    EngDisCell.setAttribute('data-label', "District_en");
    EngDisCell.innerHTML = track.District_en;

    var TchDisCell = row.insertCell();
    TchDisCell.setAttribute('data-label', "District_tc");
    TchDisCell.innerHTML = track.District_tc;

    var SchDisCell = row.insertCell();
    SchDisCell.setAttribute('data-label', "District_sc");
    SchDisCell.innerHTML = track.District_sc;

    var EngRouteCell = row.insertCell();
    EngRouteCell.setAttribute('data-label', "Route_en");
    EngRouteCell.innerHTML = track.Route_en;

    var TchRouteCell = row.insertCell();
    TchRouteCell.setAttribute('data-label', "Route_tc");
    TchRouteCell.innerHTML = track.Route_tc;

    var SchRouteCell = row.insertCell();
    SchRouteCell.setAttribute('data-label', "Route_sc");
    SchRouteCell.innerHTML = track.Route_sc;

    var EngTransCell = row.insertCell();
    EngTransCell.setAttribute('data-label', "HowToAccess_en");
    EngTransCell.innerHTML = track.HowToAccess_en;

    var TchTransCell = row.insertCell();
    TchTransCell.setAttribute('data-label', "HowToAccess_tc");
    TchTransCell.innerHTML = track.HowToAccess_tc;

    var SchTransCell = row.insertCell();
    SchTransCell.setAttribute('data-label', "HowToAccess_sc");
    SchTransCell.innerHTML = track.HowToAccess_sc;

    var EngMapCell = row.insertCell();
    EngMapCell.setAttribute('data-label', "MapURL_en");
    EngMapCell.innerHTML = track.MapURL_en;

    var TchMapCell = row.insertCell();
    TchMapCell.setAttribute('data-label', "MapURL_tc");
    TchMapCell.innerHTML = track.MapURL_tc;

    var SchMapCell = row.insertCell();
    SchMapCell.setAttribute('data-label', "MapURL_sc");
    SchMapCell.innerHTML = track.MapURL_sc;

    var LatCell = row.insertCell();
    LatCell.setAttribute('data-label', "Latitude");
    LatCell.innerHTML = track.Latitude;

    var LongCell = row.insertCell();
    LongCell.setAttribute('data-label', "Longitude");
    LongCell.innerHTML = track.Longitude;
}


$(document).ready(function() {
    $("#btnFilter").click(function() {
        $("#myTable tbody tr").show();
        if($("#filter").val.length > 0) {
            $("#myTable tbody tr").filter(function(index, elm) {
                return $(elm).html().toUpperCase().indexOf($("#filter").val().toUpperCase()) < 0;
            }).hide();
        }
    });
});