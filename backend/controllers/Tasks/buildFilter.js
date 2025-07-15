export const fillterQuery = (query) => {
  const fillter = {};
  const allowerd = [
    "status",
    "claimer",
    "creater",
    // "currency",
    // "category",
  ];

  allowerd.forEach((key) =>{
    if(query[key]){
        fillter[key] = query[key];
    }
  });

  return fillter;

};
