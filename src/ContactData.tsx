import React, { useState } from "react";
import Input from "./common/Input/Input";
import Button from "./common/Button/Button";
import { updateObject, checkValidity } from "./Utility/utility";

interface IState {
  [key: string]: any;
}
interface IFormData {
  [key: string]: {};
}

interface IProps {}
function ContactData(props: IProps) {
  const [orderForm, setOrderForm] = useState<IState>({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZIP Code",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-Mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      value: "fastest",
      validation: {},
      valid: true,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = (event: any) => {
    event.preventDefault();
    console.log(orderForm.name.value);
    const formData: IFormData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    console.log(formData);
  };

  const inputChangedHandler = (value: string, inputIdentifier: string) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: value,
      valid: checkValidity(value, orderForm[inputIdentifier].validation),
      touched: true,
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };
  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }
  console.log(formElementsArray);
  return (
    <div>
      <h4>Enter your Contact Data</h4>
      <form onSubmit={orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event: React.ChangeEvent<HTMLInputElement>): void =>
              inputChangedHandler(event.target.value, formElement.id)
            }
          />
        ))}
        <Button btnType="primary" disabled={!formIsValid}>
          ORDER
        </Button>
      </form>
    </div>
  );
}
export default ContactData;
