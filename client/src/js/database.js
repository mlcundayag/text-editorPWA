import { request } from 'express';
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Updating database');
  if(err){
    console.error('putDb not implemented')
  } else {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ jate: content })
  const result = await request;
  console.log("Success", result)
  }
};

//Add logic for a method that gets all the content from the database
export const getDb = async () => {
  if(err){
    console.error('getDb not implemented');
  } else {
    const jateDB = await openDB("jate", 1);
    const tx = jateDB.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log(result)
  }
} 

initdb();
