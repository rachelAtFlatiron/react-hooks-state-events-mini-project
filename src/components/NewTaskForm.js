import { useState } from "react";

/*

- controlled form
  - state
  - onChange
  - value 
- submit to update tasks state

*/
function NewTaskForm({ addTask, categories }) {

  const formOutline = {
      text: '',
      category: ''
  }

  const [form, setForm] = useState(formOutline)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(form)
    setForm(formOutline)
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="new-task-form">
      <label>
        Details
        <input onChange={e => handleChange(e)} type="text" name="text" value={form.text} />
      </label>
      <label>
        Category
        <select onChange={e => handleChange(e)} name="category" value={form.category} >
          {
            categories.map((el,i) => {
              return (<option key={i} value={el}>{el}</option>)
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
