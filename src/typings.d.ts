interface User {
  id: string;
  email: string;
  role: string;
}

interface Post {
  id: string;
  title: string;
  ownerId: string;
}
