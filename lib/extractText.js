const { convert } = require('html-to-text');

export function extractText (html, length = 80, more = '…') {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip'},
      { selector: 'a', options: { ignoreHref: true } }
    ]
  })

  // console.log(text);

  return text.slice(0, length) + more
}