let myLeads = `["www.awesomelead.com"]`

myLeads = JSON.parse(myLeads)
myLeads.push("imissyou")
console.log(myLeads)

myLeads = JSON.stringify(myLeads)
console.log(myLeads)