export const work = (payload) => ({
  type: "setProductList",
  payload: payload,
});
export const workB = async (chooseFunction) => {
  try {
    console.log(await chooseFunction, "===setvalue");
  } catch (error) {
    return alert(error.message);
  }
};
