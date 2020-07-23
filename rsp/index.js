const computerTag = document.querySelector('#computer')
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  0 0`

const rspCoord = {
    rock: '0px',
    scissors: '-143px',
    paper: '-286px',
}

let coord = '0px'
setInterval(() => {
    if (coord === rspCoord['rock']) {
        coord = rspCoord['scissors']
    } else if (coord === rspCoord['scissors']) {
        coord = rspCoord['paper']
    } else if (coord === rspCoord['paper']) {
        coord = rspCoord['rock']
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${coord} 0`
}, 1000);