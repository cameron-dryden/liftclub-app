import pb from "../base";

async function signupUser(userData) {
  const userInfo = {
    emailVisibility: true,
    name: userData.name,
    surname: userData.surname,
    main_email: userData.main_email,
    password: userData.password,
    passwordConfirm: userData.passwordConfirm,
    institution: userData.institution,
    email: userData.email,
    phone_number: userData.phone_number,
    date_of_birth: userData.date_of_birth,
  };

  try {
    const record = await pb.collection("users").create(userInfo);
    return true;
  } catch (error) {
    return error;
  }
}

export default signupUser;
