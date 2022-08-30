let bill = document.querySelector('#bill')
let persons = document.querySelector('#persons')
let buttons = document.querySelector('div#bex')
let reset = document.querySelector('#reset')
let tperperson = document.querySelector('#tperperson')
let perperson = document.querySelector('#perperson')
let err = document.querySelector('#err')
let err2 = document.querySelector('#err2')
const newelem = document.createElement("input")

function newelesty(){
newelem.style.textAlign = "right"
newelem.style.color = "hsl(183 100% 15%)"
newelem.style.fontWeight = "900"
newelem.style.paddingRight = "10px"
newelem.style.fontSize = "18px"
newelem.style.outline = "2px solid hsl(183 100% 15%)"
newelem.style.borderRadius = "8px"
}



let butt5 = {
  li: 0,
  ni: 5,
 dom: buttons.children[0],
 stat: false
}

let butt10 = {
  li: 1,
  ni: 10,
  dom: buttons.children[1],
  stat: false
 }

 let butt15 = {
  li: 2,
  ni: 15,
  dom: buttons.children[2],
  stat: false
 }

 let butt25 = {
  li: 3,
  ni: 25,
  dom: buttons.children[3],
  stat: false
 }

 let butt50 = {
  li: 4,
  ni: 50,
  dom: buttons.children[4],
  stat: false
 }

 let custom = {
  li: 5,
  ni: 5,
  dom: buttons.children[5],
  stat: false
 }

console.log()

let inp = []

function calc(){

  if(newelem.value === '')
   {
    return ((inp[inp.length -1]/100 * bill.value).toFixed(2))
   }else{
    inp.push(parseInt(newelem.value))
    return ((inp[inp.length -1]/100 * bill.value).toFixed(2)) 
   }

}
let totalam = function(){
  return ((calc()/persons.value).toFixed(2))
}


function exec(){

}


function change(){
  buttons.replaceChild(newelem, buttons.children[5])
}


function bout(v){
  let i = v.li
       if(i != 5){
        inp.push(v.ni)
       }
       else{
       change()
       newelesty()
       }
}
function rese(){
 if(bill.value === '' || persons.value === ''){
  if(bill.value === '' && persons.value === ''){
    persons.style.outline = "2px solid red"
    bill.style.outline = "2px solid red"
    err.textContent = "Can't be 0"
    err2.textContent = "Can't be 0"
    err.style.color = "red"
    err2.style.color = "red"
  }
    else if(persons.value === '' && bill.value !== ''){
      persons.style.outline = "2px solid red"
  err2.textContent = "Can't be 0"
  err2.style.color = "red"
}else{
  bill.style.outline = "2px solid red"
  err.textContent = "Can't be 0"
  err.style.color = "red"
}
 }else{ 
  if(inp.length === 0){
    alert('Please select a percentage')
  }else{
    bill.style.outline = "2px solid hsl(183, 100%, 15%)"
    persons.style.outline = "2px solid hsl(183, 100%, 15%)"
  err.textContent = ''
  err2.textContent = ''
 tperperson.textContent = `$${calc()}`
 perperson.textContent = `$${totalam()}`
// console.log(calc())
}
}
}