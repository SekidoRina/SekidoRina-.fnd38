'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// let list = [code,main,sub1,sub2,sub3]
   const A = document.getElementsByTagName("h1")[0]
   console.log(A)
   let neko = document.createElement("p")
   neko.textContent = "neko"
   console.log(neko)
//    const rowNum =document.getElementsByClassName("inputRow")
//    console
//     const cells = rowNum[rowNum.length-1].cells
//     const firstcell = cells[0].querySelector("input")
//     const shisancode = firstcell.value
//     shisancode = ""


function addRow(){
   console.log("a")
    let rowNum =document.getElementsByClassName("inputRow");
    let inputRow = rowNum[rowNum.length-1];
    const cells = rowNum[rowNum.length-1].cells;
    const firstcell = cells[0].querySelector("input");
    const shisancode = firstcell.value;
    const newRow = rowNum[rowNum.length-1].cloneNode(true);
    const newcells =newRow.cells;
    for (const num of newcells){
    num.querySelector("input").value=""}

    if ( shisancode !== ""){
        console.log(newRow)
        inputRow.parentNode.insertBefore(newRow,inputRow.nextSibling);
        document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1].addEventListener("input",addRow)
}   
}

document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1 ].cells[0].addEventListener("input",addRow)



function addRow2(){

    let rowNum =document.getElementsByClassName("inputRow");
    let LastRow = rowNum[rowNum.length-1];
    const newRow = LastRow.cloneNode(true);
    console.log(newRow)
    const newcells =newRow.cells;
    console.log(newcells)

    for (const cell of newcells){ 
    cell.querySelector("input").value = ""}

    LastRow.parentNode.insertBefore(newRow,LastRow.nextSibling);
    document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1].addEventListener("input",addRow2)
}   

const tableBody = document.querySelector("#input")

function wait(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}
function csvpaste(e){
  const pasetedText = e.clipboardData.getData("text")
  console.log(pasetedText)
  const row = pasetedText.split("\n").filter(function(mini){
    return mini.trim() !== ""
  })
  console.log(row)
  const table = row.map(function(element){return element.split("\t").map(function(mini){
    return mini.trim()
  })})
  console.log(table)
  let k = 0
  let rowNum = tableBody.querySelectorAll(".inputRow")[k].cells[0].querySelector("input").value
  for (k = 0; rowNum !== ""; k ++){
     rowNum = tableBody.querySelectorAll(".inputRow")[k].cells[0].querySelector("input").value
  } 
  console.log(k)
  
  async function stop() {
    const pasetedcell = e.target;
    await wait(100)
    console.log(pasetedcell.value)
    pasetedcell.value = ""
    console.log(pasetedcell.value)

    await wait(100)

  for (let i = 0; i < table.length ; i ++){
    const element = table[i];
    console.log(element)
    for (let j = 0 ; j < element.length ; j ++){
       const data = element[j]
       console.log(data)
       console.log(tableBody.querySelectorAll(".inputRow")[k+i].cells[j])
          tableBody.querySelectorAll(".inputRow")[k+i].cells[j].querySelector("input").value = data
       }addRow2()
    }
  } stop()
}
tableBody.addEventListener("paste",csvpaste)




// let setubi = document.getElementsByClassName("inputRow")
//     console.log(setubi)
//     for (let k = 0;k < setubi.length;k++){
//         let setubivalue = setubi[k]
//         console.log(setubivalue)
//         for (let i = 0;i < setubivalue.length;i++){
//          let value = setubivalue[i].querySelector("input").value
//          console.log(value)
//         if (i === 0){
//             const code = document.createElement("tr")
//             code.textContent = value
//             console.log(code)
//             document.getElementById("main").appendChild(code)
// function(data)


