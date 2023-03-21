import {useFormik} from "formik"
import "./Formulario.css"

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
    <div className="container-form">
        <button className="button-principal"><span className="button-enfasis">Try it free 7 days</span> then $20/mo. thereafter</button>  
        <form className="formulario" onSubmit={formik.handleSubmit}>
            <div class="input-container">
                <input 
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="First Name"
                    className={formik.errors.name ? "input-error": "normal"}
                />
                {formik.touched.name && formik.errors.name ? <span className="error">{formik.errors.name}</span>: null}
            </div>
            <div class="input-container">
                <input 
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    placeholder="Last Name"
                    className={formik.errors.lastname ? "input-error": "normal"}
                />
                {formik.touched.lastname && formik.errors.lastname ? <span className="error">{formik.errors.lastname}</span>: null}
            </div>
            <div class="input-container">
                <input 
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                    className={formik.errors.email ? "input-error": "normal"}
                />
                {formik.touched.email && formik.errors.email ? <span className="error">{formik.errors.email}</span>: null}
            </div>
            <div class="input-container">
                <input 
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    className={formik.errors.password ? "input-error": "normal"}
                />
                {formik.touched.password && formik.errors.password ? <span className="error">{formik.errors.password}</span>: null}
            </div>
            <button type="submit" className="button-trial">CLAIM YOUR FREE TRIAL</button>
            <label className="label">By clicking the button you are agreeing to our <span className="terms">Terms and Services</span></label>
        </form>
    </div>
  )
}
export default Formulario
