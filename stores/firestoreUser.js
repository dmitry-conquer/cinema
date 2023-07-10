export const useFirebaseStore = defineStore("firebaseStore", () => {
  const currentUser = ref();
  const updateUser = async user => {
    currentUser.value = user;
  };

  return {
    currentUser,
    updateUser,
  };
});