function makelist(){
    let setubi = document.getElementsByClassName("inputRow")
    console.log(setubi)
    for (let k = 0;k < setubi.length;k++){
        let setubivalue = setubi[k]
        console.log(setubivalue)
        for (let i = 0;i < setubivalue.cells.length;i++){
         let value = setubivalue.cells[i].querySelector("input").value
         console.log(value)
         if(value !== ""){
        async  function stop (){
        if (i === 0){
            const dummycode = document.createElement("tr")
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            dummycode.appendChild(code)
            if(setubivalue.cells[1].querySelector("input").value === "大"){
               document.getElementById("main").appendChild(dummycode)
            } else if (setubivalue.cells[1].querySelector("input").value === "小"){
               document.getElementById("main-s").appendChild(dummycode.cloneNode(true))
            }
            document.getElementById("sub").appendChild(dummycode.cloneNode(true))
            document.getElementById("sub-2").appendChild(dummycode.cloneNode(true))
            document.getElementById("subcode").appendChild(dummycode.cloneNode(true))
            console.log(document.getElementById("main").cells)
         

        } if (i === 2){
            if(setubivalue.cells[1].querySelector("input").value === "大"){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("main").getElementsByTagName("tr")[document.getElementById("main").getElementsByTagName("tr").length-1].appendChild(code)
           } else if (setubivalue.cells[1].querySelector("input").value === "小"){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("main-s").getElementsByTagName("tr")[document.getElementById("main-s").getElementsByTagName("tr").length-1].appendChild(code)
           }
               
        } else if (i === 3){
            if(setubivalue.cells[1].querySelector("input").value === "大"){
             const code = document.createElement("th")
             code.textContent = value
             console.log(code)
             document.getElementById("main").getElementsByTagName("tr")[document.getElementById("main").getElementsByTagName("tr").length-1].appendChild(code)
           } else if (setubivalue.cells[1].querySelector("input").value === "小"){
             const code = document.createElement("th")
             code.textContent = value
             console.log(code)
             document.getElementById("main-s").getElementsByTagName("tr")[document.getElementById("main-s").getElementsByTagName("tr").length-1].appendChild(code)
           }

        } else if (i === 4){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            console.log(document.getElementById("sub").getElementsByTagName("tr")[k+1])
            document.getElementById("sub").getElementsByTagName("tr")[k+2].appendChild(code)
        
        } else if (i === 5){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("sub-2").getElementsByTagName("tr")[k+2].appendChild(code)

        } else if (i === 6){
          const code = document.createElement("th")
          code.textContent = value
          console.log(code)
          document.getElementById("subcode").getElementsByTagName("tr")[k+2].appendChild(code)
        }
}   console.log("aaa")
   stop()
}
}
}
}

function change(){
  document.getElementById("button2").querySelector("img").src = "okasama3.jpg"
  document.getElementById("button2").removeEventListener("click",makelist)

  document.getElementById("message").innerText = "リセットするならリロードするにょろ～"
}


document.getElementById("button2").addEventListener("click",makelist)
document.getElementById("button2").addEventListener("click",change)


function check(){
   async function stop() {
    await wait(100)
  for (let i = 0 ; i <document.getElementById("input").getElementsByClassName("inputRow").length; i++){
    for (let k = 0 ; k <document.getElementById("input").getElementsByClassName("inputRow")[i].cells.length; k++){
       if(k === 0){
         document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText.length === 8;
         let error = document.createElement("p")
         let message =document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText 
         error.innerText = + message + "は英字4文字と数字4文字だよ‼"
         document.getElementById("error").appendChild(error)
      }if(k === 1){
         document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText === "大" ||"小";

      }if(k === 2){
         document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText.length === 4;

      }if(k === 3){
         document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText.length === 2;

      }if(k === 4){
         typeof document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText === "number";

      }if(k === 5){
         typeof document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText === "number";
     
      }if(k === 6){
         typeof document.getElementById("input").getElementsByClassName("inputRow")[i].cells[k].innerText === "number";
     
     }
    }
  }
}
stop()
}
