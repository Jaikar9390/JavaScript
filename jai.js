var collection = {
  2458: {
    album: "Slippery when wet",
    artist: "Bon Joi",
    tracks: ["Let it Rock", "You Give Love a bad name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red covert"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA GOLD",
  },
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2468, "artist", "ABBA");
console.log(updateRecords(5439, "tracks", "ABBA"));
