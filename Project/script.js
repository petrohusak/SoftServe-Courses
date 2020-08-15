document.getElementById(`addButton`).addEventListener(`click`, hideFirstField);
document.getElementById(`newAddButton`).addEventListener(`click`, showFirstField);
document.getElementById(`newAddButton`).addEventListener(`click`, createNewDevice);

document.getElementById(`secondLineSecondColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`secondLineThirdColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`thirdLineFirstColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`thirdLineSecondColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`thirdLineThirdColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fourthLineFirstColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fourthLineSecondColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fourthLineThirdColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fifthLineFirstColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fifthLineSecondColumn`).addEventListener(`click`, changeButtonColor);
document.getElementById(`fifthLineThirdColumn`).addEventListener(`click`, changeButtonColor);


let allDevices = [];
let deviceName = Symbol(`deviceName`);
let currentStatus = Symbol(`currentStatus`);

function hideFirstField() {
    document.getElementById(`firstFieldVisible`).id = 'firstFieldHidden';
    document.getElementById(`addFieldHidden`).id = 'addFieldVisible';
    document.getElementById(`nameInput`).value = ``;
}

function showFirstField() {
    if(document.getElementById(`nameInput`).value == ``){
        alert(`You must fill in the field with the device name`);
    } else {
        document.getElementById(`firstFieldHidden`).id = 'firstFieldVisible';
        document.getElementById(`addFieldVisible`).id = 'addFieldHidden';
    }
}

function changeButtonColor(event) {
    if(event.currentTarget.className == `whiteBackground`) {
        event.currentTarget.className = `greenBackground`;
    } else if(event.currentTarget.className == `greenBackground`) {
        event.currentTarget.className = `whiteBackground`;
    }
}

function createNewDevice() {
    if(document.getElementById(`nameInput`).value != ``){
        let newDevice = {
            [deviceName]: document.getElementById(`nameInput`).value,
            [currentStatus]: `Active`,
        };

        let greenFields = document.getElementsByClassName(`greenBackground`);

        for(let i = 0; i < greenFields.length; i++){
            
            switch(greenFields[i].innerHTML){
                case `Activate/Deactivate`:
                    newDevice.activate = `Active`;
                    newDevice.deactivate = `Not active`;
                    break;
                case `Open settings`:
                    newDevice.openSettings = `Settings have been opened`;
                    break;
                case `Change the temperature`:
                    newDevice.addTemperature = `Increases temperature`;
                    newDevice.reduceTheTemperature = `Reduces temperature`;
                    break;
                    
                default:
                    break;
            }
        }

        allDevices[allDevices.length] = newDevice;
        console.log(allDevices);
        addDevices();
    }
}



function addDevices() {
    document.getElementById(`table`).innerHTML = ``;

    let counter = 0;

    if(allDevices.length != 0) {
        for(let i = 0; i < allDevices.length; i++) {
            let buffer = document.getElementById(`table`).innerHTML;

            document.getElementById(`table`).innerHTML = buffer + `<tr class = "${counter}">
            <td>${allDevices[i][deviceName]}</td>
            <td id = "statusTd${counter}">${allDevices[i][currentStatus]}</td>
            <td class = "selectorTd${counter}"></td>
            <td><button id = "button${counter}" onclick = "changeStatus(${counter})">Change status</button></td>
            </tr>`;

            buffer = document.getElementById(`table`).innerHTML;

            let newSelect = document.createElement(`select`);
        
            for(let j in allDevices[i]) {
                let newOption = new Option(`${allDevices[i][j]}`);
                newSelect.append(newOption);
            }

            let newOption = new Option(`Delete`);
            newSelect.append(newOption);

            document.getElementsByClassName(`selectorTd${counter}`)[0].append(newSelect);

            counter++;
        }
    }
}

function changeStatus(i) {
    let newStatusSelector = document.getElementsByTagName(`select`)[i];
    let newStatus = newStatusSelector.options[newStatusSelector.selectedIndex].text

    if(newStatus != `Delete`) {
        switch(newStatus){
            case `Active`:
                document.getElementById(`statusTd${i}`).innerHTML = `Active`;
                allDevices[i][currentStatus] = `Active`;
                break;
            case `Not active`:
                document.getElementById(`statusTd${i}`).innerHTML = `Not active`;
                allDevices[i][currentStatus] = `Not active`;
                break;
            default:
                break;
        }
    } else {
        allDevices.splice(i, 1);
        addDevices()
    }
}