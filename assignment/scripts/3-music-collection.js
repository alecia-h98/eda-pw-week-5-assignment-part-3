console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// function addToCollection(collection, title, artist, yearPubllished){
//   myCollection.push();
// }



let myCollection = [];

function addToCollection(collection, title, artist, yearPubllished) {
  const album = {
    title: title,
    artist: artist,
    yearPubllished: yearPubllished
  };
  collection.push(album);
  return album;
}


addToCollection(bigBlue, 'The big one', 'Geazy', '1943');

console.log('My album collection: ', myCollection);




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
