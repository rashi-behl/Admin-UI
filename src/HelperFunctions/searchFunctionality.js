export const searchFunctionality = (searchText, users) => {
    let tempSearch = searchText.toLowerCase();
    return users.map((user) => {
      if (
        user.name.toLowerCase().includes(tempSearch) ||
        user.email.toLowerCase().includes(tempSearch) ||
        user.role.toLowerCase().includes(tempSearch)
      ) {
        user.show = true;
        return user;
      }
      user.show = false;
      return user;
    });
  };
  