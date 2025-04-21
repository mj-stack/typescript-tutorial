type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "johm_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }
  return user;
};
