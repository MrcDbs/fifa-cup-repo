let PouchDB = require('pouchdb').default;
let db = new PouchDB('my_database');
//let fs = require('');

const docs = [
    {
        _id: '1',
        name: 'Gigi',
        count: 0

    },
    {
        _id: '2',
        name: 'Squalo',
        count: 0

    },
    {
        _id: '3',
        name: 'Andy',
        count: 0

    },
    {
        _id: '4',
        name: 'Marco',
        count: 0

    },
    {
        _id: '5',
        name: 'Computer',
        count: 0
    },

]

const addDoc = (id) => {
    db.put({ _id: '80', name: 'Peppiniello', count: 0 }, (err, res) => {
        if (!err) {
            console.log('Document ADDED..', res);
        } else {
            console.log('ERROR SAVING THE DOC..', err)
        }
    })
}

export const loadDocs = () => {
    db.allDocs((err, doc) => {
        if (!err) {
            console.log('RIGE DAL DB.. ', doc.rows);
            return doc.rows;
        }
    })
}
export default addDoc;
