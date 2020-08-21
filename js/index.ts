import Suduku from './suduku.js';

const suduku = new Suduku();

interface processInnerVal {
    is_set: boolean,
    value: number,
}

/* 游戏难度 */
const Empty: number = 15;

/* 生成1-9随机数 */
function genRandomOTN():number {
    return Math.floor(Math.random() * 9) + 1;
};

/* 生成游戏棋盘 */
function genGame():void {
    let initArr: number[][] = [];
    for (let i = 0; i < 9; i++) {
        let innerArr: number[] = [];
        for (let x = 0; x < 9; x++) {
            initArr.push([i, x]);
        }
        initArr.push(innerArr);
    }
    suduku.initData(initArr);
    let list = suduku.recursionGetResult().reduce((pre: processInnerVal[][], cur: processInnerVal[]) => {
        const arr = cur.reduce((prev, curV: processInnerVal) => {
            prev.push(curV.value);
            return prev;
        }, [])
        pre.push(arr);
        return pre;
    }, []);
    let count = 0, newArr:number[][] = [];
    try {
        list.forEach(item => {
            let tempArr = [];
            item.forEach(ite => {
                if (count < Empty && genRandomOTN() > 5) {
                    count++;
                    tempArr.push(0);
                } else {
                    tempArr.push(ite);
                }
            })
            newArr.push(tempArr);
        })
    } catch (e) {
    }
    reSetHtml(newArr);
};

// 为棋盘添加指定数字
function reSetHtml(list:number[][]):void{

};


genGame();
