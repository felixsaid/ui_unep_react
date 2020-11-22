import React, {useEffect, useState, Fragment} from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

const ListProjects = () => {

    const [projects, setProjects] = useState([]);

     //delete project function

  async function deleteProject(id) {
    try {
      const res = await fetch(`http://localhost:4001/api/projects/${id}`, {
        method: "DELETE",
      });


      toast.success(res.message);

      setProjects(projects.filter((project) => project.projectId != id));
    } catch (err) {
      console.error(err.message);
    }
  }

    async function GetAllProjects(){
        const res = await fetch("http://localhost:4001/api/projects/all");

        const response = await res.json();

        setProjects(response.data);
    }

    useEffect(() => {
        GetAllProjects();
    }, []);


    console.log(projects);

    return(
        <Fragment>
            <table className="table mt-5">
                <thead>
                <tr>
                    <th>Project Ref </th>
                    <th>Project Title</th>
                    <th>Country Name</th>
                    <th>Implementing Office </th>
                    <th>Grant Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key = {project.projectId}>
                            <td>{project.projectRef}</td>
                            <td>{project.projectTitle}</td>
                            <td>{project.countryName}</td>
                            <td>{project.implementingOffice}</td>
                            <td>{project.grantAmount}</td>
                            <td colSpan="3">
                                <a class="btn btn-primary" href="#" aria-label="View">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>

                                <a class="btn btn-default" href="#" aria-label="Edit">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </a>

                                <button className="btn btn-danger" onClick={() => deleteProject(project.projectId)}>
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </button>

                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListProjects;