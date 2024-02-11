export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng}; // It Should Be Lat and Long
    this.id = id;  //We can use a id from firebase
  }
}


