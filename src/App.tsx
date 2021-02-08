import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer
} from 'react';

interface IUser {
  name: string
  login: string
  avatar_url: string
}

function App() {
  const [user, setUser] = useState<IUser>()
  const [users, setUsers] = useState<[IUser]>() // apenas para o exemplo do useMemo
  const inputRef = useRef<HTMLInputElement>(null) // useRef nunca inicia como undefined tem q ser null

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

  const greeting = useCallback(
    (user: IUser) => alert(`Hello ${user.name}`),
    []
  )

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const response = await fetch('https://api.github.com/users/CristiAllan')
    const data = await response.json()

    setUser(data)
  }

  inputRef.current?.focus()

  return (
    <div className="App">
      {/* {user?.name} */}

      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
