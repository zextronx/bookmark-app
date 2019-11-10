const axios = require('axios');
const transformRepositories = require('../../utils/transformRepositories');
const { GITHUB_API_URL } = process.env;

module.exports = (req, res) => {
    const slug = req.params.repo || '';
    console.log('req.params', req.params);
    axios.get(`${GITHUB_API_URL}/search/repositories?q=${slug}`)
        .then((response) => {
            const { data } = response;
            const repositories = transformRepositories.mapRepos(data, 100);

            res.status(200).json(repositories);
        })
        .catch(error => res.status(400).json(error));
};
