import pb from "../base";

async function loginUser(email, password) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return true;
  } catch (error) {
    return error;
  }
}

export default loginUser;
