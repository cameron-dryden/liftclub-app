import pb from "../base";

async function signupUser(userData) {
  const userInfo = {
    name: userData.name,
    surname: userData.surname,
    email: userData.email,
    emailVisibility: true,
    password: userData.password,
    passwordConfirm: userData.passwordConfirm,
  };

  try {
    const record = await pb.collection("users").create(userInfo);
    return true;
  } catch (error) {
    return error;
  }
}

export default signupUser;
