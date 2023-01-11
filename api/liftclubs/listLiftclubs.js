import pb from "../base";

async function listLiftclubs(listFilter) {
  try {
    const records = await pb.collection("liftclubs").getFullList(200, {
      filter: listFilter ? listFilter : "",
      //   sort: sort ? listSort : "",
    });
    return records;
  } catch (error) {
    return error;
  }
}

export default listLiftclubs;
