import{W as g,h as t,t as i,s as n,a as u}from"./index.9c37cd5e.js";import"./admin-docs.eb2437f0.js";import"./index.00ea1e07.js";import"./container.e93fe2c1.js";import"./index.esm.e961753a.js";import"./___vite-browser-external_commonjs-proxy.48fd82b4.js";var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=(d,a,s,e)=>{for(var r=e>1?void 0:e?c(a,s):a,o=d.length-1,b;o>=0;o--)(b=d[o])&&(r=(e?b(a,s,r):b(r))||r);return e&&r&&p(a,s,r),r};const m="bar-chart";let l=class extends g{constructor(){super(...arguments),this.options={legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-bar id="myBar" width="600" height="300" data="{
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}"
    options="{
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}"></o-bar>
  \`\`\`
  `}installed(){}render(){return t("code-demo-container",null,t("code-demo",{title:"\u67F1\u72B6\u56FE",describe:"\u67F1\u72B6\u56FE\u663E\u793A",code:this.mdA},t("div",{slot:"demo",class:i`px-3 py-5`},t("o-bar",{id:"myBar",width:"560",height:"300",data:this.data,options:this.options}))))}};l.css=[n.target];l=h([u(m)],l);export{l as default};