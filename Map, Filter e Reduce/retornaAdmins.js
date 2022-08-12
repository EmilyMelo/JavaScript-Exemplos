function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin'); // .set adiciona usuarios ao array Map
usuarios.set('Valéria', 'Admin');
usuarios.set('Carlos', 'User');

console.log(getAdmins(usuarios));