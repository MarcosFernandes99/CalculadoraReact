import { screen, fireEvent, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Input from "../atomos/Input"

test("Deve verificar texto no input", () => {
    render(<Input />)

    const inputName = screen.getByTestId("test-input-name")
    const inputAge = screen.getByTestId("test-input-age")
    const buttonSubmit = screen.getByTestId("test-button")

    fireEvent.change(inputName, {
        target: {
            value: "marcos"
        }
    })
    fireEvent.change(inputAge, {
        target: {
            value: "28"
        }
    })    

    expect(inputName).toHaveValue("marcos")
    expect(inputAge).toHaveValue("28")

})