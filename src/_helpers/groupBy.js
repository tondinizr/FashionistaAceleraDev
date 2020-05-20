export const groupBy = key => array => 
  array.reduce(
    (objectsByKeyValues, obj) => ({
      ...objectsByKeyValues,
      [obj[key]]: (objectsByKeyValues[obj[key]] || []).concat(obj)      
    }),
    {}
  )