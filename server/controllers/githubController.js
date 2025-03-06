// server/controllers/githubController.js
const axios = require('axios');

const getGitHubRepos = async (req, res) => {
  try {
    // Fetch all repositories
    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    // Fetch languages for each repository
    const reposWithLanguages = await Promise.all(
      reposResponse.data.map(async (repo) => {
        const languagesResponse = await axios.get(repo.languages_url, {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        });

        return {
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description provided.',
          technologies: Object.keys(languagesResponse.data), // Get all languages
          icon: 'Codepen', // Default icon
          color: 'bg-gradient-to-r from-gray-100 to-gray-200', // Default color
          textColor: 'text-gray-900', // Default text color
          features: [
            `Stars: ${repo.stargazers_count}`,
            `Forks: ${repo.forks_count}`,
            `Language: ${repo.language || 'Not specified'}`,
          ],
          githubUrl: repo.html_url,
        };
      })
    );

    res.json(reposWithLanguages);
  } catch (err) {
    console.error('Error fetching GitHub repos:', err);
    res.status(500).json({ message: 'Failed to fetch GitHub repositories' });
  }
};

module.exports = {
  getGitHubRepos,
};