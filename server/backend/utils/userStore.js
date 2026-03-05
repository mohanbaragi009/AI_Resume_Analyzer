// In-memory user store (replaces MongoDB for offline usage)
let users = [];

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const createUser = (name, email, hashedPassword) => {
  const user = {
    _id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    createdAt: new Date()
  };
  users.push(user);
  return user;
};

export const getUserById = (id) => {
  return users.find(user => user._id === id);
};

export const getAllUsers = () => {
  return users.map(({ password, ...user }) => user);
};

// Optional: Clear users (useful for testing)
export const clearUsers = () => {
  users = [];
};
