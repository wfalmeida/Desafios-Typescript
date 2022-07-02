const inputCode = document.querySelector('[name = "code"]') as HTMLInputElement;
const inputName = document.querySelector('[name = "name"]') as HTMLInputElement;
const employeesList = document.querySelector('ul') as HTMLDListElement;
const form = document.querySelector('.form') as HTMLFormElement;
interface IEmployee {
    code: number,
    name: string
}

const createNewEmployee = () : IEmployee => {
    const newEmployee: IEmployee = {
        name: inputName.value,
        code: Number(inputCode.value)
    }

    return newEmployee;
}

const addNewEmployeeToList = () => {

    const employee: IEmployee = createNewEmployee();

    const newItem = `<li class="employee-item">
                        <span>
                            ${employee.name}
                        </span>
                        <span>
                            ${employee.code}
                        </span>
                    </li>`
    
    employeesList.innerHTML += newItem;
}


const nullInputs = !inputCode && !inputName;
const codeIsNumber = typeof Number(inputCode.value) === "number" ? true : false;

if(form && !nullInputs && codeIsNumber) {
    form.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();
        addNewEmployeeToList();
    })
}
