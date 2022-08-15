// const db = {};
console.log('hello')
const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1
    }
    saveToDb(db);
    // console.log(db);
}
const removeDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db)

}
const saveToDb = db => {
    const dbJson = JSON.stringify(db)
    localStorage.setItem('shopping-cart', dbJson);

}
const getDb = () => {

    let savedDb = localStorage.getItem('shopping-cart')
    savedDb = JSON.parse(savedDb);
    return savedDb;
    // const db ={};
    // return db
}

