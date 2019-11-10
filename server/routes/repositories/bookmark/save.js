const axios = require('axios');
const transformRepositories = require('../../../utils/transformRepositories');
const helper = require('../../../utils/helper');
const { GITHUB_API_URL, DB_FILE_PATH } = process.env;

module.exports = (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        res.status(400).json({
            error: 'Repository id missing'
        });
    }

    let existingBookmarks = helper.readFile(DB_FILE_PATH);

    axios.get(`${GITHUB_API_URL}/repositories/${id}`)
        .then((response) => {
            const { data } = response;
            const repository = transformRepositories.mapRepo(data);
            existingBookmarks.push(repository);
            
            helper.writeFile(DB_FILE_PATH, existingBookmarks)
                .then(data => {
                    console.log('data');
                    res.status(200).json({id: repository.id});
                })
                .catch(err => {
                    res.status(400).json({
                        error: "Something went wrong"
                    });
                });
        })
        .catch(error => res.status(400).json(error));
}