import pb from "../base";

async function forgotPassword(email) {
  try {
    const authData = await pb.collection("users").requestPasswordReset(email);
    return true;
  } catch (error) {
    return error;
  }
}

export default forgotPassword;
