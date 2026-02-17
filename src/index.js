const _ = require("lodash");

function pickKeys(obj, keys) {
  return _.pick(obj, keys);
}

function sortByKey(obj) {
  const keys = _.sortBy(_.keys(obj));
  return _.fromPairs(_.map(keys, (k) => [k, obj[k]]));
}

function formatConfig(obj, options = {}) {
  let result = _.cloneDeep(obj);
  if (options.pick) {
    result = pickKeys(result, options.pick);
  }
  return sortByKey(result);
}

module.exports = { pickKeys, sortByKey, formatConfig };

if (require.main === module) {
  const input = process.argv[2];
  if (!input) {
    console.error("Usage: node index.js <json-string>");
    process.exit(1);
  }
  try {
    const data = JSON.parse(input);
    const formatted = formatConfig(data);
    console.log(JSON.stringify(formatted, null, 2));
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
