//Drill 3

const binaryTree = require('./binaryTree');


let numberTree = new binaryTree();

numberTree.insert(3,3);
numberTree.insert(1,1);
numberTree.insert(4,4);
numberTree.insert(6,6);
numberTree.insert(9,9);
numberTree.insert(2,2);
//numberTree.insert(5,5);
//numberTree.insert(7,7);

//console.log(numberTree);


let charTree = new binaryTree();

charTree.insert('E','E');
charTree.insert('A','A');
charTree.insert('S','S');
charTree.insert('Y','Y');
charTree.insert('Q','Q');
charTree.insert('U','U');
charTree.insert('E','E');
charTree.insert('S','S');
charTree.insert('T','T');
charTree.insert('I','I');
charTree.insert('O','O');
charTree.insert('N','N');


//console.log(charTree);


//Drill 4

/*

what does this do:

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

-- I think it takes the root node's value, left and right values and adds them together

*/


//Drill 5


function findHeight(treeNode){

    if(treeNode === null){
	return 0;
    }else{
	let leftBranch = findHeight(treeNode.left);
	let rightBranch = findHeight(treeNode.right);

	if(leftBranch > rightBranch){
	    return leftBranch + 1;
	}else{
	    return rightBranch + 1;
	}
    }
}


//let test = findHeight(numberTree);

//console.log(test);




//Drill 6

function isBinary(treeNode){

    if( treeNode.left === null && treeNode.right === null){
	return true;
    }else{
	let isLeftTrue = false;
        let isRightTrue = false;

	if(treeNode.left !== null){
	    isLeftTrue = treeNode.left.value < treeNode.value ? true : false;
	}else{
	    isLeftTrue = true;
	}


	if(treeNode.right !== null){
	    isRightTrue = treeNode.right.value > treeNode.value ? true : false;
	}else{
	    isRightTrue = true;
	}

	if( !isRightTrue || !isLeftTrue ){
	    return false;
	}else{
	    return true;
	}
    }
}


//console.log(isBinary(numberTree));



/*
//Drill 7

function sortTree(treeNode, list){
    if(treeNode === null){
	return null;
    }else{
	if(list.length === 0){
            list.push(treeNode.value);
	}

	let right = sortTree(treeNode.right,list);
	let left = sortTree(treeNode.left,list);
	let rightVal = 0;
	let leftVal = 0;
	let toAdd = 0;

	if(treeNode.right !== null){
	    rightVal = treeNode.right.value;	    
	}

	if(treeNode.left !== null){
	    leftVal = treeNode.left.value;
	}

	if( rightVal > 0){
	    list.push(rightVal);
	}
	if( leftVal > 0) {
	    list.push(leftVal);
	}

	for(let i = 0; i < list.length; i++){
	    for(let j = 0; j < list.length; j++){
	        if (list[i] > list[j]) {
          	    let x = list[i];
          	    list[i] = list[j];
          	    list[j] = x;
		}
	    }
	}
	return list;
    }
}

let test = sortTree(numberTree,[]);
console.log(test[2]);
*/


/*
//Drill 8
function isBalanced(treeNode){
    
    if(treeNode === null){
        return 0;
    }else{
        let leftBranch = isBalanced(treeNode.left);
        let rightBranch = isBalanced(treeNode.right);
	let heightDiff = leftBranch - rightBranch;

	if( Math.abs(heightDiff) > 2){
	    return false;
	}else{
	    return Math.max(leftBranch,rightBranch) + 1;
        }
    }
}

console.log(isBalanced(numberTree));

*/


//Drill 9

function buildFakeBST(bst){
    let result = "";
    let head = bst.shift();
    let mainLeft = [];
    let mainRight = [];

	result = head;

    while(bst.length > 0){
	let tmp = bst.shift();
	if(tmp > head){//right branch stuff
            if(mainRight.length === 0){
                mainRight.push(tmp);
                mainRight.push(null);
                mainRight.push(null);
            }else if( tmp < mainRight[0] ){
                let rightInsert = false;
                while(rightInsert === false){
                    for(let i=1; i<mainRight.length; i+2){
                        if(mainRight[i] === null){
                            mainRight.splice(i,1, tmp, null,null);
			    rightInsert = true;
                                break;
                        }
                    }
                }
            }else if(tmp > mainRight[0] ){
                let rightInsert = 0;
                while(rightInsert === 0){
                    for(let i=2; i<mainRight.length; i+2){
                        if(mainRight[i] === null){
                            mainRight.splice(i, 1,tmp,null,null);
			    rightInsert = true;
                            break;
                        }
                    }
                }
            }
	}else{
	    if(mainLeft.length === 0){
	        mainLeft.push(tmp);
		mainLeft.push(null);
		mainLeft.push(null);
	    }else if( tmp < mainLeft[0] ){
		let leftInsert = false;
		while(leftInsert === false){
		    for(let i=1; i<mainLeft.length; i+2){
			if(mainLeft[i] === null){
			    mainLeft.splice(i,1, tmp, null,null);
			    leftInsert = true;
				break;
			}
		    }
		}
	    }else if(tmp > mainLeft[0] ){
                let leftInsert = 0;
                while(leftInsert === 0){
                    for(let i=2; i<mainLeft.length; i+2){
                        if(mainLeft[i] === null){
			    mainLeft.splice(i, 1,tmp,null,null);
			  
                            leftInsert = 1;
				break;
                        }
                    }
                }
            }
	}	
    }

    let left = mainLeft.join('');
    result = result + left;

    let right = mainRight.join('');
    result = result + right;
console.log(result);
    return result;
}



let bst1 = [3,5,4,6,1,0,2];
let bst2 = [3,1,5,2,4,6,0];

let bst1_list = buildFakeBST(bst1);
let bst2_list = buildFakeBST(bst2);

if( bst1_list === bst2_list){
console.log('yay');
}else{
console.log('nah');
}



















