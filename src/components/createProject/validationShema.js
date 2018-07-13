import { object, string } from 'yup'

const schema = object().shape({
    name:        string().required(),
    projectName: string().required(),
    email:       string().email(),
    description: string().required(),
    uni:         string().required(),
    city:        string().required(),
    password:    string().required(),
    lang:        string().required(),
})

export default schema