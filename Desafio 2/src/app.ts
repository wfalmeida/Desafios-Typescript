const inputAge = document.querySelector('[name = "age"]') as HTMLInputElement;
const inputName = document.querySelector('[name = "name"]') as HTMLInputElement;
const selectOccupation = document.querySelector('[name = "occupation"]') as HTMLSelectElement;
const personsList = document.querySelector('ul') as HTMLDListElement;
const form = document.querySelector('.form') as HTMLFormElement;

enum OccupationEnum {
    Atriz, 
    Padeiro
}

interface IPerson {
    age: number,
    name: string
    occupation: OccupationEnum
}

const createNewPerson = () : IPerson => {

    const selectedOption:string = selectOccupation.options[selectOccupation.selectedIndex].value

    const newPerson: IPerson = {
        name: inputName.value,
        age: Number(inputAge.value),
        occupation: selectedOption === "Atriz" ? OccupationEnum.Atriz : OccupationEnum.Padeiro
    }


    return newPerson;
}

const addNewPersonToList = () => {

    const person: IPerson = createNewPerson();

    const newItem = `<li class="person-item">
                        <span>
                            ${person.name}
                        </span>
                        <span>
                            ${person.age}
                        </span>
                        <span>
                            ${OccupationEnum[person.occupation]}
                        </span>
                    </li>`
    
    personsList.innerHTML += newItem;
}


const nullInputs = !inputAge && !inputName && !selectOccupation;
const ageIsNumber = typeof Number(inputAge.value) === "number" ? true : false;

if(form && !nullInputs && ageIsNumber) {
    form.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();
        addNewPersonToList();
    })
}
