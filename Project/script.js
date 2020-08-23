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

document.addEventListener("DOMContentLoaded", pageLoaded);

let allDevices = [];
let allDeviceNames = [];
let allDeviceCurrentStatus = [];

function hideFirstField() {              //the function makes the field with the device added visible, and invisible - with all previously added devices
    document.getElementById(`firstFieldVisible`).id = 'firstFieldHidden';
    document.getElementById(`addFieldHidden`).id = 'addFieldVisible';
    document.getElementById(`nameInput`).value = ``;
}

function showFirstField() {              //function that is inverted to the previous one
    if(document.getElementById(`nameInput`).value == ``){
        alert(`You must fill in the field with the device name`);
    } else {
        document.getElementById(`firstFieldHidden`).id = 'firstFieldVisible';
        document.getElementById(`addFieldVisible`).id = 'addFieldHidden';
    }
}

function changeButtonColor(event) {      //the function changes the color of the button when it is pressed in the add device field
    if(event.currentTarget.className == `whiteBackground`) {
        event.currentTarget.className = `greenBackground`;
    } else if(event.currentTarget.className == `greenBackground`) {
        event.currentTarget.className = `whiteBackground`;
    }
}

function changeButtonColorAfterAddDevice() {  //the function changes the color of the button to white after adding a new device
    let greenFields = document.getElementsByClassName(`greenBackground`);

    for(let i = greenFields.length - 1; i > -1; i--) {
        greenFields[i].className = `whiteBackground`;
    }
}

