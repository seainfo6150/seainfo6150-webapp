import React, { useEffect, useState } from "react";

const JsFundamentalsDataFetching = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson.data);
    };

    if (!fetchedData.length) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;

  if (fetchedData.length) {
    displayContent = (
      <ul>
        {fetchedData.map((item) => (
          <li key={item.id}>{item.employee_name}</li>
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      <header>
        <h2>Data fetching</h2>
      </header>
      {displayContent}
    </section>
  );
};

export default JsFundamentalsDataFetching;
