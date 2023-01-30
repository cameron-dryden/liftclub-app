import pb from "../base";

async function forgotPassword(email) {
  try {
    const authData = await pb.collection("users").requestPasswordReset(email);
    console.log(authData);
    return true;
  } catch (error) {
    return error;
  }
}

export default forgotPassword;
