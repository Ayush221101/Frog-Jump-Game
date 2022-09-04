// let platforms_array = [1,1,2,2,1,3,1,2,1,3,2];
// moves = solveProblem(platforms_array);

function solveProblem(input_arr){
    let res = [];
    for(let i=0;i<30;i++){
        res.push([1000,-1]);
    }
    res[0][0] = 0;
    for(let i=0;i<29;i++){
        const jump = input_arr[i];
        for(let j=1;j<=jump && i+j<30;j++){
            if(res[i+j][0] > res[i][0]+1){
                res[i+j][0] = res[i][0]+1;
                res[i+j][1] = j;
            }
        }
    }
    
    let ans = [];
    let end = 29;
    while(end>0){
        ans.push(res[end][1]);
        end -= res[end][1];
    }
    return ans.reverse();
}
