var API = function() {
  var roles = [
    'Data Scientist',
    'Designer',
    'Developer',
    'Devops',
    'Engineer',
    'Intern',
    'Marketing',
    'Management',
    'Misc',
    'Product Manager',
    'Product Research',
    'Project Manager',
    'QA',
    'Quant',
    'Sales',
    'Software Architect'
  ];

  var users = [];

  return {
    getRoles: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(roles);
        }, 200);
      });
    },

    getUsers: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(users);
        }, 280)
      });
    },

    saveUser: function(email, role) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          var user = {
            id: Math.floor(Math.random() * 1000),
            email: email,
            role: role
          };
          users.push(user);
          resolve(user);
        }, 200);
      });
    }
  }
}();
