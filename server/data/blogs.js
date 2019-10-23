const casual = require('casual');

module.exports = () => {
    casual.define("blog", function(i) {
      return {
        title: casual.title,
        short_description: casual.short_description,
        description: casual.description,
        sentences: casual.sentences(n = 30),
      };
    });
    const data = {
        blogs: []
    }
    for (let i = 0; i < 10; i++) {
        data.blogs.push(casual.blog);
    }
    return data;
  };
  