//Problem Statement


//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

const commonFriendShow = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriend = [];

  //0(n^2) for nested loop
  usersA.forEach((usersA) => {
    usersB.forEach((usersB) => {
      if (usersA.id == usersB.id) {
        commonFriend.push(usersA);
      }
    });
  });

  const endTime = performance.now();

  return { count: commonFriend.length, timeTookFinish: endTime - startTime };
};

console.log(commonFriendShow(usersA, usersB));




const commonFriendShow2 = (usersA, usersB) => {
  const startTime = performance.now();

  const commonFriend = [];

  //* O(n)
  const idList = new Set(usersA.map((user) => user.id));

  //* O(n)
  usersB.forEach((usersB) => {
    //* O(1) lookup
    if (idList.has(usersB.id)) {
      commonFriend.push(usersB);
    }
  });

  const endTime = performance.now();

  return { count: commonFriend.length, timeTookFinish: endTime - startTime };
};

console.log(commonFriendShow2(usersA, usersB));
