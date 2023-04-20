function imageConvert(image) {
  const buffer = Buffer.from(image);
  const base64ImageData = buffer.toString('base64');
  return base64ImageData;
}

module.exports = {
  imageConvert
};