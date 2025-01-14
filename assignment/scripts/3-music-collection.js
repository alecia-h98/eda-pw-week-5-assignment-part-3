console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// function addToCollection(collection, title, artist, yearPubllished){
//   myCollection.push();
// }


//array for collection

let myCollection = [];

//Funciton to add music to said array^

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title,
    artist,
    yearPublished
  };
  collection.push(album);
  return album;
}

///Adding songs to my website

addToCollection(myCollection, 'Acid Rap', 'Chance The Rapper', '2013');
console.log('Album added to collection: ', myCollection[0]);

addToCollection(myCollection, 'POST HUMAN: NeX GEn', 'Bring Me The Horizon', '2023');
console.log('Album added to collection: ', myCollection[1]);


addToCollection(myCollection, 'Amo', 'Bring Me The Horizon', '2019');
console.log('Album added to collection: ', myCollection[2]);


addToCollection(myCollection, 'Shout At The Devil', 'Motley Crue', '1983');
console.log('Album added to collection: ', myCollection[3]);


addToCollection(myCollection, 'Collide With The Sky', 'Pierce The Veil', '2012');
console.log('Album added to collection: ', myCollection[4]);


addToCollection(myCollection, 'Rainbow Brain', 'Griz', '2021');
console.log('Album added to collection: ', myCollection[5]);

//Reorganizing prior collection

function showCollection(collection){
  for (let i = 0; i<collection.length; i++){
    console.log(collection[i].title + ' by ' + collection[i].artist + ' published in, ' + collection[i].yearPublished);
  }
}

showCollection(myCollection);


//Finding an artist in the array

function findByArtist(collection, artist){
  let matchingResults = [];
  for (let i = 0; i<collection.length; i++){
    if(collection[i].artist === artist){
      matchingResults.push(collection[i]);
    }
  }
  return matchingResults;
}


let matchingAlbums = findByArtist(myCollection, 'Nirvana');
console.log('Albums matching Nirvana: ');
showCollection(matchingAlbums);

matchingAlbums = findByArtist(myCollection, 'Bring Me The Horizon');
console.log('Albums matching Bring Me The Horizon: ');
showCollection(matchingAlbums);

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
