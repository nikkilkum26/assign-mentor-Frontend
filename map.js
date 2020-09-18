async function mapVal()
        {
            let mentorId;
            try
            {
                var data={
                    studId: document.getElementById("studentname").value,
                    mentorId:document.getElementById("mentorname").value
                }
                mentorId=document.getElementById("mentorname").value;
                await fetch("https://assignmentorbe.herokuapp.com/merge",{
                    method:"PUT",
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                getStudent(mentorId);
                alert("Mentor assigned");
            }
            catch(error)
            {
                console.log(error);
            }
        }
        async function getStudent(mentorId)
        {
            try
            {
                let mentorfetch=await fetch("https://assignmentorbe.herokuapp.com/merge/"+mentorId);
                mentorData=await mentorfetch.json();
                
                for(let i=0;i<mentorData.students.length;i++)
                {
                    var row=document.createElement("tr");
                    var id1=document.createElement("td");
                    id1.innerText=mentorData["_id"];
                    var name1=document.createElement("td");
                    name1.innerText=mentorData["name"];
                    var id2=document.createElement("td");
                    id2.innerText=mentorData.students[i]["_id"];
                    var name2=document.createElement("td");
                    name2.innerText=mentorData.students[i]["name"];
                    row.appendChild(id1);
                    row.appendChild(name1);
                    row.appendChild(id2);
                    row.appendChild(name2);
                    document.getElementById("studentInfo").appendChild(row);
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }