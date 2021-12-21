import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ Items: [] });

  const fetchData = async () => {
    const result = await axios(
      "https://edokog0if2.execute-api.ap-southeast-1.amazonaws.com/guitar/"
    );
    setData(result.data.body);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <center>
        <table>
          <tr>
            <th>ID</th>
            <th>Date</th>
          </tr>
          {data.Items.map(function (data) {
            return (
              <tr>
                <td>
                  <p>{data.ID}</p>
                </td>
                <td>
                  <p>{data.LatestGreetingTime}</p>
                </td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default App;
