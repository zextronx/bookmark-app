const fs = require('fs');

const mapBookmarks = (bookmarks) => {
    return bookmarks.map(b => b.id);
}

const readFile = (fileName) => {
    const data = fs.readFileSync(fileName, 'utf8');
    if (data.length) {
        return JSON.parse(data);
    }
    return [];
}

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(fileName, JSON.stringify(data))
            resolve(data);
        } catch (e) {
            reject(err);
        }
    });
}

module.exports = {
    mapBookmarks,
    readFile,
    writeFile
}