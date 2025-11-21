import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent, Title } from "./style";
import type { LoginFormValues } from "./type";

function LoginForm() {
  // ---sozdanie validacionnoi shemi s pomoshyu Yup
  const shema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is requaired")
      .email("field has type email")// pole dolzhno bit tipom email// email znachit chto dolzha bit sobaka
      .max(20, "Max 20 symbols")
      .min(10,"min 10 symbols")
      .typeError("Email must be string"),
    password: Yup.number()
      .required("Field password is required")
      .test("CheckMax","Max 20 symbols",(value)=>String(value).length <=20)
      .typeError("Password must be number"),
  });

  // --- Настройка формы через Formik
  // Для контроля формы через формик нужно использовать хук из Formik, который
  // называется useFormik. Хук useFormik принимает в качестве аргумента объект с
  // настройками формы и возвращает объект с помощью которого мы можем контроливать
  // определённую форму
  const formik = useFormik({
    // в объекте есть два обязательных свойства initialValues и onSubmit
    // initialValues содержит объект, у которого ключами являются значения name из полей формы,
    // а значениями свойств - первоначальные значения, которые должны быть в полях
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues, // tipizirovali formu

    //dobavlenie validacionnoi shemi
    validationSchema: shema,
    validateOnChange: false,
    //eto dlya togo chtob poka me ne otpravim zapros to i otobrozhatsya oshibka ne budet
    // onSubmit должно содержать функцию, которая будет вызвана тогда, когда произойдёт submit формы
    // в первом параметре этой функции мы получаем доступ к актуальным значениям из полей
    onSubmit: (values: LoginFormValues): void => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      {/* deisTVIE DOLZHNO BIT PRIVYAZANO K FORME */}
      {/* Ты передаёшь ей onSubmit={formik.handleSubmit} — это функция, которая будет вызвана 
      при нажатии кнопки type="submit".
Важно: если LoginFormComponent не является настоящим тегом <form>, 
событие submit может не сработать. */}
      <Title>Login form</Title>
      <Input
        name="email"
        label="Email"
        placeholder="Enter your email"
        value={formik.values.email}
        error={formik.errors.email}
        //formik.values — это объект, где ключи соответствуют именам полей
        //  (в твоём случае email).
        // То есть formik.values.email возвращает текущее значение поля email,
        // которое Formik хранит.
        onChange={formik.handleChange}
        // Это обработчик события изменения (срабатывает, когда пользователь что-то вводит в поле).

        // formik.handleChange — это функция, которую Formik предоставляет “из коробки”.

        // Она автоматически обновляет formik.values при каждом изменении ввода.
      />
      <Input
        name="password"
        label="password"
        type="password" // eto tip dlya parolya
        placeholder=""
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button name="Login" type="submit" />
    </LoginFormComponent>
  );
}
export default LoginForm;
