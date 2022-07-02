# Desafio 1 - Refatoração de código para TypeScript

 
Enunciado: refatorar o código JS abaixo para que não apresente erros utilizando Typescript.

``` javascript
let employee = {};
employee.code = 10;
employee.name = "John";
```

**Features implementadas no desafio:**

* Elaboração de uma interface para criação de um "empregado".
``` javascript
interface IEmployee {
    code: number,
    name: string
}
```
* Elaboração de um método para criar um novo empregado.
```javascript
const createNewEmployee = () : IEmployee => {
    const newEmployee: IEmployee = {
        name: inputName.value,
        code: Number(inputCode.value)
    }

    return newEmployee;
}
```
* Elaboração de um método para criar um novo item HTML na lista de empregados.
```javascript
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
```
* Elaboração de uma interface responsiva para uma melhor visualização do desafio.

![Interface Gráfica para cadastrar empregados - GIF](/assets/images/GIF.gif)

