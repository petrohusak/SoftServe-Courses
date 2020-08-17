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

document.addEventListener("DOMContentLoaded", pageLoaded);


let allDevices = [];
let allDeviceNames = [];
let allDeviceCurrentStatus = [];

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

function changeButtonColorAfterAddDevice() {
    let greenFields = document.getElementsByClassName(`greenBackground`);

    for(let i = greenFields.length - 1; i > -1; i--) {
        greenFields[i].className = `whiteBackground`;
    }
}

function createNewDevice() {
    if(document.getElementById(`nameInput`).value != ``){
        let newDeviceName = document.getElementById(`nameInput`).value;
        let newDevice = {};
        let newDeviceStatus = `Active`;

        newDevice.activate = `Active`;
        newDevice.deactivate = `Not active`;

        let greenFields = document.getElementsByClassName(`greenBackground`);

        for(let i = 0; i < greenFields.length; i++){
            
            switch(greenFields[i].innerHTML){
                // case `Activate/Deactivate`:
                //     newDevice.activate = `Active`;
                //     newDevice.deactivate = `Not active`;
                //     break;
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
        allDeviceNames[allDeviceNames.length] = newDeviceName;
        allDeviceCurrentStatus[allDeviceCurrentStatus.length] = newDeviceStatus;
        
        localStorage.clear();
        localStorage.setItem(`latestList`, JSON.stringify(allDevices));
        localStorage.setItem(`names`, JSON.stringify(allDeviceNames));
        localStorage.setItem(`conditions`, JSON.stringify(allDeviceCurrentStatus));

        changeButtonColorAfterAddDevice();
        refreshDevicesList();
    }
}



function refreshDevicesList() {
    document.getElementById(`table`).innerHTML = ``;

    let counter = 0;

    allDevices = JSON.parse(localStorage.getItem(`latestList`));
    allDeviceNames = JSON.parse(localStorage.getItem(`names`));
    allDeviceCurrentStatus = JSON.parse(localStorage.getItem(`conditions`));        
   

    if(allDevices.length != 0) {
        for(let i = 0; i < allDevices.length; i++) {
            let buffer = document.getElementById(`table`).innerHTML;

            document.getElementById(`table`).innerHTML = buffer + `<tr class = "${counter}">
            <td>${allDeviceNames[i]}</td>
            <td id = "statusTd${counter}">${allDeviceCurrentStatus[i]}</td>
            <td id = "selectorTd${counter}"></td>
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

            document.getElementById(`selectorTd${counter}`).append(newSelect);

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
                allDeviceCurrentStatus[i] = `Active`;
                break;
            case `Not active`:
                document.getElementById(`statusTd${i}`).innerHTML = `Not active`;
                allDeviceCurrentStatus[i] = `Not active`;
                break;
            default:
                break;
        }

        localStorage.clear();
        localStorage.setItem(`latestList`, JSON.stringify(allDevices));
        localStorage.setItem(`names`, JSON.stringify(allDeviceNames));
        localStorage.setItem(`conditions`, JSON.stringify(allDeviceCurrentStatus));

    } else {
        allDevices.splice(i, 1);
        allDeviceNames.splice(i, 1);
        allDeviceCurrentStatus.splice(i, 1);
        

        localStorage.clear();
        localStorage.setItem(`latestList`, JSON.stringify(allDevices));
        localStorage.setItem(`names`, JSON.stringify(allDeviceNames));
        localStorage.setItem(`conditions`, JSON.stringify(allDeviceCurrentStatus));

        refreshDevicesList();
    }   

}

function pageLoaded() {
    refreshDevicesList();
}