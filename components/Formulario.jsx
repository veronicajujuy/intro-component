import {useFormik} from "formik"

const Formulario = () => {

const validate = (values) =>{
    const errors = {}
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!values.name) {
        errors.name = "First Name cannot be empty"
    }
    if(!values.lastname) {
        errors.lastname = "Last Name cannot be empty"
    }
    if(!emailRegex.test(values.email)) {
        errors.email = "Looks like this is not an email"
    }
    if(!values.password) {
        errors.password = "Password cannot be empty"
    }
    
    return errors
}

const formik = useFormik({
    initialValues: {
        name: "",
        lastname:"",
        email:"",
        password:""
    },
    validate,
    onSubmit: values => console.log(values)
})
  return (
    <form onSubmit={formik.handleSubmit}>
        <input 
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="First Name"
        />
        {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span>: null}
        <input 
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            placeholder="Last Name"
        />
        {formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span>: null}
        <input 
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>: null}
        <input 
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span>: null}
        <button type="submit">Enviar</button>
    </form>

  )
}
export default Formulario
