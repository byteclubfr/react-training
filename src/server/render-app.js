import { readFileSync } from 'fs'

const INDEX_HTML = readFileSync(__dirname + '/../../static/index.html', 'utf8')

export default (req, res) => {
  res.send(INDEX_HTML)
}
