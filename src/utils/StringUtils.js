const StringUtils = {
  camelToTitle: function (camelCase) {
    return camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());
  },
}

export default StringUtils;
