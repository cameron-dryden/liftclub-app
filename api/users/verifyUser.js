import pb from "../base";

async function verifyUser(email) {
  try {
    await pb.collection("users").requestVerification(email);
    return true;
  } catch (error) {
    return error;
  }
}

export default verifyUser;
