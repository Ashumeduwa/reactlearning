import Table from "react-bootstrap/Table";

function CardExample() {
  let AcountDetails = [
    { name: "Ashutosh", email: "ashutosh.sharma3@gmail.com" },
    { name: "Ashish", email: "ashish.sharma3@gmail.com" },
    { name: "Rashmi", email: "rashmi.sharma3@gmail.com" },
    { name: "peter", email: "peter.sharma3@gmail.com" },
  ];
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {AcountDetails.map((item, index) => (
            <tr key={index}>
              <td> {item.name} </td>
              <td> {item.email} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CardExample;