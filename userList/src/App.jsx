import UserList from "./UserList"


function App() {
 
const data = [
  {
    id:1,
    name:"harsh",
    age:"22"
  },
  {
    id:2,
    name:"goel",
    age:"22"
  },
  {
    id:3,
    name:"dhruv",
    age:"22"
  },
  {
    id:4,
    name:"prachi",
    age:"22"
  },
]

  return (
    <div>
      <UserList data={data} />
    </div>
  )
}

export default App
