type UserRole = "guest" | "member" | "admin";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId: number = 1;

const users: User[] = [
  { id: nextUserId++, username: "johm_doe", role: "member" },
  { id: nextUserId++, username: "jane_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
];

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
};

function updateUser(id: number, updates: UpdatedUser) {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error(`User not found`);
    return;
  }
  Object.assign(user, updates);
}

const addNewUser = (newUser: Omit<User, "id">): User => {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
};

updateUser(1, { username: "Updated john_doe" });
updateUser(3, { username: "Updated guest_user" });

addNewUser({ username: "Mukul Joshi", role: "admin" });

console.log(users);
