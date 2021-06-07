
function extractMetadata(node) {
  let result = {}

  for(let child of node.children) {
    if(child.tagName.toLowerCase() === 'title') {
      result.title = child.textContent

      break
    }
  }

  return result
}

function extractArticles(node) {
  const result = []

  for(let child of node.children) {
    if(child.tagName.toLowerCase() !== 'item') continue

    const title = child.getElementsByTagName('title')[0].textContent
    const link = child.getElementsByTagName('link')[0].textContent

    result.push({
      title,
      link,
    })
  }

  return result
}

export function parseRSS(rawRSS) {
  const result = {}

  const doc = new DOMParser().parseFromString(rawRSS, 'application/xml')

  const channel = doc.getElementsByTagName('channel')[0]

  result.metadata = extractMetadata(channel)
  result.articles = extractArticles(channel)

  return result
}
