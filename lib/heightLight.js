import parse from 'html-react-parser'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css';

export function ConvertText({ contentHTML }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if(node.name === 'code') {
        const result = hljs.highlightAuto(node.children[0].data);
        const dom = parse(result.value);
        return (
          <code className='hljs'>
            {dom}
          </code>
        )
      }
    }
  })
  return <>{contentReact}</>
}