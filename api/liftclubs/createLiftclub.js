import pb from "../base";

async function createLiftclub(liftclubData) {
  const liftclubInfo = {
    name: liftclubData.liftclubName,
    location: liftclubData.location,
  };

  try {
    liftclubInfo.owner = pb.authStore.model.id;
    const record = await pb.collection("liftclubs").create(liftclubInfo);
    return true;
  } catch (error) {
    return error;
  }
}

export default createLiftclub;
