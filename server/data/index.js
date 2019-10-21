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
    const data = {
      blog: []
    };
    console.log()
    // Create 100 users
    for (let i = 0; i < 100; i++) {
      data.blog.push(casual.blog);
    }
    return data;
  };
  