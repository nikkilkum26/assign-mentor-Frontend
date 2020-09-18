
async function createStudent() {
    try {

        let data = {
            name: document.getElementById("getval").value,
            students: []

        }

        await fetch("http://localhost:3001/students",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        alert("done!");
        

    }
    catch (err) {
        res.json("something went wrong");
    }
}

async function getStud()
        {
            let data;
            try
            {
                let f=await fetch("http://localhost:3001/students");
                data = await f.json();
              
                for(let i=0;i<data.length;i++)
                {
                 
                    let row=document.createElement("tr");
                    let id=document.createElement("td");
                    id.innerText=data[i]["_id"];
                    let name=document.createElement("td");
                    name.innerText=data[i]["name"];
                    let mentor=document.createElement("td");
                    if(data[i].mentor!==undefined)
                    {
                        mentor.innerText = data[i]["mentor"]["name"];
                         }
                    else
                    mentor.innerText="Unassigned";
                    row.appendChild(id);
                    row.appendChild(name);
                    row.appendChild(mentor);
                    document.getElementById("student").appendChild(row);
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }
        getStud();