import { UserCard } from "./componets/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import "./styles.css";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
