import React from "react"
import ConditionalLayout from "../components/ConditionalLayout"
import Axios from "axios"

class addTaskPage extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      escription: '',
      name: ''
    }
}

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeDesc(e) {
    this.setState({ description: e.target.value })
  }
  // life cyle request
  handleSubmit = event => {
    event.preventDefault()

    const task = {
      name: this.state.name,
      description: this.state.description,
    }

    Axios.post(`https://strapi-task-tracker-app.herokuapp.com/tasks`, task)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    this.setState({ name: "", description: "" })
  }
  // postTasks = async () => {
  //   let data = await Axios({
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     url: "https://strapi-task-tracker-app.herokuapp.com/tasks",
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   })
  // }
  render() {
    return (
      <ConditionalLayout>
        <div className="text-xl float-left text-center ">Add Task</div>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl m-auto">
          <div className="col-span-2 lg:col-span-2">
            Task
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
              className="border-solid border-gray-200 focus:border-gray-700 border-2 p-3 rounded text-base w-full"
              placeholder="Water my plants"
            />
          </div>
          <div className="col-span-2">
            Description
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.onChangeDesc}
              cols="30"
              rows="3"
              className="border-solid border-gray-200 focus:border-gray-700 rounded border-2 p-3 text-base w-full"
              placeholder="Water the Aloe veras out back"
            ></textarea>
          </div>

          <div className="col-span-2 text-right">
            <button
              onClick={this.handleSubmit}
              className="py-2 px-4 bg-red-500 rounded text-white font-bold w-full sm:w-32"
            >
              Add Task
            </button>
          </div>
        </div>
      </ConditionalLayout>
    )
  }
}

export default addTaskPage
