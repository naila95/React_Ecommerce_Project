export default async function FileConverter(arr) {
  let myArr = arr.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  });
  let convertedFiles = await Promise.all(myArr);
  return convertedFiles;
}
