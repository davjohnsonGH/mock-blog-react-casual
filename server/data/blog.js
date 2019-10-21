const casual = require('casual');

module.exports = () => {
    casual.define("blog", function() {
      return {
        title: casual.title,
        short_description: casual.short_description,
        description: casual.description,
        sentences: casual.sentences(n = 30),
      };
    });
    return casual.blog;
  };
  