const FileBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result as string;

      resolve(baseURL);
      return baseURL;
    };
    // console.log(fileInfo);
    // //console.log(baseURL);
    // return baseURL;
  });
};

export default FileBase64;
