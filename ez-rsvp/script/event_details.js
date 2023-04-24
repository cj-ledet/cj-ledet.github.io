class Event {
    constructor(name, photoURL, details, location, datetime) {
        this.name = name;
        this.photoURL = photoURL;
        this.details = details;
        this.location = location;
        this.datetime = datetime;
        this.parseSplitter = "sdfuynf9s87dfy9 23807r32 98psDFsdf8s76dfSDFASDAF8G8GA"
    }


    get stringify () {
        return this.name + this.parseSplitter + this.photoURL + this.parseSplitter + this.details + this.parseSplitter 
        + this.location + this.parseSplitter + this.datetime;
    }

    parse(str) {
        str = str.split(this.parseSplitter);
        this.name = str[0];
        this.photoURL = str[1];
        this.details = str[2];
        this.location = str[3];
        this.datetime = str[4];
    }
}

is_owner = false;

example = new Event();
example.parse(localStorage.getItem('event'));
console.log(example);

window.addEventListener("load", function() {
    displayEvent(example);
});

function displayEvent(event) {

    nameDiv = document.getElementById("eventName");
    coverPhotoDiv = document.getElementById("eventCoverPhoto");
    detailsDiv = document.getElementById("eventDetails");
    locationDiv = document.getElementById("eventLocation");
    datetimeDiv = document.getElementById("eventDatetime");

    appendElmtToDiv(nameDiv, event.name, 'h1');
    
    let photo = document.createElement('img');
    photo.src = event.photoURL;
    coverPhotoDiv.appendChild(photo);
    
    appendElmtToDiv(detailsDiv, event.details);
    appendElmtToDiv(locationDiv, "Location: " + event.location);
    appendElmtToDiv(datetimeDiv, "Date: " + event.datetime);
}

function appendElmtToDiv(divNode, value, elmt='p') {
    let child = document.createElement(elmt);
    child.innerHTML = value;
    divNode.appendChild(child);
}