import "./Tasks.css";
import { GoX } from "react-icons/go";

function Tasks({ form }) {

  const clickLi = (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName === "H5" || e.target.tagName === "P"){
      if(e.target.parentElement.parentElement.style.textDecoration === "none"){
        e.target.parentElement.parentElement.style.textDecoration = "line-through"
        e.target.parentElement.parentElement.style.transition = "all 1s"
        e.target.parentElement.parentElement.style.transform = "scale(0.95)"
      }else {
        e.target.parentElement.parentElement.style.textDecoration = "none";
        e.target.parentElement.parentElement.style.transform = "scale(1)"
      }
    }else if(e.target.tagName === "DIV"){
      if(e.target.parentElement.style.textDecoration === "none"){
        e.target.parentElement.style.textDecoration = "line-through"
        e.target.parentElement.style.transition = "all 1s"
        e.target.parentElement.style.transform = "scale(0.95)"
      }else {
        e.target.parentElement.style.textDecoration = "none";
        e.target.parentElement.style.transform = "scale(1)"
      }
    }else {
      if(e.target.style.textDecoration === "none"){
        e.target.style.textDecoration = "line-through"
        e.target.style.transition = "all 1s"
        e.target.style.transform = "scale(0.95)"
      }else {
        e.target.style.textDecoration = "none";
        e.target.style.transform = "scale(1)"
      }
    }

    
  }

  const removeIcon = (e) =>{
    console.log(e.target.tagName);
    if(e.target.tagName ==="path"){
      e.target.parentElement.parentElement.parentElement.remove();
    }else if(e.target.tagName ==="svg"){
      e.target.parentElement.parentElement.remove();
    }
  }
  // console.log(form);
  return (
    <div className="ul">
      <ul>
        {form.formArray.map((e, i) => (
          <li className="li" onClick={clickLi}>
            <div>
              <h5>{e.task}</h5>
              <p>{e.date}</p>
            </div>
            <div className="icon_div">
              <GoX className="icon" onClick={removeIcon}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
