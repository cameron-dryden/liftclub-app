import pb from "../base";

async function listInstitutions(listFilter) {
  try {
    const records = await pb.collection("institutions").getFullList(200, {
      filter: listFilter ? listFilter : "",
      //   sort: sort ? listSort : "",
    });
    return records;
  } catch (error) {
    return error;
  }
}

export default listInstitutions;
