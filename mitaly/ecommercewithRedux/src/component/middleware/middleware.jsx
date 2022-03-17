
export const work = async (chooseFunction,dispatch) => {
    try {
    dispatch({
        type: 'setId',
        payload: await chooseFunction,
      });
    } catch (error) {
    return alert(error.message);
    }
};
export const workB =async(chooseFunction)=>{
    try {
        console.log(await chooseFunction,'===setvalue');
        } catch (error) {
        return alert(error.message);
        }
}