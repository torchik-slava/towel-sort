module.exports = function towelSort (matrix) {
    if(!matrix)  return [];
    return matrix.map((item, index)=> index % 2 !== 0 ? item.sort((a,b)=>b-a) : item).flat();    
}
