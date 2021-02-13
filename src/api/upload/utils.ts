
// export const diskStorage = (p: { filename: (req, file, callback) => void; destination: string }) => {
//   console.log('diskStorage invoked');
// }

export const textFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(txt)$/)) {
    return callback(new Error('Only txt files are allowed!'), false);
  }
  callback(null, true);
}

export const editFilename = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}.${fileExtName}`);
};

const extname = (originalname: any): string => {
  return originalname.split('.').pop();
}
