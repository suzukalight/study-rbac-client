interface PostsEditParams {
  userId: string;
  postOwnerId: string;
}

export interface UserRule {
  static?: string[];
  dynamic?: {
    [key: string]: Function;
  };
}

export interface Rule {
  [key: string]: UserRule;
}

const rules: Rule = {
  visitor: {
    static: ['posts:list', 'home-page:visit'],
  },
  writer: {
    static: [
      'posts:list',
      'posts:create',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
    dynamic: {
      'posts:edit': ({ userId, postOwnerId }: PostsEditParams) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
    },
  },
  admin: {
    static: [
      'posts:list',
      'posts:create',
      'posts:edit',
      'posts:delete',
      'users:get',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
  },
};

export default rules;
