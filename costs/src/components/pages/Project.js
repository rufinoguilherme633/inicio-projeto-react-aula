// import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Project() {
  const { id } = useParams();
  console.log(id); // pegar id da url
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) // Corrigido: adicionar () após resp.json
      .then((data) => {
        setProject(data);
        console.log(data);
      })
      .catch((err) => console.log(err)); // Corrigido: alterar "err" para "erro"
  }, [id]);

  return (
    <>
    <h1>{project.name}</h1>
    <h1>{project.budget}</h1>
    </>
  )
}
export default Project;
