/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let direction = "goRight";
  let i = top;
  let j = left;
  let resArr = [];

  while (left <= right && top <= bottom) {
    if (direction === "goRight") {
      while (j <= right) {
        resArr.push(matrix[i][j++]);
      }
      top++;
      i++;
      j--;
      // console.log(matrix[i][j], i, j,top,bottom);
      direction = "goBottom";
    } else if (direction === "goBottom") {
      while (i <= bottom) {
        resArr.push(matrix[i++][j]);
      }
      right--;
      i--;
      j--;
      direction = "goLeft";
    } else if (direction === "goLeft") {
      while (j >= left) {
        resArr.push(matrix[i][j--]);
      }
      bottom--;
      i--;
      j++;
      direction = "goTop";
    } else if (direction === "goTop") {
      while (i >= top) {
        resArr.push(matrix[i--][j]);
      }
      left++;
      i++;
      j++;
      direction = "goRight";
    }
  }
  return resArr;
};