function createNewDevice() {  // a function that creates a new device by assigning it a name and properties according to the selected ones
    if(document.getElementById(`nameInput`).value != ``){
        let newDeviceName = document.getElementById(`nameInput`).value;
        let newDevice = {};
        let newDeviceStatus = `Activate`;

        newDevice.activate = `Activate`;
        newDevice.deactivate = `Deactivate`;

        let greenFields = document.getElementsByClassName(`greenBackground`);

        for(let i = 0; i < greenFields.length; i++){
            
            switch(greenFields[i].innerHTML){
                case `Open settings`:
                    newDevice.openSetting = `Open settings`;
                    break;
                case `Change the temperature`:
                    newDevice.addTemperature = `Raise the temperature`;
                    newDevice.reduceTheTemperature = `Reduce the temperature`;
                    break;
                    
                case `Operate the curtains`:
                    newDevice.raiseBlinds = `Raise the blinds`;
                    newDevice.lowerBlinds = `Lower the blinds`;
                    break;
                case `Control the light`:
                    newDevice.increaseBrightness = `Increase brightness`;
                    newDevice.reduceBrightness = `Reduce brightness`;
                    break;
                case `Switch channels`:
                    newDevice.goToNextChannel = `Go to the next channel`;
                    newDevice.goToPreviousChannel = `Go to the previous channel`;
                    break;
                case `Get a list of channels`:
                    newDevice.displayChannelsList = `Display a list of channels`;
                    break;
                case `Control the sound`:
                    newDevice.increaseVolume = `Increase the volume`;
                    newDevice.turnDownVolume = `Turn down the volume`;
                    break;
                case `Display temperature`:
                    newDevice.displayTemperature = `Display temperature`;
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

function refreshDevicesList() {      //a feature that deletes and re-creates a list of all available devices and their properties   
    document.getElementById(`table`).innerHTML = ``;

    let counter = 0;

    allDevices = JSON.parse(localStorage.getItem(`latestList`));
    allDeviceNames = JSON.parse(localStorage.getItem(`names`));
    allDeviceCurrentStatus = JSON.parse(localStorage.getItem(`conditions`));        
   

    if(allDevices.length != 0) {
        for(let i = 0; i < allDevices.length; i++) {
            let buffer = document.getElementById(`table`).innerHTML;

            document.getElementById(`table`).innerHTML = buffer + `<tr class = "${counter}">
            <td class = "nameTdStyle" nowrap>${allDeviceNames[i]}</td>
            <td id = "statusTd${counter}" class = "statusTdStyle" nowrap>${allDeviceCurrentStatus[i]}</td>
            <td id = "selectorTd${counter}" nowrap></td>
            <td  class = "buttonStyle" nowrap><button id = "button${counter}" onclick = "changeStatus(${counter})">Change status</button></td>
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

function changeStatus(i) {      //function that changes the status of the device in the list according to the status selected in the drop-down menu
    let newStatusSelector = document.getElementsByTagName(`select`)[i];
    let newStatus = newStatusSelector.options[newStatusSelector.selectedIndex].text

    if(newStatus != `Delete`) {
        switch(newStatus){
            case `Activate`:
                document.getElementById(`statusTd${i}`).innerHTML = `Active`;
                allDeviceCurrentStatus[i] = `Active`;
                break;
            case `Deactivate`:
                document.getElementById(`statusTd${i}`).innerHTML = `Not active`;
                allDeviceCurrentStatus[i] = `Not active`;
                break;
            case `Open settings`:
                document.getElementById(`statusTd${i}`).innerHTML = `Settings have been opened`;
                allDeviceCurrentStatus[i] = `Settings have been opened`;
                openSettings();
                break;
            case `Raise the temperature`:
                document.getElementById(`statusTd${i}`).innerHTML = `The temperature was increased`;
                allDeviceCurrentStatus[i] = `The temperature was increased`;
                break;
            case `Reduce the temperature`:
                document.getElementById(`statusTd${i}`).innerHTML = `The temperature was reduced`;
                allDeviceCurrentStatus[i] = `The temperature was reduced`;
                break; 
            case `Raise the blinds`:
                document.getElementById(`statusTd${i}`).innerHTML = `The blinds were raised`;
                allDeviceCurrentStatus[i] = `The blinds were raised`;
                break;
            case `Lower the blinds`:
                document.getElementById(`statusTd${i}`).innerHTML = `The blinds were lowered`;
                allDeviceCurrentStatus[i] = `The blinds were lowered`;
                break;  
            case `Increase brightness`:
                document.getElementById(`statusTd${i}`).innerHTML = `The lighting was increased`;
                allDeviceCurrentStatus[i] = `The lighting was increased`;
                break; 
            case `Reduce brightness`:
                document.getElementById(`statusTd${i}`).innerHTML = `The lighting was reduced`;
                allDeviceCurrentStatus[i] = `The lighting was reduced`;
                break; 
            case `Go to the next channel`:
                document.getElementById(`statusTd${i}`).innerHTML = `The next channel was turned on`;
                allDeviceCurrentStatus[i] = `The next channel was turned on`;
                break;
            case `Go to the previous channel`:
                document.getElementById(`statusTd${i}`).innerHTML = `The previous channel was turned on`;
                allDeviceCurrentStatus[i] = `The previous channel was turned on`;
                break;
            case `Display a list of channels`:
                document.getElementById(`statusTd${i}`).innerHTML = `The channel list has been displayed`;
                allDeviceCurrentStatus[i] = `The channel list has been displayed`;
                displayChannelsList();
                break;
            case `Increase the volume`:
                document.getElementById(`statusTd${i}`).innerHTML = `The sound was amplified`;
                allDeviceCurrentStatus[i] = `The sound was amplified`;
                break;
            case `Turn down the volume`:
                document.getElementById(`statusTd${i}`).innerHTML = `The sound was reduced`;
                allDeviceCurrentStatus[i] = `The sound was reduced`;
                break;
            case `Display temperature`:
                document.getElementById(`statusTd${i}`).innerHTML = `The temperature was shown`;
                allDeviceCurrentStatus[i] = `The temperature was shown`;
                showTemperature();
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

function openSettings() {
    window.open(`options.html`, `Options`, ` resizable=0,width=470,height=470`);
} 

function displayChannelsList() {
    alert(`Channel list:\n1. Новий канал\n2. СТБ\n3. 1+1\n4. Інтер\n5. К1\n6. ICTV\n7. НЛО TV\n8. TET\n9. 5 канал\n10. РАДА`)
}

function showTemperature() {
    alert(`Current temperature: ${Math.floor( Math.random() * (30 - 10) + 10)}C`);
}