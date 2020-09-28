/*
Задание 2
Перепиши функцию toggleUserState() так, 
чтобы она не использовала callback-функцию callback, 
а принимала всего два параметра allUsers и userName и возвращала промис.
*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updateUser = user => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(user.name === userName ? { ...user, active: !user.active } : user);
      }, 500);
    });
  };

  const updatedUsers = allUsers.map(updateUser);
  return Promise.all(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Должно работать так
 */

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
