const btn = document.querySelector('.btn-outline-secondary')
loadFunctions()
const doubleIt = document.querySelector('.education-box')

function loadFunctions() {
    btn.addEventListener('click', moreField)
}
function moreField(e) {
    const MainDiv = document.createElement('div')
    MainDiv.className = "education-box"
    MainDiv.setAttribute("style", "margin-top: 10px;");

    // 3Col under row div
    const rowF = document.createElement('div')
    rowF.className = "row"


    // 3col individual - 1
    const colF = document.createElement('div')
    colF.className = "col"

    const divCN = document.createElement('div')
    divCN.className = "text"
    divCN.innerHTML = "<p>Course name</p>"

    // INPUT ELEMENT
    const input = document.createElement('INPUT')
    input.setAttribute("type", "text")
    input.setAttribute("name", "subject")
    input.className = "form-control"

    // 3col individual - 2
    const colS = document.createElement('div')
    colS.className = "col"

    const divG = document.createElement('div')
    divG.className = "text"
    divG.innerHTML = "<p>Grade(CGPA/GPA)</p>"

    const input1 = document.createElement('INPUT')
    input1.setAttribute("type", "text")
    input1.setAttribute("name", "subject")
    input1.className = "form-control"

    // 3col individual - 3
    const colT = document.createElement('div')
    colT.className = "col"

    const divB = document.createElement('div')
    divB.className = "text"
    divB.innerHTML = "<p>Board</p>"

    const input2 = document.createElement('INPUT')
    input2.setAttribute("type", "text")
    input2.setAttribute("name", "subject")
    input2.className = "form-control"

    //2nd row
    const rowS = document.createElement('div')
    rowS.className = "row"

    // 2col individual - 1
    const colSS = document.createElement('div')
    colSS.className = "col-8"

    const divIN = document.createElement('div')
    divIN.className = "text"
    divIN.innerHTML = "<p>Institute name</p>"

    const input3 = document.createElement('INPUT')
    input3.setAttribute("type", "text")
    input3.setAttribute("name", "subject")
    input3.className = "form-control"

    // 2col individual - 2
    const colDD = document.createElement('div')
    colDD.className = "col"

    const divMS = document.createElement('div')
    divMS.className = "text"
    divMS.innerHTML = "<p>Major Subject</p>"

    const input4 = document.createElement('INPUT')
    input4.setAttribute("type", "text")
    input4.setAttribute("name", "subject")
    input4.className = "form-control"




    //Append everything
    //colF
    divCN.appendChild(input)
    colF.appendChild(divCN)
    rowF.appendChild(colF)
    //colS
    divG.appendChild(input1)
    colS.appendChild(divG)
    rowF.appendChild(colS)
    //colT
    divB.appendChild(input2)
    colT.appendChild(divB)
    rowF.appendChild(colT)

    //
    divIN.appendChild(input3)
    colSS.appendChild(divB)
    rowS.appendChild(colSS)
    // 2
    divMS.appendChild(input4)
    colDD.appendChild(divMS)
    rowS.appendChild(colDD)

    MainDiv.appendChild(rowF)
    MainDiv.appendChild(rowS)
    document.body.appendChild(MainDiv)

    e.preventDefault()
}
