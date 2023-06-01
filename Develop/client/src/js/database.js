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

// Added logic to a method that accepts content and adds it to the DB
export const putDb = async (content) => {
const db = await openDB('jate', 1);
const tx = db.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
await store.put(content);
await tx.complete;
};

// Added logic for a method that gets all content fom the DB
export const getDb = async () => {
const db = await openDB('jate', 1);
const tx = db.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const content = await store.getAll();
await tx.complete;
return content;
};

initdb();
