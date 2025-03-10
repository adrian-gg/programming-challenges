const GITHUB_API_URL = "https://api.github.com"
const REPO_OWNER = "adrian-gg"
const REPO_NAME = "programming-challenges"

const COMMITS_ENDPOINT = `/repos/${REPO_OWNER}/${REPO_NAME}/commits`

const url = new URL(`${GITHUB_API_URL}${COMMITS_ENDPOINT}`)
url.search = new URLSearchParams({ per_page: 10, page: 1 }).toString()

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((d, i) => {
      const comit = {
        hash: d.commit.tree.sha,
        author: d.commit.author.name,
        message: d.commit.message,
        date: d.commit.author.date,
      }
      console.log(
        `Commit ${i + 1} | ${comit.hash} | ${comit.author} | ${
          comit.message
        } | ${comit.date}`
      )
    })
  })
  .catch((err) => console.error(err))
