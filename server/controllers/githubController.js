const axios = require('axios');

const getGitHubRepos = async (req, res) => {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return res.status(500).json({ message: "GitHub token is missing in .env file" });
    }

    // Fetch repositories
    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // Use 'token' instead of 'Bearer'
      },
    });

    // Fetch languages for each repository
    const reposWithLanguages = await Promise.all(
      reposResponse.data.map(async (repo) => {
        try {
          const languagesResponse = await axios.get(repo.languages_url, {
            headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
          });

          return {
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description available',
            technologies: Object.keys(languagesResponse.data), // Get all languages
            icon: 'Codepen',
            color: 'bg-gradient-to-r from-gray-100 to-gray-200',
            textColor: 'text-gray-900',
            features: [
              `⭐ Stars: ${repo.stargazers_count}`,
              `🔄 Forks: ${repo.forks_count}`,
            ],
            githubUrl: repo.html_url,
          };
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error.message);
          return null;
        }
      })
    );

    res.json(reposWithLanguages.filter(Boolean)); // Filter out null results
  } catch (error) {
    console.error('Error fetching GitHub repos:', error.message);
    res.status(500).json({ message: 'Failed to fetch GitHub repositories' });
  }
};

module.exports = {
  getGitHubRepos,
};
