let cvsdata=`ID,Name,Occupation,Age\n 42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
//console.log(arraydata)
//let cells= []
/*let rowdata= []
let cellvalue=" "
let cellct
let columnct=0
let i=0
for( i=0;i< cvsdata.length;i++)
    {
       let char=cvsdata[i]
       //console.log(char)
       if(char === ",")
       {
           rowdata.push(cellvalue)
           cellvalue=" "
           cellct++
           columnct++
           console.log(`rowdata:${rowdata}`)
       }
       else if(char==="\n")
       {
           rowdata.push(cellvalue)
           //cells.join(",")
           console.log(rowdata[0],rowdata[1],rowdata[2],rowdata[3])
            console.log(cellvalue)
           rowdata=[]
           cellvalue=" "
           cellct=0
           columnct++
           console.log(`Column count:${columnct}`)
       }
       else
       {
           cellvalue +=char
           //console.log(char)
       }

   }
   if (cellvalue !== "")
   {
    rowdata.push(cellvalue)
       console.log(rowdata[i])
      // columnct++
       //console.log(`Column count:${columnct}`)
   }*/

//part2 assignment
/*let rows =cvsdata.split('\n')
let twoD=[]
for (let i=0;i<rows.length;i++)
{
    let twoDrow=rows[i].split(',')
    twoD.push(twoDrow)
    console.log(twoD)
}*/

//Part 3 assigenment
const rows = cvsdata.split('\n')
const headers = rows[0].split(',')
// console.log(headers)
const result = []
for (let i = 1; i < rows.length; i++) {
  const row = rows[i].split(',')
  const obj = {}
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j].toLowerCase()] = row[j]
  }
  result.push(obj)
}
console.log(result)

//var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];
//removeByAttr(result, 'id', 98);   
// [{id:2,name:'alfalfa'}, {id:3,name:'joe'}]

//part 4 assigenment
let data=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

  //  data.pop()
//console.log(`Removed data:${data}`)
let  insertobj={ id: "8", name: "harry", occupation: "swimmer", age: "26" }
let  insertobjattheend={ id: "9", name: "Sam", occupation: "pumbler", age: "27" }

//data.splice(1,0,insertobj)
data.push(insertobjattheend)
console.log(data)
