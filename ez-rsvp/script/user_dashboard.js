class Event {
    constructor(name, photoURL, details, location, datetime) {
        this.name = name;
        this.photoURL = photoURL;
        this.details = details;
        this.location = location;
        this.datetime = datetime;
        this.parseSplitter = "sdfuynf9s87dfy9 23807r32 98psDFsdf8s76dfSDFASDAF8G8GA"
    }


    get stringify() {
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


let eventList = new Array();

eventList.push(new Event(
    "Steve's BBQ",
    "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "Eating BBQ with Steve",
    "San Marcos, CA",
    "October 4, 2023, 12:00pm"));

eventList.push(new Event(
    "Mike's Hunt",
    "https://dwr.virginia.gov/wp-content/uploads/top-reasons-to-take-a-friend.jpg",
    "Hunting with Mike",
    "San Marcos, CA",
    "October 5, 2023, 12:00pm"));

eventList.push(new Event(
    "Maria's Quincenera",
    "https://www.metropolbanquet.com/wp-content/uploads/New-10-1-2000x1333.jpg",
    'We are overjoyed to announce that our daughter, '
    + 'Maria, will be celebrating her quincenera on October 12th. '
    + 'This special day will commemorate Maria\'s 15 years and her passage into young womanhood. '
    + 'We invite you to join us in celebrating Maria on this momentous occasion. '
    + 'The day will begin with a special mass to give thanks for the grace of 15 years of life. '
    + 'We will then gather for a reception with traditional food, dancing, music, and festivities. '
    + 'Maria will make her grand entrance in a beautiful quinceñera gown, '
    + 'freshly shod with elegant ballet-style shoes, completed with her bouquet of roses. '
    + 'There will be memories and joy for all, as Maria shares her first waltz with '
    + 'her father and enjoys this magical night surrounded by family and friends. '
    + 'Guests will have the opportunity to capture photos and videos of the dances, '
    + 'cake cutting, bouquet toss, and other special moments. Please RSVP through our '
    + 'website event page and let us know if you plan to join in the celebration. '
    + 'We look forward to an afternoon full of love, community, and celebration for Maria\'s '
    + 'quincenera! Mementos and testimonials from the day will be posted for all to enjoy '
    + 'following the event. We hope that you can make time to share this memorable quinceañera with us. '
    + 'Maria and our family look forward to celebrating this special occasion with each of you!',
    "San Marcos, CA",
    "June 16th, 2022"
))


// from create_event.html
createdEvent = new Event()
createdEvent.parse(localStorage.getItem('createdEvent'));
eventList.push(createdEvent);

console.log(createdEvent.stringify);


window.addEventListener("load", function () {
    displayDashboardEvent(eventList);
});


// In the dashboard, just show picture and name of event
// show the event list using loop
function displayDashboardEvent() {

    for (let i = 0; i < eventList.length; i++) {

        let userEventsDiv = document.getElementById('userEventsDiv');

        let linkToEventDetails = document.createElement('a');
        linkToEventDetails.classList.add('userEvent');
        linkToEventDetails.href = "./event_details.html";

        let eventDiv = document.createElement('div');
        eventDiv.addEventListener('click', function () {
            localStorage.setItem('event', eventList[i].stringify);
        });

        let photoDiv = document.createElement('div');
        photoDiv.classList.add('photoDiv');
        let photo = document.createElement('img');
        photo.src = eventList[i].photoURL;
        photoDiv.appendChild(photo);
        eventDiv.appendChild(photoDiv);

        let eventNameDiv = document.createElement('div');
        eventNameDiv.classList.add('eventNameDiv');
        let eventName = document.createElement('p');
        eventName.innerHTML = eventList[i].name;
        eventName.classList.add('eventName');
        eventNameDiv.appendChild(eventName);
        eventDiv.appendChild(eventNameDiv);

        linkToEventDetails.appendChild(eventDiv);
        userEventsDiv.appendChild(linkToEventDetails);
    }

}