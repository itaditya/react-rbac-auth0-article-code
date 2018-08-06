/*
** Available Resources **
 * posts
 * users
 * home-page
 * dashboard-page

** Possible Actions **
 * list
 * create
 * get
 * getSelf - to get self details only (for user resource only)
 * edit
 * delete
 * visit - to access route (for page type resources only)
*/


const rules = {
  visitor: {
    static: ['posts:list', 'home-page:visit']
  },
  writer: {
    static: [
      'posts:list',
      'posts:create',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit'
    ],
    dynamic: {
      'posts:edit': ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
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
      'dashboard-page:visit'
    ]
  }
};

export default rules;
