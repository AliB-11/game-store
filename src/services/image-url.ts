const getCroppedImage = (url :string) => {
  
  const index =  url.indexOf('games/');
  const newURL = url.slice(0,index) + 'crop/600/400/' + url.slice(index) 
  return newURL


}

export default getCroppedImage