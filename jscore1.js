function getNormUser(user) {
  // user.username = user.username.toLowerCase();
  // return {...user, username: user.username.toLowerCase(), id:30};
  const user1 = JSON.parse(JSON.stringify(user));
  user1.username = user1.username.toLowerCase();
  return user1;
}

const u = {
  id: 12,
  username: "SomeUSer",
};

const u2 = getNormUser(u);

console.log(u, u2);
